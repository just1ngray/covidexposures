import ReactMapGL, { 
    FullscreenControl,
    NavigationControl,
    Layer,
    Source,
    MapEvent
} from "react-map-gl";
import { 
    useState, 
    useRef, 
    useMemo, 
    useEffect 
} from "react";
import axios from "axios";
import { Types } from "mongoose";
import Head from "next/head";

import Container from "../components/Container";
import { Coordinate } from '../database/Coordinate';
import { Exposure } from '../database/Exposure';
import keys from "../../keys";
import MoreInfo from "../components/pagewise/heatmap/MoreInfo";

interface ViewPort {
    latitude: number,
    longitude: number,
    zoom: number
}

interface Cache {
    input: any,
    exposures: Coordinate[]
}

let recentCallTime = null;

export default function Heatmap({ apiKey }: { apiKey: string }) {
    const [viewport, setViewport] = useState<ViewPort>({
        latitude: 44.651070,
        longitude: -63.582687,
        zoom: 11
    });
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({ coords }) => {
            setViewport({
                zoom: 11,
                latitude: coords.latitude,
                longitude: coords.longitude
            });
            findExposures();
        });
    }, []);
    const mapRef = useRef(null);

    const [cache, setCache] = useState<Cache>({ input: null, exposures: [] });
    async function findExposures() {
        // precaution against DDOSing the server: only complete the request
        // if there are no more recent ones within XXX ms
        const callTime = Date.now();
        recentCallTime = callTime;
        await new Promise<void>((resolve) => {
            setTimeout(() => resolve(), 250);
        });
        if (recentCallTime !== callTime) return; // another call is more recent

        
        const hashed = hashMapRef(mapRef);
        if (hashed == cache.input) return; // no changes required

        const bounds = JSON.parse(hashed);
        const { data } = await axios.put("/api/exposure/locations", {
            ...bounds,
            known_ids: cache.exposures.map(e => e._id)
        });
        setCache((current) => {
            return { input: hashed, exposures: [...current.exposures, ...data] }
        });
    }

    const geojson = useMemo(() => generateGeojson(cache.exposures), [cache.exposures]);

    const [clickedExposure, setClickedExposure] = useState<Exposure & { all: {
        start: number,
        end: number,
        instructions: string
    }[] } | null>(null);
    async function getClickedExposure(e: MapEvent) {
        if (e.features.length == 0)
            return setClickedExposure(null);

        const { properties } = e.features[0];
        if (!Types.ObjectId.isValid(properties._id))
            return setClickedExposure(null);

        const { data } = await axios.get(`/api/exposure/${properties._id}`);
        setClickedExposure(data);
    }

    return (
        <Container className="h-screen">
            <Head>
                <link href='https://api.mapbox.com/mapbox-gl-js/v2.2.0/mapbox-gl.css' rel='stylesheet' />
            </Head>

            <div className="h-full pb-12">
                <p className="text-center">
                    Showing COVID exposure locations since {` `}
                    {new Date(Date.now() - 1000*60*60*24*30).toLocaleDateString()}.
                </p>

                
                <ReactMapGL mapboxApiAccessToken={apiKey}
                    reuseMaps
                    dragRotate={false}
                    width="100%" height="100%"
                    mapStyle="mapbox://styles/mapbox/streets-v11"
                    {...viewport} 
                    onViewportChange={(vp) => {
                        setViewport({
                            longitude: vp.longitude,
                            latitude: vp.latitude,
                            zoom: vp.zoom
                        });
                        findExposures();
                    }}
                    ref={mapRef}
                    onClick={getClickedExposure}
                >
                    <NavigationControl 
                        showZoom={true}
                        showCompass={false} 
                    />
                    <FullscreenControl className="right-0" />

                    <Source type="geojson" data={geojson}>
                        <Layer type="circle" paint={{
                            "circle-radius": 15,
                            "circle-opacity": getCircleOpacity(viewport.zoom),
                            "circle-stroke-opacity": getCircleOpacity(viewport.zoom),
                            "circle-stroke-width": 1,
                            "circle-color": "#fff",
                        }} />
                        
                        <Layer type="heatmap" paint={{
                            "heatmap-color": [
                                "interpolate", ["linear"],
                                ["heatmap-density"],
                                0, "rgba(0, 0, 255, 0)",
                                0.1, "royalblue",
                                0.3, "cyan",
                                0.5, "lime",
                                0.7, "yellow",
                                1, "red"
                            ],
                            "heatmap-intensity": getHeatmapIntensity(viewport.zoom), 
                            "heatmap-opacity": 0.67,
                            "heatmap-radius": 30
                        }} />
                    </Source>

                    {clickedExposure && <MoreInfo 
                        exposure={clickedExposure} 
                        close={() => setClickedExposure(null)} 
                    />}
                </ReactMapGL>
            </div>
        </Container>
    );
}

export async function getStaticProps() {
    return {
        props: {
            apiKey: keys.mapbox.map
        },
        revalidate: 60*60*6 // 6 hours
    }
}

function generateGeojson(exposures: Coordinate[] = []): GeoJSON.FeatureCollection {
    return {
        type: "FeatureCollection",
        features: exposures.map((e) => {
            return {
                type: "Feature",
                geometry: {
                    type: "Point",
                    coordinates: [e.long, e.lat]
                },
                properties: {
                    _id: e._id
                }
            }
        })
    };
}

/**
 * Gets the intensity of the heatmap. Defaults to 1 when not specified.
 * (Subject to change)
 * https://docs.mapbox.com/mapbox-gl-js/style-spec/layers/#paint-heatmap-heatmap-opacity
 * 
 * @param zoom the current viewport map zoom
 * @returns the heatmap intensity [0,inf)
 */
function getHeatmapIntensity(zoom: number): number {
    const pwDefn = (zoom <= 6.3) 
        ? (0.13706*zoom - 0.16347) 
        : (-0.09708*zoom + 1.32063);
    return Math.max(pwDefn, 0);
}

/**
 * Gets the intensity of the individual exposures. Defaults to 1 when not specified.
 * (Subject to change)
 * https://docs.mapbox.com/mapbox-gl-js/style-spec/layers/#paint-circle-circle-opacity
 * 
 * @param zoom the current viewport map zoom
 * @returns the heatmap intensity [0,1]
 */
function getCircleOpacity(zoom: number): number {
    return Math.max(0, Math.min(1, zoom - 12));
}

/**
 * Encodes the map boundary imprecisely.
 * @param map as a reference
 */
function hashMapRef(map: any): string {
    if (map.current == null) return "null";

    const { _sw, _ne } = map.current.getMap().getBounds();
    const bounds = {
        sw_long: Math.floor(_sw.lng*10) / 10,
        sw_lat: Math.floor(_sw.lat*10) / 10,
        ne_long: Math.ceil(_ne.lng*10) / 10,
        ne_lat: Math.ceil(_ne.lat*10) / 10
    };
    return JSON.stringify(bounds);
}