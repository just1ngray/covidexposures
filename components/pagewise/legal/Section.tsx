

export default function Section({ title, children }) {
    return (
        <section className="mb-2">
            <h3 className="text-lg font-bold underline my-2">{title}:</h3>
            <div className="text-gray-700">
                {children}
            </div>
        </section>
    )
}