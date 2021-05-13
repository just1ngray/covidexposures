interface Props {
    radius: number,
    setRadius: (r: number) => void
}

export default function RadiusSlider({ radius, setRadius }: Props) {
    const toM = (s: number) => 100 + s**2;
    const toS = (m: number) => Math.round(Math.sqrt(m - 100));

    return (
        <div className="text-center">
            <span>
                Notification Radius:
                <input className="
                        m-1 p-0.5 text-right text-lg w-24
                        border border-gray-400 rounded
                    " 
                    type="number" value={radius}
                    onChange={(e) => setRadius(Math.min(Number(e.target.value), 4456))}
                    max={4456} min={1}
                />
                m
            </span>

            <input className="
                    w-full
                    cursor-move appearance-none 
                    bg-yellow-400 rounded-full
                " type="range"
                min={0} max={66} step={1} 
                onChange={(e) => setRadius(toM(Number(e.target.value)))}
                value={toS(radius)}
            />

            {radius > 1000 &&<p className="text-red-700 font-bold text-lg">
                                WARNING: Setting a large radius could lead to a lot of notification emails.
                            </p>}
            {radius < 100 &&<p className="text-red-700">
                                WARNING: A small radius might miss notification emails you should have received.
                            </p>}
        </div>
    );
}