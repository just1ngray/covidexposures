import Container from "../components/Container";
import Section from "../components/pagewise/legal/Section";
import Definitions from "../components/pagewise/legal/Definitions";

export default function PrivacyPolicy() {
    return (
        <Container>
            <h3 className="text-3xl font-bold my-2">Privacy Policy</h3>
            <p className="underline">Last updated: May 1, 2021</p>

            <hr />

            <Section title="Statement">
                <p>
                    This is an independently developed project not associated with or endorsed by any company
                    or government organization. We are not interested in mis-using or selling your information.
                    Please understand this project was developed with the best of intentions, but we do not have
                    the resources to consult a legal team for professional advise.
                </p>
            </Section>

            <div className="border border-blue-600 p-4 rounded bg-blue-50">
                <Section title="TL;DR">
                    <p>
                        We make every effort to keep your information secure and private. If you sign in, we will keep
                        your name/email address (permanent), as well as any locations you've added (~30 days). We never
                        share your information except with Mailjet which is required for sending emails.
                    </p>
                </Section>
            </div>

            <Definitions />

            <Section title="Your Data">
                <ul className="list-inside list-disc">
                    <li>
                        If you are <u>not</u> signed in, nothing. Services will be limited to the <i>Hot Spots</i> page.
                    </li>
                    <li>
                        If you are a Signed-in User, We will collect your 1) name, 2) email, and 3) if you've unsubscribed.
                        This information is collected from an OAuth Provider and will only be saved after you've created 
                        your first Subscription.
                    </li>
                    <li>
                        Each Subscription created by a Signed-in User will contain: 1) the Signed-in User who created it, 2) 
                        the geographic region to which the Subscription will apply, and 3) the timeframe of the Subscription.
                    </li>
                    <li>
                        Subscriptions are automatically deleted 2,592,000 seconds +/- 300 seconds after they are created.
                        Regardless of the timeframe referenced by the Subscription. (Approximately 30 days +/- 5 minutes.)
                    </li>
                    <li>
                        Signed-in User and Subscription information is not available to nor shared with any third-party.
                        Except when We send an email using Mailjet, your name, email address, and contents of the email are 
                        subject to their <a className="underline" href="https://www.mailjet.com/security-privacy/">Privacy Policy</a>. 
                        As of May 1, 2021, Mailjet does not share any information with third-parties.
                    </li>
                    <li>
                        After unsubscribing, your Signed-in User information will remain on our servers so we don't
                        accidentally send you more unwanted emails. You can manually delete your Subscriptions, or wait for
                        them to expire in ~30 days.
                    </li>
                    <li>
                        All data is stored on a DigitalOcean Droplet and is therefore subject to their{` `}
                        <a className="underline" href="https://www.digitalocean.com/legal/privacy-policy/">Privacy Policy</a>.
                    </li>
                </ul>
            </Section>

            <Section title="OAuth Providers">
                <p>
                    We make use of OAuth Providers to save you from creating a new username/password pair for
                    covidexposures.ca. Your credentials are much safer with a large company than with an independently
                    created application such as covidexposures.ca.
                </p>
                <ul className="list-inside list-disc">
                    <li>
                        <u>What information is sent to an OAuth Provider?</u><br/>
                        Your username/password is sent directly to the OAuth Provider and covidexposures.ca never handles 
                        your credentials.
                    </li>
                    <li>
                        <u>How is my identity verified?</u><br />
                        After signing in, covidexposures.ca is provided a token from the OAuth Provider. This token is
                        saved locally and is securely used to verify your identity for later requests.
                    </li>
                    <li>
                        <u>What information does covidexposures.ca see?</u><br />
                        From the OAuth Provider we request your name (and other public information), and email address.
                    </li>
                </ul>
            </Section>

            <hr />

            <p className="my-12">
                If you have any questions or concerns with the information presented on this page, please direct an email to
                privacy@covidexposures.ca.
            </p>
        </Container>
    );
} 