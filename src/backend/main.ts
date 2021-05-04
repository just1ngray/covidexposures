import { existsSync, writeFileSync } from "fs";
import { execSync } from "child_process";

// set up key file
if (!existsSync("./keys.ts")) writeFileSync("./keys.ts",
`export default {
    mapbox: "MAPBOX_ACCESS_TOKEN",
    mailjet: {
        key: "MAILJET_MAIN_ACCOUNT_API_KEY",
        secret: "MAILJET_MAIN_ACCOUNT_SECRET_KEY"
    },
    google: {
        oauth: "OAUTH_CLIENT_ID"
    }
};`);

const MINS_UNTIL = 0;
const MINS_BETWEEN = 1;

// connect to the database and start tasks
(async () => {
    console.log(`Starting backend coordinator in ${MINS_UNTIL} minutes...\n`);

    await new Promise<void>((resolve) => {
        setTimeout(() => resolve(), 1000*60*MINS_UNTIL);
    });

    let scrape = () => execSync(`node build/src/backend/scrape.js`, { stdio: "inherit" });
    if (__dirname.includes("covidexposures/src")) // running in uncompiled dev mode
        scrape = () => execSync(`ts-node src/backend/scrape.ts`, { stdio: "inherit" });

    while (true) {
        scrape();
        console.log(`\nWaiting ${MINS_BETWEEN} minutes before running again...\n`);

        await new Promise<void>((resolve) => {
            setTimeout(() => resolve(), 1000*60*MINS_BETWEEN);
        });
    }

})();