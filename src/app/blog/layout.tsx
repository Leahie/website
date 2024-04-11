import { Suspense } from 'react';
import Loading from '@/(components)/loading'
import Nav from '@/(components)/Nav'

export default function BlogLayout({
    children,
}:{children: React.ReactNode}){
    return (
        <section>
        <Nav place = {1}/>
        <Suspense fallback={< Loading />}>
        {children}
        </Suspense>
        
        </section>
    )
}