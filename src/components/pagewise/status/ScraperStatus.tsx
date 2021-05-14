import { Scraper } from "../../../database/Scraper";
import PopButton from "../../PopButton";

interface ScraperProps {
    scraper: Scraper & { count: number }
}

export default function ScraperStatus({ scraper }: ScraperProps) {
    const col = scraper.isActive ? "bg-green-400" : "bg-red-400"
    const name = scraper.name.split(".")[0];

    return (
        <a href={scraper.URL}>
            <PopButton className="
                shadow-lg p-2 rounded-md
                flex flex-col
                w-full
                truncate
            ">
                <h3 className="mt-2 text-4xl text-left border-b-2 font-medium w-full">
                    <span className="float-right text-xs font-thin">{scraper.language}</span>
                    {scraper.country} {name}
                </h3>
                <div className="underline text-blue-500 text-left">{scraper.URL}</div>

                <div className="text-gray-600 text-left">
                    <p>First Checked: {new Date(scraper.firstScrape).toLocaleString()}</p>
                    <p>Last Checked: {new Date(scraper.lastScrape).toLocaleString()}</p>
                    <p># Exposures Tracked: {scraper.count}</p>
                </div>

                <div className="mt-2 -mb-0.5 text-left">
                    {scraper.tags.map((t, i) => 
                        <span key={i} className="
                            text-xs font-light
                            mr-1 px-1 py-0.5
                            rounded-xl border border-gray-800
                        ">{t}</span>)
                    }
                </div>

                <div className="flex flex-row items-center w-full absolute right-1 bottom-1">
                    <p className="pr-1 flex-grow text-right text-gray-500 text-xs">
                        {scraper.isActive ? "Active" : "Inactive"}
                    </p>

                    <span className="flex h-3 w-3 relative">
                        <span className={
                            `animate-ping 
                            absolute inline-flex h-full w-full 
                            rounded-full opacity-50 
                            ${col} ${scraper.isActive ? "" : "hidden"}
                        `} />
                        <span className={`relative inline-flex rounded-full h-3 w-3 ${col}`} />
                    </span>
                </div>
            </PopButton>
        </a>
    );
}