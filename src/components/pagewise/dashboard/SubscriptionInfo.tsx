import { Source, Layer, Popup } from "react-map-gl";
import { useState } from "react";

import { Subscription } from "../../../database/Subscription";
import ExposureJSX from "../../Exposure";
import mToPx from "../../../util/mToPx";
import { Exposure } from "../../../database/Exposure";

interface Props {
    subscription: Subscription | null,
    setSubscription: (s: Subscription | null) => void,
    vpZoom: number,
    unsubscribe: (s: Subscription) => void
}

const EXPOSURES_PER_PAGE = 1;

export default function SubscriptionInfo({ subscription, setSubscription, vpZoom, unsubscribe }: Props) {
    const [page, setPage] = useState(0);

    return (
        <>{subscription && 
            <Source type="geojson" data={{
                    type: "Feature",
                    geometry: {
                        type: "Point",
                        coordinates: [subscription.coord.long, subscription.coord.lat]
                    },
                    properties: {}
                }}>
                <Layer type="circle" paint={{
                    "circle-radius": {
                        stops: [
                            [0, 0],
                            [20, mToPx(subscription.radius, subscription.coord.lat)]
                        ],
                        base: 2
                    },
                    "circle-color": "gray",
                    "circle-opacity": 0.5,
                    "circle-opacity-transition": { delay: 100, duration: 300 },
                    "circle-stroke-width": vpZoom / 5,
                    "circle-stroke-color": "gray",
                    "circle-stroke-opacity-transition": { delay: 100, duration: 300 }
                }} />
                <Popup latitude={subscription.coord.lat}
                    longitude={subscription.coord.long}
                    onClose={() => setSubscription(null)}
                    closeOnClick={false}
                >
                    <div className="max-w-xs text-sm text-center cursor-auto">
                        <div className="flex flex-wrap justify-center">
                            <span>{new Date(subscription.start).toLocaleString()}</span>
                            <span className="mx-2">to</span>
                            <span>{new Date(subscription.end).toLocaleString()}</span>
                        </div>
                        <hr />

                        {subscription.exposures.length as number == 0 
                            ? <p className="text-sm text-gray-500">No exposures found!</p>
                            : <ExposurePage exposures={subscription.exposures} 
                                page={page} setPage={setPage}
                                perPage={EXPOSURES_PER_PAGE} 
                                />
                        }

                        <hr />
                        <p>Created on: {new Date((subscription as any).createdAt).toLocaleString()}</p>

                        <button type="button" 
                            onClick={() => {
                                unsubscribe(subscription);
                                setSubscription(null);
                            }}
                            className="
                                hover:bg-red-700 hover:text-gray-50
                                bg-red-400 rounded
                                p-2 mx-auto mt-3
                        ">
                            Remove Subscription
                        </button>
                    </div>
                </Popup>
            </Source>
        }</>
    );
}

interface ExposurePageProps {
    exposures: Exposure[],
    page: number,
    perPage: number,
    setPage: (p: number) => void
}

function ExposurePage({ exposures, page, perPage, setPage }: ExposurePageProps) {
    const toShow = exposures.slice(page * perPage, page * perPage + perPage);
    const maxPages = Math.ceil(exposures.length / perPage) - 1;

    return (
        <div>
            {toShow.map((e) => <ExposureJSX key={e._id} e={e} />)}
            
            {maxPages > 1 &&
                <div className="flex justify-center">
                    <button type="button" 
                        disabled={page <= 0} 
                        onClick={() => setPage(Math.max(0, page - 1))}
                        className="
                            border border-gray-400 rounded-l
                            p-1.5 w-24
                            disabled:opacity-40 disabled:cursor-not-allowed
                            hover:bg-gray-100
                    ">
                        {"< Previous"}
                    </button>
                    <span className="border-t border-b border-gray-400 p-1.5 w-16">
                        {page+1}/{maxPages+1}
                    </span>
                    <button type="button" 
                        disabled={page >= maxPages} 
                        onClick={() => setPage(Math.min(maxPages, page + 1))}
                        className="
                            border border-gray-400 rounded-r
                            p-1.5 w-24
                            disabled:opacity-40 disabled:cursor-not-allowed
                            hover:bg-gray-100
                    ">
                        {"Next >"}
                    </button>
                </div>
            }
        </div>
    );
}