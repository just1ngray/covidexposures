import * as database from "./database/db";
import scraperWorker from "./scrapers/worker";

(async () => {
    await database.connect();
    process.on("SIGINT", async () => {
        await database.disconnect();
        process.exit(0);
    });

    scraperWorker();
})();