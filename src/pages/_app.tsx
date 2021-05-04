import { AppProps } from "next/app";
import Head from "next/head";

import "tailwindcss/tailwind.css";
import "../util/global.css";

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/logo.png" />
                <title>COVID Exposures</title>
                <meta name="description" content="Data driven COVID Exposures and Notifications"></meta>
                <meta name="keywords" content="COVID, Coronavirus, Exposures, COVID Exposures"></meta>
            </Head>

            <Component {...pageProps} />
        </>
    );
}