import ReactMapGL, { 
    FullscreenControl,
    NavigationControl,
    Layer,
    Source,
    MapEvent,
    Marker,
    WebMercatorViewport
} from "react-map-gl";
import Image from "next/image";
import { 
    useState, 
    useEffect, 
    useRef 
} from "react";
import getBoundsOfDistance from "geolib/es/getBoundsOfDistance";

import { Subscription } from "../../../database/Subscription";
import mToPx from "../../../util/frontend/mToPx";
import SubscriptionInfo from "./SubscriptionInfo";

interface Props {
    apiKey: string,
    subs: Subscription[],
    changeNewSubscription: (changes: Partial<Subscription>) => void,
    newSubscription: Subscription,
    unsubscribe: (s: Subscription) => void
}

interface Viewport {
    latitude: number,
    longitude: number,
    zoom: number
}

export default function Map({ apiKey, subs, newSubscription, changeNewSubscription, unsubscribe }: Props) {
    const [viewport, setViewport] = useState<Viewport>({
        latitude: 44.651070,
        longitude: -63.582687,
        zoom: 11
    });
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({ coords }) => {
            setViewport({
                zoom: 14,
                latitude: coords.latitude,
                longitude: coords.longitude
            });
            changeNewSubscription({ coord: {
                lat: coords.latitude,
                long: coords.longitude
            } as any});
        }, async () => {
            // could not geocode... set to a previously found subscription location
            const start = Date.now();
            while (subs == undefined && start + 2000 < Date.now()) {
                await new Promise<void>((resolve) => {
                    setTimeout(() => resolve(), 200);
                });
            }
            if (subs == undefined || subs.length == 0) return;

            setViewport({
                zoom: 14,
                latitude: subs[0].coord.lat,
                longitude: subs[0].coord.long
            });
            changeNewSubscription({ coord: {
                lat: subs[0].coord.lat - 0.001,
                long: subs[0].coord.long
            } as any});
        });
    }, []);

    const [isDraggingMarker, setIsDraggingMarker] = useState<boolean>(false);

    const [radiusIndicatorFeature, setRadiusIndicatorFeature] = useState(null);
    useEffect(() => {
        if (isDraggingMarker) return;

        setRadiusIndicatorFeature({
            type: "Feature",
            geometry: {
                type: "Point",
                coordinates: [newSubscription.coord.long, newSubscription.coord.lat]
            },
            properties: { radius: newSubscription.radius }
        });
    }, [newSubscription.coord, isDraggingMarker]);

    function moveMarker(e: MapEvent) {
        changeNewSubscription({ coord: { long: e.lngLat[0], lat: e.lngLat[1] }} as any);
    }

    // zoom map to fit currently selected radius of the newSub
    const mapRef = useRef(null);
    useEffect(() => {
        if (mapRef.current == null) return;

        const [sw, ne] = getBoundsOfDistance({ 
            latitude: newSubscription.coord.lat,
            longitude: newSubscription.coord.long
        }, newSubscription.radius) as { longitude: number, latitude: number }[];

        const { longitude, latitude, zoom } = new WebMercatorViewport(viewport as any)
            .fitBounds([
                [sw.longitude, sw.latitude],
                [ne.longitude, ne.latitude]
            ], { padding: -125 });
        setViewport({ longitude, latitude, zoom });
    }, [newSubscription.radius]);

    const [popupSubscriptionDetails, setPopupSubscriptionDetails] = useState<Subscription>(null);

    return (
        <ReactMapGL mapboxApiAccessToken={apiKey}
            dragRotate={false}
            reuseMaps
            width="100%" height="100%"
            mapStyle="mapbox://styles/mapbox/streets-v11"
            {...viewport}
            onViewportChange={(vp) => setViewport({
                longitude: vp.longitude, 
                latitude: vp.latitude, 
                zoom: vp.zoom 
            })}
            onClick={() => setPopupSubscriptionDetails(null)}
            doubleClickZoom={false}
            onDblClick={moveMarker}
            ref={mapRef}
        >
            {/* standard controls */}
            <NavigationControl 
                showZoom={true}
                showCompass={false} 
            />
            <FullscreenControl className="right-0" />

            {/* Previously set locations */}
            {subs && subs.map((s) => 
                <Marker key={s._id}
                    offsetLeft={-25}
                    offsetTop={-25}
                    longitude={s.coord.long}
                    latitude={s.coord.lat}
                >
                    <Image draggable={false} 
                        src={s.exposures.length > 0 ? "/mapbox-marker-icon-red.svg" : "/mapbox-marker-icon-gray.svg"}
                        width={50} height={50}
                        className="cursor-pointer"
                        onClick={() => {
                            setPopupSubscriptionDetails(s);
                        }}
                        onBlur={() => setPopupSubscriptionDetails(null)}
                    />
                </Marker>
            )}
            <SubscriptionInfo subscription={popupSubscriptionDetails}
                setSubscription={setPopupSubscriptionDetails}
                vpZoom={viewport.zoom}
                unsubscribe={unsubscribe}
            />

            {/* Add a new location */}
            <Marker draggable
                offsetLeft={-25}
                offsetTop={-25}
                longitude={newSubscription.coord.long}
                latitude={newSubscription.coord.lat}
                onDragStart={() => setIsDraggingMarker(true)}
                onDrag={(e) => changeNewSubscription({
                    coord: { long: e.lngLat[0], lat: e.lngLat[1] } as any
                })}
                onDragEnd={() => setIsDraggingMarker(false)}
            >
                <Image draggable={false} 
                    src="/mapbox-marker-icon-blue.svg" 
                    width={50} height={50}
                    className="cursor-move"
                />
            </Marker>

            {/* Radius visualization */}
            <Source type="geojson" data={radiusIndicatorFeature}>
                <Layer id="radius" type="circle" paint={{
                    "circle-radius": {
                        stops: [
                            [0, 0],
                            [20, mToPx(newSubscription.radius, newSubscription.coord.lat)]
                        ],
                        base: 2
                    },
                    "circle-color": "orange",
                    "circle-opacity": Number(!isDraggingMarker) * 0.5,
                    "circle-opacity-transition": { delay: 100, duration: 300 },
                    "circle-stroke-width": viewport.zoom / 5,
                    "circle-stroke-color": "orange",
                    "circle-stroke-opacity": Number(!isDraggingMarker),
                    "circle-stroke-opacity-transition": { delay: 100, duration: 300 }
                }} />
            </Source>
        </ReactMapGL>
    );
}