import Link from "next/link";
import { useRouter } from "next/router";
import { GoogleLogin, GoogleLoginResponse } from "react-google-login";

import Container from "../components/Container";
import keys from "../../keys";
import { useLogin, login } from "../util/frontend/credentials";

export default function Login({ clientId }) {
    const router = useRouter();

    const creds = useLogin();
    if (creds != null)
        router.push("/");

    function successful(res: GoogleLoginResponse) {
        login({
            token: res.tokenId,
            name: res.profileObj.name,
            provider: "google"
        });
    }

    return (
        <Container>
            <div className="m-auto justify-center flex flex-col
                w-full sm:w-5/6 md:w-4/6 lg:w-3/6 xl:w-2/6
                shadow-xl p-4
            ">
                <h3 className="font-semibold text-3xl text-center pb-1">Login</h3>
                <p className="text-gray-700 text-center">
                    Subscribe to locations you've recently visited. If a potential exposure
                    is detected, you'll be notified via email.
                </p>

                <div className="border-t border-b border-gray-300 my-1 py-2 flex flex-col">
                    <GoogleLogin
                        clientId={clientId}
                        onSuccess={(res) => successful(res as GoogleLoginResponse)}
                        onFailure={(err) => console.error(err)}
                        cookiePolicy={'single_host_origin'}
                    />
                </div>

                <div className="text-center">
                    {`Please review our `}
                    <Link href="/privacy">
                        <a className="underline text-blue-500 cursor-pointer">Privacy Policy</a>
                    </Link>
                    {` and `}
                    <Link href="/terms">
                        <a className="underline text-blue-500 cursor-pointer">Terms of Service</a>
                    </Link>
                </div>
            </div>
        </Container>
    );
}

export function getStaticProps() {
    return {
        props: {
            clientId: keys.google.oauth
        }
    };
}