import jwt from "jsonwebtoken";

import keys from "../../keys";
import { Credentials } from "../frontend/credentials";

/**
 * Validates a JWT
 * @param creds the credentials to validate
 * @returns null if invalid or not verified, and [name, email] as strings if valid
 */
 export async function validateCredentials(creds: Credentials): Promise<[string, string]> {
    try {
        switch (creds.provider) {
            case "google": {
                const { email, email_verified, name } = 
                    jwt.verify(creds.token, keys.google.oauth.secret) as { 
                        email: string, 
                        email_verified: boolean, 
                        name: string
                    };
                    
                if (!email_verified) return null;
                return [name, email];
            }
        }
    } catch {
        return null;
    }
}