const pages = ["Kurser", "Företag/Grupper", "Om oss"]

export default function Navbar() {
    return (
        <ul>
            {pages.map((page) => <li>{page}</li>)}
        </ul>
    )
}

