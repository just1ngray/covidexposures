import { Exposure } from "../database/Exposure";

interface Props {
    e: Exposure
}

export default function ExposureJSX({ e }: Props) {
    return (
        <div className="text-center pl-4 mb-4">
            <p className="font-bold text-base underline">{e.name}</p>
            <p className="font-light text-gray-500 text-xs -mt-1">{e.address}</p>
            <p>From {new Date(e.start).toLocaleString()} to {new Date(e.end).toLocaleString()}</p>
            <p>Instructions: {e.instructions}</p>
        </div>
    );
}