import { NextApiRequest, NextApiResponse } from 'next'

import * as db from "../../../database/db";
import { ExposureModel, Exposure } from "../../../database/Exposure";
import { ScraperModel } from '../../../database/Scraper';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method != "GET") 
        return res.status(404).send("Please send as a GET request");

    await db.connect();
    const exposure = await ExposureModel.findOne({
        "coord._id": req.query.coord_id
    })
        .populate({ path: "scraper", model: ScraperModel })
        .lean() as Exposure;

    delete exposure.start;
    delete exposure.end;

    const all = await ExposureModel.find({
        "coord.long": exposure.coord.long,
        "coord.lat": exposure.coord.lat
    })
        .sort("-start")
        .select("-_id start end instructions");

    res.json({ ...exposure, all });
}