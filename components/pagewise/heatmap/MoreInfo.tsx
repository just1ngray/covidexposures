import { Popup } from "react-map-gl";
import { Exposure } from "../../../database/Exposure";

interface Props {
    /* overlapping exposure */
    exposure: Exposure & { all: {
        epoch: number,
        width: number,
        instructions: string
    }[] },
    close: () => void
}

export default function MoreInfo({ exposure, close }: Props) {
    return (
        <Popup closeOnClick={true}
            onClose={close}
            longitude={exposure.coord.long}
            latitude={exposure.coord.lat}
        >
            <div className="cursor-default">
                <div className="border-b border-gray-500 pb-1 mb-1 text-center">
                    <h3 className="text-xl font-semibold">{exposure.name}</h3>
                    <p className="text-gray-500 text-xs -mt-1">{exposure.address}</p>
                    <a href={exposure.scraper.URL} className="underline text-blue-500 cursor-pointer">
                        {exposure.scraper.URL}
                    </a>
                </div>

                <ol className="text-xs text-gray-600 tracking-tight">
                    {exposure.all.map((doc, i) => 
                        <li key={doc.epoch} className="mb-2">
                            <span className="inline-block align-text-top">
                                {new Date(doc.epoch).toLocaleString()}
                                {" to "}
                                {new Date(doc.epoch + doc.width).toLocaleString()}
                                <p className="text-gray-400">{exposure.instructions}</p>
                            </span>
                        </li>
                    )}
                </ol>
            </div>
        </Popup>
    );
}