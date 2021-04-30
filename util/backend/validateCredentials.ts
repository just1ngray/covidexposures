import axios from "axios";

import { Credentials } from "../frontend/credentials";

/**
 * Validates the token with the provider
 * @param creds the credentials to validate
 * @returns [name, email] if valid
 */
 export default async function validateCredentials(creds: Credentials): Promise<[string, string]> {
    switch (creds.provider) {
        case "google": {
            interface Success {
                email: string,
                email_verified: boolean,
                name: string
            }

            const { data } = await axios.get(
                `https://oauth2.googleapis.com/tokeninfo?id_token=${creds.token}`
            );
            if (data.error) throw new Error(`${data.error}: ${data.error_description}`);

            const success = data as Success;

            if (!success.email_verified) throw new Error("Unverified email address");
            return [success.name, success.email];
        }

        default: {
            throw new Error("Unrecognized OAuth provider");
        }
    }
}