import { ExposureModel, Exposure } from "../database/Exposure";

export default async function() {
    const exposures = await ExposureModel.find({ long: null, lat: null }) as Exposure[];

    let exposuresLocated = 0;
    let exposuresGeocoded = 0;

    for (const exposure of exposures) {
        try {
            exposuresLocated ++;
            const didCallGoogleAPI = await exposure.locate();
            if (didCallGoogleAPI) exposuresGeocoded ++;
        } catch (err) {
            // silence error message when no results are found (null island case)
            if (!err.message.includes("'geometry' of undefined"))
                console.error(err);
            
            exposuresGeocoded ++; // assume it used a google api call
        }
    }

    if (exposuresLocated > 0) console.log(`Located ${exposuresLocated} exposures, and `
        + `used ${exposuresGeocoded} geocoding api calls.`);
}