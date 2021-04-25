import Container from "../components/Container";
import ScraperStatus from "../components/pagewise/status/ScraperStatus"
import { ScraperModel, Scraper } from "../database/Scraper";
import { ExposureModel } from "../database/Exposure";
import * as db from "../database/db";
import Contribute from "../components/Contribute";
import PopButton from "../components/PopButton";

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
                grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
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
            ExposureModel.find({ scraper: s._id }).count()
                .then((n) => (s as any).count = n)
        );
    await Promise.all(addCounts);
    await db.disconnect();

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
                    count: (s as any).count
                }
            }),
            updated: Date.now()
        },
        revalidate: 5*60 // 5 minutes
    }
}