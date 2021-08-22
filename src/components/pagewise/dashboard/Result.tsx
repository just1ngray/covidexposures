import Image from "next/image";

import { Exposure } from "../../../database/Exposure";
import ExposureJSX from "../../Exposure";

export default function Result({ result }) {
    if (result == null || result == "SENDING") return (
        <div className={`${result == null ? "hidden" : "animate-spin"}`}>
            <Image priority src="/icons/spinner.svg" height={100} width={100} alt="Loading..." />
        </div>
    );

    if (result.length == 0) return (
        <div className="text-center">
            <strong>No exposures matched your subscription.</strong> We will keep your
            information for 30 days and email you if we detect any potential exposures.
            <br/><br/>
            <i>DEMO REMOVED SEARCH FUNCTIONALITY</i>
        </div>
    );

    return (
        <div>
            <p className="text-center mb-4">
                <strong>{result.length} exposure{result.length > 1 ? "s" : ""} matched
                your subscription.</strong> Please review the exposure details below:
            </p>

            {result.map((e: Exposure) => <ExposureJSX key={e._id} e={e} />)}
        </div>
    );
}