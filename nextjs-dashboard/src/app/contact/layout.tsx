export default function ContactLayout({
    children,
}:{children: React.ReactNode}){
    return (
        <section>
        <nav></nav>
        {children}
        </section>
    )
}