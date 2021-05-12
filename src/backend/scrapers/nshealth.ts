import puppeteer from "puppeteer";
import { DateTime } from "luxon";
import { getDistance } from "geolib";

import { Exposure } from "../../database/Exposure";
import { ScraperTags } from "../../database/Scraper";
import { ScraperExports, ScrapedExposure } from "../SCRAPER_TEMPLATE";

const nshealth: ScraperExports = {
    config: {
        URL: "https://www.nshealth.ca/covid-exposures",
        country: "CA",
        language: "en",
        center: {
            long: -63.582687,
            lat: 44.651070
        },
        tags: [ScraperTags.NO_BUSSES],
        isActive: true
    },

    scrape: async function scrape(page: puppeteer.Page): Promise<ScrapedExposure[]> {
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
            .filter((row) => /Route #?[0-9]+/i.test(row[0]) == false)  // no busses
            .map((row) => {
                const { start, end } = parseTime(row[1]);

                let addr = row[2];
                if (row[0].includes("to Halifax")                   // airport override
                    || row[0].includes("from Halifax")
                    || row[0].includes("Air Canada")
                    || row[0].includes("West Jet")
                ) {
                    addr = "747 Bell Boulevard in Goffs, Nova Scotia";
                }

                const found: ScrapedExposure = {
                    name: row[0],
                    address: addr,
                    instructions: row[4],
                    start,
                    end
                };
                return found;
            });
    
        return Promise.resolve(exposures);
    },

    validate: function validate(exposure: Exposure): boolean {
        // within 400 km of the center of NS

        return getDistance({ 
            longitude: exposure.coord.long,
            latitude: exposure.coord.lat
        }, {
            longitude: config.center.long,
            latitude: config.center.lat
        })/1000 <= 400;
    }
}

export const config = nshealth.config;
export const scrape = nshealth.scrape;
export const validate = nshealth.validate;





function parseTime(time: string): { start: number, end: number } {
    const t = time.split(" ");
    const a = DateTime.fromFormat(`${t[1]} ${t[3]}`, "MM/dd/yyyy HH:mm", {
        zone: "America/Halifax"
    });
    const b = DateTime.fromFormat(`${t[1]} ${t[5]}`, "MM/dd/yyyy HH:mm", {
        zone: "America/Halifax"
    });

    return { 
        start: a.toMillis() || Date.now(), 
        end: b.toMillis() || a.toMillis()+1000*60*60*6 || Date.now()+1000*60*60*6
    };
}