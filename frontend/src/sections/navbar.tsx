const pages = ["Kurser", "Företag/Grupper", "Om oss"]

export default function Navbar() {
    return (
        <section>
            {pages.map((page) => page)}
        </section>
    )
}

