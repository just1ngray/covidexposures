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
    const [page, setPage] = useState(0);

    const toShow = times.all.slice(page * perPage, page * perPage + perPage);
    const maxPages = Math.ceil(times.all.length / perPage) - 1;

    return (
        <div>
            {toShow.map((e,i) =>
                <div key={i} className="align-text-top mb-2">
                    {new Date(e.start).toLocaleString()}
                    {" to "}
                    {new Date(e.end).toLocaleString()}
                    <p className="text-gray-400">{e.instructions}</p>
                </div>
            )}
            
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