import { useState, useEffect } from "react";

export interface Credentials {
    /** token issuer */
    provider: "google", // others to come?

    /** name decoded from the jwt */
    name: string,

    /** jwt */
    token: string
}

const CREDENTIALS = "creds";

export function useLogin() {
    const [creds, setCreds] = useState<Credentials>(undefined);

    useEffect(() => {
        const creds = localStorage.getItem(CREDENTIALS);
        setCreds(creds == null ? null : JSON.parse(creds));
    }, []);

    return creds;
}

export function login(creds: Credentials) {
    localStorage.setItem(CREDENTIALS, JSON.stringify(creds));

    // redirection should be done by O-Auth provider, but backup:
    setTimeout(() => {
        if (window.location.pathname.includes("/login"))
            window.location.reload()
    }, 250);
}

export function logout() {
    localStorage.removeItem(CREDENTIALS);
    window.location.reload();
}