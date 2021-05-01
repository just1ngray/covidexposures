import fs from "fs";

// set up key file
if (!fs.existsSync("./keys.ts")) fs.writeFileSync("./keys.ts",
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

import * as database from "../database/db";
import scraping from "./scrape";

// connect to the database and start tasks
(async () => {
    await database.connect(false);

    process.on("SIGINT", async () => {
        await database.disconnect();
        process.exit(0);
    });

    // scraping(5, 10);
    scraping(0, 1);
})();