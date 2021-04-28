import { getBoundsOfDistance } from "geolib";

import { Exposure, ExposureModel } from "../../database/Exposure";
import { Coordinate } from "../../database/Coordinate";

/**
 * Finds a list of exposures in an area at a time.
 * @param center the center of the area
 * @param radius the size of the area in metres
 * @param start the epoch millis for the start of the search window
 * @param end the epoch millis for the end of the search window
 * @returns a list of exposures matching the criteria
 */
export default async function getExposuresWithin(
    center: Coordinate, 
    radius: number,
    start: number,
    end: number
) {
    const [sw, ne] = getBoundsOfDistance({
        latitude: center.lat,
        longitude: center.long
    }, radius) as { longitude: number, latitude: number }[];

    const exposures = await ExposureModel.find({
        "coord.lat": { $gte: sw.latitude, $lte: ne.latitude },
        "coord.long": { $gte: sw.longitude, $lte: ne.longitude },
        "start": { $gte: start },
        "end": { $lte: end }
    }).lean() as Exposure[];

    return exposures.map((e) => {
        return {
            ...e,
            _id: e.toString()
        }
    });
}