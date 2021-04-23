import fs from "fs";

import * as database from "./database/db";
import scraperWorker from "./scrapers/worker";

// set up key file
if (!fs.existsSync("./keys.ts")) fs.writeFileSync("./keys.ts",
`export default {
    google: {
        geocode: "GOOGLE_GEOCODE_API_KEY"
    },
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

    scraperWorker();
})();