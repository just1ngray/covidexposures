import Container from "../components/Container";
import { ScraperModel, Scraper } from "../database/Scraper";
import * as db from "../database/db";

interface Props {
    scrapers: Scraper[],
    updated: number
}

export default function Status({ scrapers, updated }: Props) {
    const updatedFormatted = (new Date(updated)).toLocaleTimeString();

    return (
        <Container>
            <h2>Status:</h2>
            {/* <pre>{JSON.stringify(scrapers, null, 2)}</pre> */}

            <p>Updated {updatedFormatted}</p>
        </Container>
    );
}

export async function getStaticProps() {
    await db.connect();
    const scrapers = await ScraperModel.find()
        .select("-_id -__v")
        .lean() as Scraper[];
    await db.disconnect();

    return {
        props: { 
            scrapers,
            updated: Date.now()
        },
        revalidate: 5*60 // 5 minutes
    }
}