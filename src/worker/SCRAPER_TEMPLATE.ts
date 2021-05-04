import { Page } from "puppeteer";

import { Exposure } from "../database/Exposure";
import { Scraper, ScrapingConfig } from "../database/Scraper";

export type ScrapedExposure = Pick<Exposure, 
    "name" | "address" | "instructions" | "start" | "end"
> & { scraper?: Scraper, coord?: { long: number, lat: number } };

export interface ScraperExports {
    /** the initialization configuration for the scraper */
    config: ScrapingConfig,

    /** 
     * Scrape the page from config and return a partially filled ScrapedExposure 
     * @param page the loaded puppeteer page you can work with
     * @returns an array of partially filled exposure objects
     */
    scrape: (page: Page) => Promise<ScrapedExposure[]>,

    /**
     * Validate that a ready-to-save exposure has been geocoded properly
     * @param exposure the exposure to validate
     * @returns if geocoding seems accurate
     */
    validate: (exposure: Exposure) => boolean
}