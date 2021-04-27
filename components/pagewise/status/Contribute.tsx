import Image from "next/image";
import PopButton from "../../PopButton";

interface Props {
    message?: string,
    href?: string,
    className?: string,
    pop?: boolean
}

export default function Contribute({ 
    message = "Help make this open source app better!", 
    href = "https://github.com/just1ngray/covidexposures",
    className = ""
}: Props) {
    return (
        <a href={href} className={`flex justify-center ${className}`}>
            <PopButton className="
                flex items-center
                border-gray-100 border
                p-2 rounded-md
                text-left
            ">
                <div className="inline-block">
                    <Image src="/GitHub-Mark-64px.png" layout="fixed" height={64} width={64} />
                </div>
                <div className="pl-2">
                    <p className="text-xl font-semibold">Contribute</p>
                    <p className="">{message}</p>
                </div>
            </PopButton>
        </a>
    );
}