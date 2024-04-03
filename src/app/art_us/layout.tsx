export default function ArtLayout({
    children,
}:{children: React.ReactNode}){
    return (
        <section>
        <nav></nav>
        {children}
        </section>
    )
}