import { Schema, Document, model } from "mongoose";
import puppeteer from "puppeteer";

import { ExposureModel, Exposure } from "./Exposure";


export interface Scraper extends Document {
    /** where the scraper looks */
    URL: string,

    /** epoch time of this scraper's creation */
    firstScrape: number;

    /** the epoch time of the last scrape */
    lastScrape: number;

    /** if the scraper is currently active */
    isActive: boolean;

    /** 
     * the "./scrapers/<???>.ts" file where the specific scraping implementation 
     * is found 
     */
    name: string;

    /** scrapes the webpage for new exposures & adds them if possible */
    scrape: (millis?: number) => Promise<number>;
}

const ScraperSchema = new Schema({
    URL: {
        type: String,
        required: true,
        unique: true
    },
    firstScrape: {
        type: Number,
        default: Date.now
    },
    lastScrape: {
        type: Number,
        default: 0,
        min: 0
    },
    isActive: {
        type: Boolean,
        required: true,
        default: true
    },
    name: {
        type: String,
        required: true,
        unique: true
    }
});

ScraperSchema.methods.scrape = async function(millis: number = 0): Promise<number> {
    const me = this as Scraper;

    if (!me.isActive)
        return Promise.reject("This scraper is currently deactivated");

    if (me.lastScrape + 5*60*1000 >= Date.now())
        return Promise.reject("Scraped within 5 minutes - skipping task");

    const scraper: (page: puppeteer.Page, millis: number) => Promise<Exposure[]> 
        = require(`../scrapers/${me.name}`).scrape;

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(me.URL);
    console.log(`Scraping ${me.URL}...`);
    const exposures = await scraper(page, millis);
    await browser.close();

    me.lastScrape = Date.now();
    me.save();

    const existsQueries: Promise<boolean>[] = [];
    for (const exposure of exposures) {
        exposure.scraper = me._id;

        const exists = ExposureModel.exists({ 
            name: exposure.name,
            address: exposure.address,
            epoch: exposure.epoch,
            width: exposure.width
        });
        existsQueries.push(exists);
    }
    const resolvedExistence = await Promise.all(existsQueries);

    let count = 0;
    for (let i = 0; i < exposures.length; i ++) { 
        if (!resolvedExistence[i]) {
            exposures[i].save();
            count ++;
        }
    }

    return Promise.resolve(count);
}

export const ScraperModel = model("Scraper", ScraperSchema);