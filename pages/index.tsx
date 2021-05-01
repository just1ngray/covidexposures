import Image from "next/image";
import Link from "next/link";

import Container from '../components/Container';
import Contribute from "../components/pagewise/status/Contribute";
import PopButton from "../components/PopButton";

export default function Home() {
    return (
        <Container>
            <h2 className="text-center font-bold text-5xl my-2">
                COVID Exposures - driven by technology.
            </h2>
            <p className="text-sm text-center text-gray-600 mb-6">
                Not affiliated with or endorsed by any company or government organization.
            </p>

            <p className="text-center text-lg">
                Protecting you with up-to-date notifications of your potential exposures.
            </p>

            <Feature src="/subscriptions.png" height={624/2} width={1504/2} href="/login">
                <p className="md:max-w-sm">
                    Sign in to add your locations. You'll automatically receive email notifications
                    if a potential exposure is detected within your subscription region.
                </p>
            </Feature>

            <Contribute message="100% open source - add your local health authority!" />

            <Feature src="/heatmap-high.png" height={1574/4} width={1996/4} text="LEFT" href="/heatmap">
                <p>
                    Or explore exposures by their geographic region with our Hot Spots feature.
                </p>
            </Feature>

            <div className="text-center mt-4 mb-12">
                We have a simple{` `}
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
    href: string,
    text?: "RIGHT" | "LEFT"
}

function Feature({ src, height, width, children, text="RIGHT", href }: FeatureProps) {
    return (
        <Link href={href}>
            <PopButton className="shadow-lg p-4 mb-4
                md:flex md:items-center md:justify-evenly
            ">
                <div className="order-1 md:w-3/4">
                    <Image src={src} 
                        quality={5} priority
                        height={height} width={width}
                    />
                </div>

                <div className={
                    `md:p-4 md:w-1/4
                    ${text == "LEFT" ? "order-0" : "order-2"}
                    text-lg text-gray-700 
                `}>
                    {children}
                </div>
            </PopButton>
        </Link>
    );
}