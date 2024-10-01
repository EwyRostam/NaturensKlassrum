const pages = ["Kurser", "Företag/Grupper", "Om oss"]

function navbar() {
    return (
        <section>
            {pages.map((page) => page)}
        </section>
    )
}

export default navbar()