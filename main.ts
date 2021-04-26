import fs from "fs";

import * as database from "./database/db";
import worker from "./workers/worker";
import scraping from "./workers/scraping";
import geocoding from "./workers/geocoding";

// set up key file
if (!fs.existsSync("./keys.ts")) fs.writeFileSync("./keys.ts",
`export default {
    mapbox: "MAPBOX_ACCESS_TOKEN",
    mailjet: {
        key: "MAILJET_MAIN_ACCOUNT_API_KEY",
        secret: "MAILJET_MAIN_ACCOUNT_SECRET_KEY"
    }
};`);

// connect to the database and start tasks
(async () => {
    await database.connect();

    process.on("SIGINT", async () => {
        await database.disconnect();
        process.exit(0);
    });

    worker(11, 19, scraping);
    worker(3, 7, geocoding);
    // worker(0, 2, scraping);
    // worker(0, 0.5, geocoding);
})();