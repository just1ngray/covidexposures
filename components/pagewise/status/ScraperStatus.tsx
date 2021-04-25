import { Scraper } from "../../../database/Scraper";

interface ScraperProps {
    scraper: Scraper & { count: number }
}

export default function ScraperStatus({ scraper }: ScraperProps) {
    const col = scraper.isActive ? "bg-green-400" : "bg-red-400"
    const name = scraper.name.split(".")[0];

    return (
        <button onClick={() => window.location.href=scraper.URL} className="
            shadow-lg p-2 rounded-md
            cursor-pointer hover:bg-gray-100
            transform hover:-translate-y-1 hover:scale-105 duration-100
            flex flex-col
            w-full md:w-auto
            truncate
            relative
        ">
            <div className="flex flex-row items-center w-full absolute right-1">
                <p className="pr-1 flex-grow text-right text-gray-500 text-xs">
                    {scraper.isActive ? "Active" : "Inactive"}
                </p>

                <span className="flex h-3 w-3 relative">
                    <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-50 ${col} ${scraper.isActive ? "" : "hidden"}`} />
                    <span className={`relative inline-flex rounded-full h-3 w-3 ${col}`} />
                </span>
            </div>

            <h3 className="text-4xl text-left border-b-2 w-full font-medium">{name}</h3>
            <div className="underline text-blue-400">{scraper.URL}</div>

            <div className="text-gray-600 text-left">
                <p>First Checked: {new Date(scraper.firstScrape).toLocaleString()}</p>
                <p>Last Checked: {new Date(scraper.lastScrape).toLocaleString()}</p>
                <p># Exposures Tracked: {scraper.count}</p>
            </div>
        </button>
    );
}