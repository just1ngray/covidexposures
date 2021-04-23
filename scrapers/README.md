You can add new scrapers easily by creating new files in this directory.

1. Create a new file (named according to the website it scrapes).
2. Export the url: `export const URL = "http...";`
3. Export an asynchronous function `export async function scrape(page: puppeteer.Page, millis: number): Promise<Exposure[]>`. This function should use puppeteer to parse elements into an array of ExposureModels. You need to provide name, address, instructions, epoch, and width properties. Please check the documentation in the `./database/Exposure.ts` page.

Follow `nshealth.ts` as a guide for implementing your own scraper pages.

TODO: Elaborate on this readme.