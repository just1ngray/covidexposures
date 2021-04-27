import { Schema, Document, model, models } from "mongoose";
import puppeteer from "puppeteer";

import { ExposureModel, Exposure } from "./Exposure";
import { CoordinateSchema } from "./Coordinate";


/** each file in ./scrapers must export a config object of this type */
export interface ScrapingConfig {
    /** where the scraper looks */
    URL: string,

    /** comma-separated country of the exposure: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2 */
    country: string,

    /** comma-separated language of the address: https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes */
    language: string,

    /** the center of the health region */
    center: {
        long: number,
        lat: number
    },

    /** tags associated with how the scraper works */
    tags: ScraperTags[]
}

/** standardized scraping tags */
export enum ScraperTags {
    NO_FLIGHTS = "NO_FLIGHTS",
    NO_BUSSES = "NO_BUSSES"
}

export interface Scraper extends Document {
    /** where the scraper looks */
    URL: string,

    /** epoch time of this scraper's creation */
    firstScrape: number;

    /** the epoch time of the last scrape */
    lastScrape: number;

    /** if the scraper is currently active */
    isActive: boolean;

    /** the "./scrapers/<???>.ts" file where the specific scraping implementation is found */
    name: string;

    /** comma-separated country of the exposure: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2 */
    country: string,

    /** comma-separated language of the address: https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes */
    language: string,

    /** the center of the health region */
    center: { long: number | null, lat: number | null },

    /** tags associated with how the scraper works */
    tags: ScraperTags[],

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
    },
    country: {
        type: String,
        required: true,
        match: /^[A-Z][A-Z](,[A-Z][A-Z])*$/
    },
    language: {
        type: String,
        default: "en",
        match: /^[a-z][a-z](,[a-z][a-z])*$/
    },
    center: {
        type: CoordinateSchema,
        default: {
            long: null,
            lat: null
        }
    },
    tags: {
        type: [String],
        enum: ScraperTags,
        required: false,
        default: []
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

    return count;
}

export const ScraperModel = models.Scraper || model("Scraper", ScraperSchema);