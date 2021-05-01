import { AppProps } from "next/app";

import "tailwindcss/tailwind.css";
import "../util/frontend/global.css";

export default function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}