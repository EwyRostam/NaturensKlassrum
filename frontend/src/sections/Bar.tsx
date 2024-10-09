const pages = ["Kurser", "Företag/Grupper", "Om oss"]

export default function Bar() {
    return (
        <ul className="flex justify-end m-5 border border-black">
            {pages.map((page) => <li className="p-5">{page}</li>)}
        </ul>
    )
}

