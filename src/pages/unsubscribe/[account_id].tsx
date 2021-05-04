import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

import Container from "../../components/Container";
import PopButton from "../../components/PopButton";

export default function Unsubscribe() {
    const [email, setEmail] = useState("");

    const router = useRouter();
    const { account_id } = router.query;

    async function unsubscribe(e) {
        e.preventDefault();

        await axios.put("/api/account/email-sub", { account_id, email, isSubscribed: false });
        setEmail(null);
    }

    return (
        <Container>
            {email == null
                ?   <p>
                        You've unsubscribed! You will be automatically resubscribed if you
                        create a subscription in your dashboard.
                    </p>
                :   <form onSubmit={unsubscribe} className="flex flex-col items-center my-12">
                        <div>
                            <label className="inline-block m-2">Your Email:</label>
                            <input type="email" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="border border-gray-400 rounded p-2"
                            />
                        </div>

                        <PopButton type="submit" 
                            className="
                                bg-green-400 p-3 rounded-full
                                text-gray-50 font-bold mt-2
                        ">
                            Unsubscribe
                        </PopButton>
                    </form>
            }
        </Container>
    );
}