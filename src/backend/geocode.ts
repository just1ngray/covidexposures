import { LeanDocument } from "mongoose";
import axios from "axios";

import keys from "../../keys";
import { ExposureModel, Exposure } from "../database/Exposure";
import { Scraper } from "../database/Scraper";
import { ScrapedExposure } from "./SCRAPER_TEMPLATE";

export default async function geocode(
    exposure: ScrapedExposure, 
    scraper: Scraper
): Promise<{ long: number, lat: number }> {
    const candidates = await ExposureModel.find({ 
        address: exposure.address, 
        scraper: scraper._id
    }).lean() as LeanDocument<Exposure>[];
    if (candidates.length > 0) return candidates[0].coord;

    const { data } = await axios.get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(exposure.address)}.json`, {
        params: {
            access_token: keys.mapbox,
            countries: scraper.country,
            limit: 1,
            language: scraper.language,
            proximity: [scraper.center.long, scraper.center.lat]
        }
    });

    if (data.features.length == 0) throw new Error("invalid address")
    return {
        long: data.features[0].center[0],
        lat: data.features[0].center[1]
    };
}