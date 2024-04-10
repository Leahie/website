import { Suspense } from 'react';
import Loading from '@/(components)/loading'
export default function HomeLayout({
    children,
}:{children: React.ReactNode}){
    return (
        <section>
        <nav></nav>
        <Suspense fallback={< Loading />}>
        {children}
        </Suspense>
        
        </section>
    )
}