import { NextApiRequest, NextApiResponse } from 'next'

import * as db from "../../../database/db";
import validateCredentials from "../../../util/backend/validateCredentials";
import { Subscription, SubscriptionModel } from "../../../database/Subscription";
import { Account, AccountModel } from "../../../database/Account";

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

        const sub = new SubscriptionModel({
            account: account._id,
            coord: req.body.coord,
            radius: req.body.radius,
            start: req.body.start,
            end: req.body.end
        } as Subscription);

        await sub.save();
        res.send(sub);
    } catch (err) {
        res.status(400).send(err.message);
    }
}