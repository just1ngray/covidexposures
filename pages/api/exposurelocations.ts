import { NextApiRequest, NextApiResponse } from 'next'

import * as db from "../../database/db";
import { ExposureModel, Exposure } from "../../database/Exposure";
import { Coordinate } from "../../database/Coordinate";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method != "PUT") 
        return res.status(404).send("Please send as a PUT request");

    const { sw_long, sw_lat, ne_long, ne_lat, known_ids } = req.body;

    await db.connect();
    const exposures = await ExposureModel.find({
        "coord.lat": { 
            $gte: sw_lat,
            $lte: ne_lat
        },
        "coord.long": {
            $gte: sw_long,
            $lte: ne_long
        },
        "coord._id": { $nin: known_ids }
    }).select("coord -_id") as Exposure[];

    const coords = exposures.map((e) => {
        return { 
            long: e.coord.long,
            lat: e.coord.lat,
            _id: e.coord._id.toString() 
        };
    }) as [Coordinate & { _id: string }];

    res.json(coords);
}