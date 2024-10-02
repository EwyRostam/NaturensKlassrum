import Navbar from "./Navbar"

type Props = {
    children: React.ReactNode
}


export default function Page({ children }: Props) {

    return (
        <section className="w-screen h-screen overflow-auto">
            <Navbar />
            {children}
        </section>
    )
}