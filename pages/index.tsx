import Image from "next/image";
import Link from "next/link";

import Container from '../components/Container';
import Contribute from "../components/pagewise/status/Contribute";

export default function Home() {
    return (
        <Container>
            <h2 className="text-center font-bold text-5xl mb-2">COVID Exposures - driven by technology.</h2>

            <p className="text-sm text-center text-gray-600 mb-6">
                Not affiliated with or endorsed by any company or government organization.
            </p>

            <Feature src="/heatmap-high.png" height={1574} width={1996}>
                <p>
                    Browse a region by its publically announced exposures.
                </p>
            </Feature>

            <Contribute message="100% open source - add your local health authority!" />

            <Feature src="/heatmap-details.png" height={1738} width={1996} text="LEFT">
                <p>
                    Explore specific exposures in detail by zooming in.
                </p>
            </Feature>

            <p className="text-center text-lg">
                Tired of manually checking your local health authority's potential exposure list?
            </p>

            <Feature src="/subscriptions.png" height={624} width={1504}>
                <p className="md:max-w-sm">
                    Sign in to add your locations. You'll automatically receive email notifications
                    if a potential exposure is detected within your subscription region.
                </p>
            </Feature>

            <div className="text-center mt-4 mb-12">
                We have a very simple{` `}
                <Link href="/privacy"><a className="text-blue-500 underline">Privacy Policy</a></Link>
                {` and `}
                <Link href="/terms"><a className="text-blue-500 underline">Terms of Service</a></Link>.<br />
                Please explore these links if you are concerned how your information is being used.
            </div>

        </Container>
    );
}

export async function getStaticProps() {
    return {
        props: {},
    }
}

interface FeatureProps {
    src: string,
    height: number,
    width: number,
    children: any,
    text?: "RIGHT" | "LEFT"
}

function Feature({ src, height, width, children, text="RIGHT" }: FeatureProps) {
    return (
        <div className="shadow-lg p-4 mb-4
            md:flex
        ">
            <div className="order-1">
                <Image src={src} height={height} width={width} />
            </div>

            <div className={
                `md:p-4 md:flex md:items-center 
                ${text == "LEFT" ? "order-0" : "order-2"}
                text-lg
            `}>
                {children}
            </div>
        </div>
    );
}