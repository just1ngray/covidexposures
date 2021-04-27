import emoji from "country-to-emoji-flag";

import Container from "../components/Container";
import ScraperStatus from "../components/pagewise/status/ScraperStatus"
import { ScraperModel, Scraper } from "../database/Scraper";
import { ExposureModel } from "../database/Exposure";
import * as db from "../database/db";
import Contribute from "../components/Contribute";

interface Props {
    scrapers: [Scraper & { count: number}],
    updated: number
}

export default function Status({ scrapers, updated }: Props) {
    return (
        <Container>
            <p className="mb-4 underline p-2">
                Last Updated: {new Date(updated).toLocaleTimeString()}
            </p>
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
    await db.connect();
    const scrapers = await ScraperModel.find() as Scraper[];
    
    // count the number of exposures which reference this scraper
    const addCounts = [];
    for (const s of scrapers)
        addCounts.push(
            ExposureModel.countDocuments({ scraper: s._id })
                .then((n) => (s as any).count = n)
        );
    await Promise.all(addCounts);

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
            }),
            updated: Date.now()
        },
        revalidate: 5*60 // 5 minutes
    }
}