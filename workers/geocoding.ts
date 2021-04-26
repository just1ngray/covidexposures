import mbxGeocode from "@mapbox/mapbox-sdk/services/geocoding";
import keys from "../keys";
import { ExposureModel, Exposure } from "../database/Exposure";

export default async function() {
    const exposures = await ExposureModel.find({ long: null, lat: null })
        .populate("scraper") as Exposure[];

    let exposuresLocated = 0;
    let exposuresGeocoded = 0;
    const geocodeService = mbxGeocode({ accessToken: keys.mapbox });

    for (const exposure of exposures) {
        try {
            exposuresLocated ++;

            // first check if we've already located this address
            const dupAddr = await ExposureModel.findOne({ 
                address: exposure.address, 
                long: { $ne: null },
                lat: { $ne: null }
            }) as Exposure;

            if (dupAddr) {
                exposure.coord.long = dupAddr.coord.long;
                exposure.coord.lat = dupAddr.coord.lat;
                await exposure.save();
                continue;
            }

            exposuresGeocoded ++;

            // we've never located this address - query mapbox api
            const { body } = await geocodeService.forwardGeocode({
                mode: "mapbox.places",
                query: exposure.address,
                countries: exposure.scraper.country.split(","),
                limit: 1,
                language: exposure.scraper.language.split(","),
                proximity: [exposure.scraper.center.long, exposure.scraper.center.lat]
            }).send();

            if (body.features.length >= 1)
                [exposure.coord.long, exposure.coord.lat] = body.features[0].center;
            else 
                [exposure.coord.long, exposure.coord.lat] = [0, 0]

            exposure.markModified("coord");
            await exposure.save();
        } catch (err) {
            console.error(err);

            [exposure.coord.long, exposure.coord.lat] = [0, 0]
            exposure.markModified("coord");
            await exposure.save();
        }
    }

    if (exposuresLocated > 0) console.log(`Located ${exposuresLocated} exposures, and `
        + `used ${exposuresGeocoded} geocoding api calls.`);
}