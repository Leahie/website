export default function BlogLayout({
    children,
}:{children: React.ReactNode}){
    return (
        <section>
        <nav></nav>
        {children}
        </section>
    )
}