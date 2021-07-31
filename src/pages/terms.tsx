import Container from "../components/Container";
import Section from "../components/pagewise/legal/Section";
import Definitions from "../components/pagewise/legal/Definitions";

export default function Terms() {
    return (
        <Container>
            <h3 className="text-3xl font-bold my-2">Terms of Service</h3>
            <p className="underline">Last updated: May 1, 2021</p>

            <hr />

            <Definitions />

            <Section title="Agreements">
                <ul className="list-inside list-disc">
                    <li>You are a legal adult in your region.</li>
                    <li>
                        You will not make any health decisions based solely on the information found on covidexposures.ca.
                    </li>
                    <li>You will continue to consult your local health authority.</li>
                    <li>
                        You understand the information on covidexposures.ca is automatically gathered and will therefore
                        have inaccuracies. You must verify with your local health authority.
                    </li>
                    <li>COVID Exposures is not liable for damages and/or your actions.</li>
                </ul>
            </Section>

            <hr />

            <p className="my-12">
                If you have any questions or concerns with the information presented on this page, please direct an email to
                terms@covidexposures.ca.
            </p>
        </Container>
    );
}