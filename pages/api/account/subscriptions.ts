import { NextApiRequest, NextApiResponse } from 'next'

import * as db from "../../../database/db";
import validateCredentials from "../../../util/backend/validateCredentials";
import { Subscription, SubscriptionModel } from "../../../database/Subscription";
import { Account, AccountModel } from "../../../database/Account";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method != "PUT") 
        return res.status(404).send("Please send as a PUT request");

    try {
        const [name, email] = await validateCredentials(req.body.credentials);
        await db.connect();

        let account = await AccountModel.findOne({ email }) as Account;
        if (!account) {
            account = new AccountModel({ email, name });
            await account.save();
        }

        const subscriptions = await SubscriptionModel.find({ account: account._id })
            .lean() as Subscription[];

        res.send(subscriptions);
    } catch (err) {
        res.status(400).send(err.message);
    }
}