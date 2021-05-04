import Section from "./Section";

export default function Definitions() {
    return (
        <Section title="Definitions">
            <ul className="list-inside list-disc">
                <li><u>We:</u> Refers to the website, covidexposures.ca, and its owner.</li>
                <li>
                    <u>Contributor:</u> (pl. Contributors) an individual who has added/removed/modified
                    the underlying code which drives the website.
                </li>
                <li><u>User:</u> Anyone who visits covidexposures.ca. Assume not signed-in if unspecified.</li>
                <li>
                    <u>OAuth Provider:</u> An external and unrelated company/entity which allows you to sign into
                    covidexposures.ca by using your credentials from this company/entity.
                </li>
                <li>
                    <u>Subscription:</u> (pl. Subscriptions) A notification created by a Signed-in User which 
                    will automatically send an email to the User's email address if an Exposure is detected in 
                    the geographic region and timeframe of the notification.
                </li>
                <li>
                    <u>Services:</u> A functional part of the website. Including, but not necessarily limited to,{` `}
                    <i>Hot Spots</i> and <i>Your Locations</i>.
                </li>
                <li>
                    <u>Exposure:</u> An automatically detected <i>potential</i> COVID exposure from an official health
                    authority. Due to the automated nature of Exposures, Users should confirm all information claimed
                    by covidexposures.ca for accuracy and compare against their local health authority.
                </li>
            </ul>
        </Section>
    );
}