import axios from "axios";

import { AccountModel } from "../database/Account";
import { Exposure } from "../database/Exposure";
import { Subscription, SubscriptionModel } from "../database/Subscription";
import keys from "../../keys";

interface EmailData {
    [acc_id: string]: string[]
}

export default class ProcessSubscriptions {
    emails: EmailData = {};

    constructor() {
        this.emails = {};
    }

    async addExposure(e: Exposure) {
        const subscriptions = await SubscriptionModel.find({
            "bounds.sw.lat": { $lte: e.coord.lat },
            "bounds.sw.long": { $lte: e.coord.long },
            "bounds.ne.lat": { $gte: e.coord.lat },
            "bounds.ne.long": { $gte: e.coord.long },
            start: { $lte: e.end },
            end: { $gte: e.start }
        }).populate({ path: "account", model: AccountModel }) as Subscription[];

        for (const sub of subscriptions) {
            sub.exposures.push(e._id);
            sub.markModified("exposures");
            await sub.save();

            if (sub.account.isSubscribed) {
                const curr = this.emails[sub.account._id.toString()] ?? [];
                curr.push(
`<li>
<u>From a subscription you created on ${new Date(sub.createdAt).toUTCString()}:</u><br />
<a href="${e.scraper.URL}">${e.scraper.name.toUpperCase()}:</a> ${e.name} - ${e.address} 
from ${new Date(e.start).toUTCString()} to ${new Date(e.end).toUTCString()}.
</li>`
                );
                this.emails[sub.account._id.toString()] = curr;
            }
        }
    }

    async sendEmails() {
        for (const _id in this.emails) {
            const acc = await AccountModel.findById(_id);
            const len = this.emails[_id].length;

            await axios.post("https://api.mailjet.com/v3.1/send", {
                Messages:[{
                    From: {
                        Email: "no-reply@covidexposures.ca",
                        Name: "COVID Exposures"
                    },
                    To: [{
                        Email: acc.email,
                        Name: acc.name
                    }],
                    Subject: `COVID Exposures: ${len} Potential Exposure${len > 1 ? "s" : ""}`,
                    HTMLPart: `<p>Hello ${acc.name},</p>
                        <p>
                            This is an automated notification from <a href="https://covidexposures.ca">COVID Exposures</a>.
                            We have automatically detected ${len} potential exposure${len > 1 ? "s" : ""} based on your
                            subscriptions. Please see below:
                        </p>
                        <ol>
                            ${this.emails[_id].join("<br />")}
                        </ol>
                        <p>
                            First, confirm these automatically monitored potential exposures by visiting the links above.
                            Then, follow all health recommendations from your local health authority.
                        </p>
                        <p>
                            Sincerily, <br /> 
                            COVID Exposures
                        </p>
                        <hr />
                        <p>
                            Unsubscribe from future communications from COVID Exposures by clicking
                            <a href="https://covidexposures.ca/unsubscribe/${_id}">here</a>.
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
            })
                .then(() => console.log(`Sent email to ${acc.email} with ${len} potential exposures`))
                .catch((err) => console.error(`ERROR sending email to ${acc.email}: 
                    ${JSON.stringify(this.emails[_id])},
                    ${err}
                `));
        }

        // reset the emails -- they've been sent
        this.emails = {};
    }
}