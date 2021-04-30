import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="
            bg-gray-300 border-t border-gray-400 
            flex flex-wrap flex-shrink-0
            items-center justify-evenly
            p-4
        ">
            <section className="w-full md:w-6/12 lg:w-1/3">
                <p>
                    This website/application is not endorsed or affiliated with
                    any company or government organization. It is independently
                    developed and managed.
                </p>
            </section>

            <section className="w-full flex justify-center sm:w-2/4 md:order-3 lg:order-2 lg:w-1/3">
                <a href="https://github.com/just1ngray/covidexposures" className="flex items-center p-4">
                    <div className="inline-block">
                        <Image src="/GitHub-Mark-64px.png" layout="fixed" height={48} width={48} />
                    </div>
                    <div className="pl-2">
                        <p className="text-xl font-semibold -mb-1">Contribute</p>
                        <p>This project is 100% open source!</p>
                    </div>
                </a>
            </section>

            <section className="w-full sm:w-2/4 lg:w-1/3 lg:order-3 items-center flex flex-col">
                <Link href="/privacy">
                    <a>Privacy Policy</a>
                </Link>
                <Link href="/terms">
                    <a>Terms of Service</a>
                </Link>
            </section>
        </footer>
    );
}