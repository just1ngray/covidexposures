import { ScraperModel, Scraper } from "../database/Scraper";
import * as db from "../database/db";

export default function Status({ scrapers }) {
    return (
        <>
            <h2>Status: </h2>
            <pre>{JSON.stringify(scrapers, null, 2)}</pre>
        </>
    );
}

export async function getServerSideProps() {
    await db.connect();
    const scrapers = await ScraperModel.find();
    await db.disconnect();

    console.log(scrapers);

    return {
        props: { scrapers: scrapers.map(s => s.name) }
    }
}