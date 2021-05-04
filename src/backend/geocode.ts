import mbxGeocode from "@mapbox/mapbox-sdk/services/geocoding";
import { LeanDocument } from "mongoose";

import keys from "../../keys";
import { ExposureModel, Exposure } from "../database/Exposure";
import { Scraper } from "../database/Scraper";
import { ScrapedExposure } from "./SCRAPER_TEMPLATE";

export default async function geocode(
    exposure: ScrapedExposure, 
    scraper: Scraper
): Promise<{ long: number, lat: number }> {
    const geocodeService = mbxGeocode({ accessToken: keys.mapbox });

    const candidates = await ExposureModel.find({ 
        address: exposure.address, 
        scraper: scraper._id
    }).lean() as LeanDocument<Exposure>[];
    if (candidates.length > 0) return candidates[0].coord;

    const { body } = await geocodeService.forwardGeocode({
        mode: "mapbox.places",
        query: exposure.address,
        countries: scraper.country.split(","),
        limit: 1,
        language: scraper.language.split(","),
        proximity: [scraper.center.long, scraper.center.lat]
    }).send();

    if (body.features.length == 0) throw new Error("invalid address")
    return {
        long: body.features[0].center[0],
        lat: body.features[0].center[1]
    };
}