import { useRouter } from "next/router";

import Navbar from "./Navbar";
import Footer from "./Footer";
import { useLogin, logout } from "../util/frontend/credentials";
import { useEffect } from "react";

export default function Container({ className = "", children, authRequired = false }) {
    const creds = useLogin();
    const router = useRouter();

    useEffect(() => {
        if (authRequired && creds === null) 
            router.push("/login");
    }, [creds]);

    return (
        <div className="flex flex-col h-screen">
            <Navbar />
            <main className={`
                flex flex-col 
                flex-grow container mx-auto px-2 
                relative h-0
                ${className}
            `}>
                {creds && <div className="flex flex-row-reverse pr-4 -mt-2">
                    <button onClick={logout} className="p-1.5 underline">
                        Sign out
                    </button>
                </div>}

                {children}
            </main>
            <Footer />
        </div>
    );
}
