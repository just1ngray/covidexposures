import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState<boolean>(true);

    function toggle() {
        setIsOpen((current) => !current);
    }

    return (
        <nav className="
            flex flex-wrap 
            xl:justify-center items-center 
            bg-gray-800
        ">
            {/* logo */}
            <div className="hidden md:inline-block">
                <Image src="/covid.svg" height={50} width={50} />
            </div>

            {/* hamburger */}
            <div className="inline-block md:hidden" onClick={toggle}>
                <button className="focus:outline-none">
                    <Image src={isOpen ? "/cross.svg" : "/hamburger.svg"} 
                        height={70} 
                        width={70} 
                    />
                </button>
            </div>

            {/* app name */}
            <p className="
                text-3xl text-white
                pl-4
                flex-grow xl:flex-grow-0 xl:pr-32
            ">
                COVID <br className="lg:hidden" />EXPOSURES
            </p>

            {/* links */}
            <ul className={`
                list-none 
                ${isOpen ? "" : "hidden md:inline-block"}
            `}>
                {items.map((item) => 
                    <NavItem key={item.href} 
                        href={item.href} 
                        title={item.title} 
                        isActive={router.pathname == item.href}
                    />
                )}
            </ul>
        </nav>
    );
}



interface Props {
    href: string,
    title: string, 
    isActive: boolean
}

function NavItem({ href, title, isActive }: Props) {
    return (
        <li className="inline-block">
            <Link href={href}>
                <a className={`
                    inline-block
                    py-4 px-6 md:p-6 
                    hover:bg-gray-700 cursor-pointer 
                    w-screen md:w-auto 
                    text-white 
                    text-lg 
                    ${isActive ? "font-extrabold" : ""}
                `}>
                    {title}
                </a>
            </Link>
        </li>
    );
}

const items = [
    {
        title: "Home",
        href: "/"
    },
    {
        title: "Status",
        href: "/status"
    },
    {
        title: "Privacy",
        href: "/privacy"
    },
    {
        title: "Look Up",
        href: "/lookup"
    },
    {
        title: "Login",
        href: "/login"
    },
];