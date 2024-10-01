type Props = {
    title: string
}

export default function navbarComponent({ title }: Props) {
    return (
        <h1>
            {title}
        </h1>
    )
}