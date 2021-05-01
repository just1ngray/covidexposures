import axios from "axios";

import { AccountModel } from "../database/Account";
import { Exposure } from "../database/Exposure";
import { SubscriptionModel } from "../database/Subscription";
import keys from "../keys";

export default async function updateSubscriptions(e: Exposure) {
    const subscriptions = await SubscriptionModel.find({
        "bounds.sw.lat": { $lte: e.coord.lat },
        "bounds.sw.long": { $lte: e.coord.long },
        "bounds.ne.lat": { $gte: e.coord.lat },
        "bounds.ne.long": { $gte: e.coord.long }
    }).populate({ path: "account", model: AccountModel });

    for (const sub of subscriptions) {
        sub.exposures.push(e._id);
        sub.markModified("exposures");
        await sub.save();

        if (sub.account.isSubscribed) 
            await axios.post("https://api.mailjet.com/v3.1/send", {
                Messages:[{
                    From: {
                        Email: "no-reply@covidexposures.ca",
                        Name: "COVID Exposures"
                    },
                    To: [{
                        Email: sub.account.email,
                        Name: sub.account.name
                    }],
                    Subject: `COVID Exposures: ${e.name}`,
                    HTMLPart: `<p>Hello ${sub.account.name},</p>
                        <p>
                            This is an automated notification from 
                            <a href="https://covidexposures.ca">COVID Exposures</a>. You created
                            this exposure notification on ${new Date(sub.createdAt).toUTCString()}:
                        </p>
                        <p>
                            We detected an exposure from <a href="${e.scraper.URL}">${e.scraper.URL}</a>
                            at ${e.name} - ${e.address}, during your subscription window. Please verify 
                            this exposure since it was generated automatically.
                        </p>
                        <p>
                            Please follow all health recommendations from your local health authority.
                            To get you started, we have this information from the exposure: "${e.instructions}".
                        </p>
                        <p>
                            Sincerily, <br /> 
                            COVID Exposures
                        </p>
                        <hr />
                        <p>
                            Unsubscribe from future communications from COVID Exposures by clicking
                            <a href="https://covidexposures.ca/unsubscribe/${sub.account._id.toString()}">here</a>.
                        </p>
                    `
                }
            ]}, 
            {
                headers: { "Content-Type": "application/json" },
                auth: {
                    username: keys.mailjet.key,
                    password: keys.mailjet.secret
                }
            });
    }
}