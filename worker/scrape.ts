import fs from "fs";
import puppeteer from "puppeteer";

import { ScraperModel, Scraper } from "../database/Scraper";
import { ExposureModel } from "../database/Exposure";
import { ScrapedExposure } from "./SCRAPER_TEMPLATE";
import geocode from "./geocode";
import updateSubscriptions from "./subscriptions";

export default async function scrape(minsUntil: number, minsBetween: number) {
    await new Promise<void>((resolve) => {
        setTimeout(() => resolve(), 1000*60*minsUntil);
    });

    await initScrapers();

    while (true) {
        const scrapers = await ScraperModel.find() as Scraper[];
        const browser = await puppeteer.launch({
            headless: true,
            args: ["--no-sandbox"]
        });

        for (const scraper of scrapers) {
            try {
                let numAdded = 0;
                console.log(`Scraping ${scraper.URL}...`);
                const { validate, scrape } = require(`./scrapers/${scraper.name}`);

                const exposures = await getScrapedExposures(scraper, scrape, browser);
                for (const e of exposures) {
                    if (await ExposureModel.exists({
                        scraper: e.scraper,
                        address: e.address, 
                        start: e.start, 
                        end: e.end 
                    })) continue;

                    try {
                        e.coord = await geocode(e, scraper);
                        const doc = new ExposureModel(e);
                        if (!validate(doc)) continue;

                        await doc.save();
                        await updateSubscriptions(doc);
                        numAdded ++;
                    } catch {}
                }
                
                console.log(`Added ${numAdded} exposures via ${scraper.name}`);
            } catch (err) {
                console.error(scraper, err)
            }
        }

        await browser.close();

        await new Promise<void>((resolve) => {
            setTimeout(() => resolve(), 1000*60*minsBetween);
        });
    }
}

async function getScrapedExposures(
    scraper: Scraper, 
    scrape: (page: puppeteer.Page) => Promise<ScrapedExposure[]>, 
    browser: puppeteer.Browser
): Promise<ScrapedExposure[]> {
    if (!scraper.isActive) return Promise.reject("This scraper is currently deactivated");
    if (scraper.lastScrape + 5*60*1000 >= Date.now()) return Promise.reject("Scraped within 5 minutes - skipping");

    const page = await browser.newPage();
    await page.goto(scraper.URL);
    const exposures = await scrape(page);
    await page.close();

    scraper.lastScrape = Date.now();
    await scraper.save();

    return exposures.map((e) => {
        return { ...e, scraper };
    }) as ScrapedExposure[];
}

function initScrapers(): Promise<void> {
    return new Promise((resolve, reject) => {
        fs.readdir("./worker/scrapers", async (err, scraperFiles: string[]) => {
            if (err) return reject(err);

            const saves: Promise<any>[] = [];

            for (const scraperFile of scraperFiles) {
                const { URL, country, language, center, tags } = require(`./scrapers/${scraperFile}`).config;

                const scraper = new ScraperModel({ 
                    URL, country, language, center, tags,
                    name: scraperFile
                }) as Scraper;
                const exists = await ScraperModel.exists({ name: scraper.name });
                if (!exists) saves.push(scraper.save());
            }

            Promise.all(saves).then(() => resolve());
        });
    });
}