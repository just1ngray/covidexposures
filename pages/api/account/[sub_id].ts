import { NextApiRequest, NextApiResponse } from 'next'

import * as db from "../../../database/db";
import validateCredentials from "../../../util/backend/validateCredentials";
import { Subscription, SubscriptionModel } from "../../../database/Subscription";
import { Account, AccountModel } from "../../../database/Account";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method != "DELETE") 
        return res.status(404).send("Please send as a DELETE request");

    try {
        const [_, email] = await validateCredentials(req.body.credentials);
        await db.connect();

        const account = await AccountModel.findOne({ email }) as Account;
        if (!account) return res.status(404).send("No account found");

        const sub = await SubscriptionModel.findOne({ _id: req.query.sub_id }) as Subscription;
        if (!sub) return res.status(404).send("No subscription found by that _id");

        await sub.remove();
        res.send(sub);
    } catch (err) {
        res.status(400).send(err.message);
    }
}