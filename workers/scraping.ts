import { ScraperModel, Scraper } from "../database/Scraper";
import fs from "fs";

export default async function() {
    await initScrapers();

    const scrapers = await ScraperModel.find() as Scraper[];

    for (const scraper of scrapers) {
        try {
            console.log(`Scraping ${scraper.URL}...`);
            const amt = await scraper.scrape();
            console.log(`Added ${amt} exposures via ${scraper.name}`);
        } catch (err) {
            console.error(scraper, err)
        }
    }
}

let isInitialized = false;
function initScrapers(): Promise<void> {
    return new Promise((resolve, reject) => {
        if (isInitialized) return resolve();

        fs.readdir("./scrapers", async (err, scraperFiles: string[]) => {
            if (err) return reject(err);

            const saves: Promise<any>[] = [];

            for (const scraperFile of scraperFiles) {
                const { 
                    URL, 
                    country, 
                    language, 
                    center,
                    tags 
                } = require(`../scrapers/${scraperFile}`).config;
                const scraper = new ScraperModel({ 
                    URL, country, language, center, tags,
                    name: scraperFile
                }) as Scraper;
                const exists = await ScraperModel.exists({ name: scraper.name });
                if (!exists) {
                    saves.push(scraper.save());
                }
            }

            Promise.all(saves).then(() => resolve());
        });

        isInitialized = true;
    });
}