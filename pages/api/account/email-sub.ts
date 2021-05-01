import { NextApiRequest, NextApiResponse } from "next";
import { Types } from "mongoose";

import * as db from "../../../database/db";
import { Account, AccountModel } from "../../../database/Account";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method != "PUT") 
        return res.status(404).send("Please send as a PUT request");

    try {
        await db.connect();

        const account = await AccountModel.findOne({ 
            _id: new Types.ObjectId(req.body.account_id),
            email: req.body.email.toLowerCase()
        }) as Account;

        if (!account) return res.status(404).send("That account is not found!");

        account.isSubscribed = req.body.isSubscribed;
        await account.save();
        res.status(200).send("Ok");
    } catch (err) {
        console.log(err);
        res.status(400).send(err.message);
    }
}