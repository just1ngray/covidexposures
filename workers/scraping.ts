import { ScraperModel, Scraper } from "../database/Scraper";
import fs from "fs";

export default async function() {
    await initScrapers();

    const scrapers: Scraper[] = await ScraperModel.find();

    for (const scraper of scrapers) {
        try {
            console.log(`Scraping ${scraper.URL}...`);
            const amt = await scraper.scrape();
            if (amt > 0) console.log(`Added ${amt} exposures via ${scraper.name}`);
        } catch {
            // do nothing
        }
    }
}

let isInitialized = false;
function initScrapers(): Promise<void> {
    return new Promise((resolve, reject) => {
        if (isInitialized) return resolve();

        fs.readdir("./scrapers", async (err, scraperFiles: string[]) => {
            if (err) return reject(err);

            const saveNscrape: Promise<any>[] = [];

            for (const scraperFile of scraperFiles) {
                if (scraperFile == "README.md") continue;

                const scraper: Scraper = new ScraperModel({ 
                    URL: require(`../scrapers/${scraperFile}`).URL,
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

        isInitialized = true;
    });
}