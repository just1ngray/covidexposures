import fs from "fs";
import puppeteer from "puppeteer";

import * as db from "../database/db";
import { ScraperModel, Scraper } from "../database/Scraper";
import { ExposureModel } from "../database/Exposure";
import { ScrapedExposure } from "./scraperTemplate";
import geocode from "./geocode";
import ProcessSubscriptions from "./processSubscriptions";

(async () => {
    await db.connect(false);
    await initScrapers();
    await scrape();
    await db.disconnect();
})();

async function scrape() {
    const scrapers = await ScraperModel.find({ isActive: true }) as Scraper[];
    const browser = await puppeteer.launch({
        headless: true,
        args: ["--no-sandbox"],
        timeout: 1000*60 // 1 minute
    });

    const subscriptionEmails = new ProcessSubscriptions();
    for (const scraper of scrapers) {
        try {
            let numAdded = 0;
            console.log(`Scraping ${scraper.URL}...`);
            const { validate, scrape } = require(`${__dirname}/scrapers/${scraper.name}`);

            const exposures = await getScrapedExposures(scraper, scrape, browser);
            for (const e of exposures) {
                const exposureOutputLog = `${e.name} - ${e.address} @ ${e.start}`;
                if (await ExposureModel.exists({
                    scraper: e.scraper,
                    address: e.address, 
                    start: e.start, 
                    end: e.end 
                })) {
                    console.log("PRE-EXISTS:", exposureOutputLog);
                    continue;
                }

                try {
                    e.coord = await geocode(e, scraper);
                    const doc = new ExposureModel(e);
                    if (!validate(doc)) {
                        console.log("INVALID DOC:", exposureOutputLog);
                        continue;
                    }

                    await doc.save();
                    await subscriptionEmails.addExposure(doc);
                    numAdded ++;
                    console.log("Added:", exposureOutputLog);
                } catch (err) {
                    console.log("ERROR:", exposureOutputLog);
                    console.error(err);
                }
            }
            
            console.log(`Added ${numAdded} exposures via ${scraper.name}`);
        } catch (err) {
            console.error(scraper, err)
        }
    }

    await browser.close();
    await subscriptionEmails.sendEmails();
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
        fs.readdir(`${__dirname}/scrapers`, async (err, scraperFiles: string[]) => {
            if (err) return reject(err);

            for (const scraperFile of scraperFiles) {
                const { URL, country, language, center, tags, isActive } 
                    = require(`${__dirname}/scrapers/${scraperFile}`).config;

                const name = scraperFile.replace(/(.ts|.js)$/, "");
                await ScraperModel.findOneAndUpdate({ name }, {
                    URL, country, language, center, tags, isActive
                }, { upsert: true });

                resolve();
            }
        });
    });
}