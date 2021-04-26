import ReactMapGL, { 
    FullscreenControl,
    NavigationControl,
    Layer,
    Source
} from "react-map-gl";
import { useState, useRef, useMemo } from "react";
import axios from "axios";

import Container from "../components/Container";
import { Coordinate } from '../database/Coordinate';
import keys from "../keys";

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
        const { data } = await axios.put("/api/exposurelocations", {
            ...bounds,
            known_ids: cache.exposures.map(e => e._id)
        });
        setCache((current) => {
            return { input: hashed, exposures: [...current.exposures, ...data] }
        });
    }

    const geojson = useMemo(() => generateGeojson(cache.exposures), [cache.exposures]);

    return (
        <Container className="overflow-hidden">
            <ReactMapGL mapboxApiAccessToken={apiKey}
                width="100%" height="100%"
                mapStyle="mapbox://styles/mapbox/streets-v11"
                {...viewport} 
                onViewportChange={(vp) => {
                    setViewport(vp);
                    findExposures();
                }}
                ref={mapRef}
            >
                <NavigationControl 
                    showZoom={true}
                    showCompass={false} 
                />
                <FullscreenControl className="right-0" />

                <Source type="geojson" data={geojson}>
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
                        "heatmap-intensity": getIntensity(viewport.zoom), 
                        "heatmap-opacity": 0.67,
                        "heatmap-radius": 35
                    }} />
                </Source>

            </ReactMapGL>
        </Container>
    );
}

export async function getStaticProps() {
    return {
        props: {
            apiKey: keys.mapbox
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
                properties: {}
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
 function getIntensity(zoom: number): number {
    return Math.max(0.01, 0.0825*zoom - 0.155)
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