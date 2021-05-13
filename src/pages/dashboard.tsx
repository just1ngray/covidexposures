import { useState, useEffect, useRef } from "react";
import axios from "axios";
import Head from "next/head";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Container from "../components/Container";
import { useLogin, logout } from "../util/credentials";
import { Subscription } from "../database/Subscription";
import keys from "../../keys";
import Map from "../components/pagewise/dashboard/Map";
import RadiusSlider from "../components/pagewise/dashboard/RadiusSlider";
import PopButton from "../components/PopButton";
import Result from "../components/pagewise/dashboard/Result";

export default function Dashboard({ apiKey }) {
    const creds = useLogin();

    const endDatePicker = useRef(null);

    const [subs, setSubs] = useState<Subscription[]>(null);
    useEffect(() => {
        if (creds == undefined) return;
        axios.put("/api/account/subscriptions", { credentials: creds })
            .then(({ data }) => setSubs(data))
            .catch(logout);
    }, [creds]);

    const [newSub, setNewSub] = useState<Subscription>({
        start: Date.now(),
        end: Date.now() + 1000*60*60*3,
        coord: { long: -63.582687, lat: 44.651070 },
        radius: 300
    } as any);
    function changeNewSub(changes: Partial<Subscription>) {
        setNewSub({ ...newSub, ...changes } as any);
    }

    const [result, setResult] = useState<Subscription[] | "SENDING" | null>(null);

    async function subscribe(e) {
        e.preventDefault();

        setResult("SENDING");
        const { data } = await axios.post("/api/account/subscribe", { credentials: creds, ...newSub });
        
        setResult(data.exposures);
        setSubs([...subs, data]);
        setNewSub({
            ...newSub,
            coord: { long: newSub.coord.long, lat: newSub.coord.lat - 0.001 }
        } as any);
    }

    async function unsubscribe(subscription: Subscription) {
        await axios.delete(`/api/account/${subscription._id}`, { data: {
            credentials: creds
        }});
        setSubs(subs.filter((s) => s._id != subscription._id));
    }
    
    return (
        <Container authRequired>
            <Head>
                <link href='https://api.mapbox.com/mapbox-gl-js/v2.2.0/mapbox-gl.css' rel='stylesheet' />
            </Head>

            <form onSubmit={subscribe} onFocus={() => setResult(null)}>
                <div className="h-96 md:w-3/4 xl:w-2/4 mx-auto">
                    <Map apiKey={apiKey}
                        subs={subs}
                        newSubscription={newSub}
                        changeNewSubscription={changeNewSub}
                        unsubscribe={unsubscribe}
                    />
                </div>

                <RadiusSlider radius={newSub.radius} 
                    setRadius={(r: number) => changeNewSub({ radius: r })} 
                />

                <div className="md:flex justify-center items-center">
                    <span className="w-full md:w-auto inline-block text-center">
                        <DatePicker onCalendarClose={() => {
                            setNewSub((oldSub: any) => {
                                return { ...oldSub, end: oldSub.start + 1000*60*60*3 };
                            });
                            endDatePicker.current.setOpen(true);
                        }}
                            popperPlacement="top"
                            selected={new Date(newSub.start)} 
                            onChange={(date: Date) => changeNewSub({ start: date.getTime() })} 
                            showTimeSelect
                            dateFormat="Pp"
                            className="
                                cursor-pointer border rounded
                                hover:bg-gray-200 border-gray-300
                                p-1 text-center md:text-right
                        "/>
                    </span>
                    <p className="text-center mx-2">to</p>
                    <span className="w-full md:w-auto inline-block text-center">
                        <DatePicker ref={endDatePicker}
                            popperPlacement="top"
                            selected={new Date(newSub.end)}
                            onChange={(date: Date) => changeNewSub({ end: date.getTime() })} 
                            showTimeSelect
                            dateFormat="Pp"
                            className="p-1
                                cursor-pointer border rounded
                                hover:bg-gray-200 border-gray-300
                                text-center md:text-left
                        "/>
                    </span>
                </div>

                <div className="flex flex-col items-center my-4">
                    <div style={{ minHeight: "100px" }}>
                        <Result result={result} />
                    </div>

                    {newSub.start >= newSub.end && 
                        <p className="text-red-700">The ending date is before the starting date!</p>
                    }

                    <span>
                        <PopButton type="submit" 
                            disabled={result == "SENDING" || newSub.start >= newSub.end}
                            className="
                                p-4 bg-green-400 text-gray-50 font-bold rounded-full
                                hover:bg-green-500 disabled:cursor-not-allowed disabled:opacity-50
                        ">
                            Create Subscription
                        </PopButton>
                    </span>
                </div>
            </form>
        </Container>
    );
}

export function getStaticProps() {
    return {
        props: {
            apiKey: keys.mapbox.map
        },
        revalidate: 60*60*6 // 6 hours
    }
}