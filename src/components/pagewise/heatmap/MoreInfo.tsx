import { Popup } from "react-map-gl";
import { useState } from "react";

import { Exposure } from "../../../database/Exposure";

interface Timeframes {
    all: {
        start: number,
        end: number,
        instructions: string
    }[]
}

interface Props {
    /* overlapping exposure */
    exposure: Exposure & Timeframes,
    close: () => void
}

export default function MoreInfo({ exposure, close }: Props) {
    console.log(exposure);

    return (
        <Popup closeOnClick={false}
            onClose={close}
            longitude={exposure.coord.long}
            latitude={exposure.coord.lat}
        >
            <div className="cursor-default">
                <div className="border-b border-gray-500 pb-1 mb-1 text-center">
                    <h3 className="text-xl font-semibold">{exposure.name}</h3>
                    <p className="text-gray-500 text-xs -mt-1">{exposure.address}</p>
                    <a href={exposure.scraper.URL} className="underline text-blue-500 cursor-pointer">
                        {exposure.scraper.URL}
                    </a>
                </div>

                {/* <ol className="text-xs text-gray-600 tracking-tight">
                    {exposure.all.map((doc, i) =>
                        <li key={i} className="mb-2">
                            <span className="inline-block align-text-top">
                                {new Date(doc.start).toLocaleString()}
                                {" to "}
                                {new Date(doc.end).toLocaleString()}
                                <p className="text-gray-400">{exposure.instructions}</p>
                            </span>
                        </li>
                    )}
                </ol> */}
                <TimeframePaginate perPage={4} times={exposure} />

            </div>
        </Popup>
    );
}

interface ExposurePageProps {
    times: Timeframes,
    perPage: number
}

function TimeframePaginate({ times, perPage }: ExposurePageProps) {
    return (
        <div>
            DEMO REMOVED... showed paginated times & instructions for the location
        </div>
    );
}