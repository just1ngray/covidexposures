import { NextApiRequest, NextApiResponse } from "next";
import { getBoundsOfDistance } from "geolib";

import * as db from "../../../database/db";
import validateCredentials from "../../../backend/validateCredentials";
import { SubscriptionModel } from "../../../database/Subscription";
import { Account, AccountModel } from "../../../database/Account";
import { ExposureModel, Exposure } from "../../../database/Exposure";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method != "POST") 
        return res.status(404).send("Please send as a POST request");

    try {
        const [name, email] = await validateCredentials(req.body.credentials);
        await db.connect();

        let account = await AccountModel.findOne({ email }) as Account;
        if (!account) {
            account = new AccountModel({ email, name });
            await account.save();
        }
        if (!account.isSubscribed) {
            account.isSubscribed = true;
            await account.save();
        }

        const [sw, ne] = getBoundsOfDistance({
            latitude: req.body.coord.lat,
            longitude: req.body.coord.long
        }, req.body.radius) as { longitude: number, latitude: number }[];

        const exposures = await ExposureModel.find({
            "coord.lat": { $gte: sw.latitude, $lte: ne.latitude },
            "coord.long": { $gte: sw.longitude, $lte: ne.longitude },
            "start": { $gte: req.body.start },
            "end": { $lte: req.body.end }
        }).lean() as Exposure[];

        const sub = new SubscriptionModel({
            account: account._id,
            coord: req.body.coord,
            radius: req.body.radius,
            start: req.body.start,
            end: req.body.end,
            exposures: exposures.map((e) => e._id),
            bounds: {
                ne: { long: ne.longitude, lat: ne.latitude },
                sw: { long: sw.longitude, lat: sw.latitude }
            }
        });

        await sub.save();
        res.send({ ...sub._doc, exposures }); // send the filled exposure doc(s)
    } catch (err) {
        res.status(400).send(err.message);
    }
}