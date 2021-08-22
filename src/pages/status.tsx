import emoji from "country-to-emoji-flag";

import Container from "../components/Container";
import ScraperStatus from "../components/pagewise/status/ScraperStatus"
import { ScraperModel, Scraper } from "../database/Scraper";
import { ExposureModel } from "../database/Exposure";
import * as db from "../database/db";
import Contribute from "../components/pagewise/status/Contribute";

interface Props {
    scrapers: [Scraper & { count: number}]
}

export default function Status({ scrapers }: Props) {
    return (
        <Container>
            <div className="
                grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3
                gap-4
            ">
                {scrapers.map(s => <ScraperStatus key={s.name} scraper={s} />)}
            </div>

            <div className="flex-grow"></div>

            <Contribute message="Add your local health authority's website to our monitoring list." />
        </Container>
    );
}

export async function getStaticProps() {
    const fs = require("fs");
    let scrapers = JSON.parse(fs.readFileSync("src/database/scrapers.json", { encoding: "utf8" }));

    // count the number of exposures which reference this scraper
    scrapers = scrapers.map((s) => ({ ...s, count: "DEMO REMOVED" }));
    scrapers.sort((a, b) => Number(a.isActive) - Number(b.isActive))

    return {
        props: {
            scrapers: scrapers.map((s) => {
                return {
                    URL: s.URL,
                    firstScrape: s.firstScrape,
                    lastScrape: s.lastScrape,
                    isActive: s.isActive,
                    name: s.name,
                    country: emoji(s.country.split(",")[0]),
                    language: s.language.split(",")[0],
                    count: (s as any).count,
                    tags: s.tags
                }
            })
        }
    }
}