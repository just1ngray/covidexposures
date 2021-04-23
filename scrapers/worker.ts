import { ScraperModel, Scraper } from "../database/Scraper";
import fs from "fs";

export default async function() {
    await initScrapers();

    await new Promise<void>((resolve) => {
        setTimeout(() => resolve(), 1000*60*10);
    });

    while (true) {
        const scrapers: Scraper[] = await ScraperModel.find();

        for (const scraper of scrapers) {
            try {
                const amt = await scraper.scrape();
                if (amt > 0) console.log(`Added ${amt} exposures via ${scraper.name}`);
            } catch {
                // do nothing
            }
        }

        await new Promise<void>((resolve) => {
            setTimeout(() => resolve(), 1000*60*20);
        });
    }
}

function initScrapers(): Promise<void> {
    return new Promise((resolve, reject) => {
        fs.readdir("./scrapers", async (err, scraperFiles: string[]) => {
            if (err) reject(err);

            const saveNscrape: Promise<any>[] = [];

            for (const scraperFile of scraperFiles) {
                if (__filename.endsWith(scraperFile)) continue;

                const scraper: Scraper = new ScraperModel({ 
                    URL: require(`./${scraperFile}`).URL,
                    name: scraperFile
                });
                const exists = await ScraperModel.exists({ URL: scraper.URL });
                if (!exists) {
                    saveNscrape.push(
                        scraper.save().then(() => scraper.scrape())
                    );
                }
            }

            Promise.all(saveNscrape).then(() => resolve());
        });
    });
}