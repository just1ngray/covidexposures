import puppeteer from "puppeteer";
import { DateTime } from "luxon";

import { ExposureModel, Exposure } from "../database/Exposure";
import { ScrapingConfig } from "../database/Scraper";

// scraping configuration information
export const config = {
    URL: "http://www.nshealth.ca/covid-exposures",
    country: "CA",
    language: "en",
    center: {
        long: -63.582687,
        lat: 44.651070
    }
} as ScrapingConfig;

// the main function which searches the page and parses Exposure documents
export async function scrape(page: puppeteer.Page, millis: number): Promise<Exposure[]> {
    const content = await page.$(".views-table");
    if (!content) return Promise.reject(`Could not load content from ${page.url()}`);

    const tableRows = await content.$$eval("tr", (rows) => {
        return Array.from(rows, row => {
            const columns = row.querySelectorAll('td');
            return Array.from(columns, column => column.innerText);
        });
    });

    const exposures = tableRows
        .filter((row) => row.length == 7)
        .map((row) => {
            const time = parseTime(row[1]);

            const exposure = new ExposureModel({
                name: row[0],
                address: row[2],
                instructions: row[4],
                epoch: time.epoch,
                width: time.width
            }) as Exposure;

            return exposure;
        })
        .filter((exposure: Exposure) => exposure.epoch >= millis);

    return Promise.resolve(exposures);
}

function parseTime(time: string): { epoch: number, width: number } {
    const t = time.split(" ");
    const a = DateTime.fromFormat(`${t[1]} ${t[3]}`, "MM/dd/yyyy HH:mm", {
        zone: "America/Halifax"
    });
    const b = DateTime.fromFormat(`${t[1]} ${t[5]}`, "MM/dd/yyyy HH:mm", {
        zone: "America/Halifax"
    });

    return { 
        epoch: a.toMillis(), 
        width: b.toMillis() - a.toMillis()
    };
}