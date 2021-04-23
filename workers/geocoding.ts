import { ExposureModel, Exposure } from "../database/Exposure";

export default async function() {
    const exposures: Exposure[] = await ExposureModel.find({ long: null, lat: null });

    for (const exposure of exposures) {
        try {
            await exposure.locate();
            console.log(`Geocoded exposure location: ${exposure.address}`);
        } catch {
            // do nothing
        }
    }
}