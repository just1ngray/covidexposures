import ReactMapGL, { 
    FullscreenControl,
    NavigationControl,
    Layer,
    Source,
    MapEvent,
    Marker
} from "react-map-gl";
import Image from "next/image";
import { useMemo, useState, useEffect } from "react";

import { Subscription } from "../../../database/Subscription";

interface Props {
    apiKey: string,
    subs: Subscription[],
    changeNewSubscription: (changes: Partial<Subscription>) => void,
    newSubscription: Subscription
}

interface Viewport {
    latitude: number,
    longitude: number,
    zoom: number
}

export default function Map({ apiKey, subs, newSubscription, changeNewSubscription }: Props) {
    const geojson = useMemo(() => generateGeojson(subs), [subs]);

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
            properties: {
                radius: newSubscription.radius
            }
        });
    }, [newSubscription.coord, isDraggingMarker]);

    function moveMarker(e: MapEvent) {
        changeNewSubscription({ coord: { long: e.lngLat[0], lat: e.lngLat[1] }} as any);
    }

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
            doubleClickZoom={false}
            onDblClick={moveMarker}
        >
            {/* standard controls */}
            <NavigationControl 
                showZoom={true}
                showCompass={false} 
            />
            <FullscreenControl className="right-0" />

            {/* Previously set locations */}
            <Source type="geojson" data={geojson}>
                <Layer type="circle" paint={{
                    "circle-radius": 15,
                    "circle-opacity": 1,
                    "circle-stroke-opacity": 1,
                    "circle-stroke-width": 1,
                    "circle-color": "#fff",
                }} />
            </Source>

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
                />
            </Marker>

            {/* Radius visualization */}
            <Source type="geojson" data={radiusIndicatorFeature}>
                <Layer id="radius" type="circle" paint={{
                    "circle-radius": {
                        stops: [
                            [0, 0],
                            [20, metersToPixelsAtMaxZoom(newSubscription.radius, newSubscription.coord.lat)]
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

/**
 * https://stackoverflow.com/a/37794326
 * This is a great function! I just added typescript annotations
 */
const metersToPixelsAtMaxZoom = (meters: number, latitude: number) =>
    meters / 0.075 / Math.cos(latitude * Math.PI / 180);

function generateGeojson(subscriptions: Subscription[] = []): GeoJSON.FeatureCollection {
    return {
        type: "FeatureCollection",
        features: (subscriptions ?? []).map((sub) => {
            return {
                type: "Feature",
                geometry: {
                    type: "Point",
                    coordinates: [sub.coord.long, sub.coord.lat]
                },
                properties: {
                    start: sub.start,
                    end: sub.end,
                    radius: sub.radius
                }
            }
        })
    };
}