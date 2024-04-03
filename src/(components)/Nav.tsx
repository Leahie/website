import Link from 'next/link'
import Leah from './Leah'
import './Nav.css'
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({subsets: ["latin"], weight:['200', '400', '500','600', '700']});

export default function Nav(){
    return(
        <div className={[montserrat.className, 'Nav'].join(' ')}>
            <div className='Logo'>
                <Leah/>
            </div>
            <div className='Navlinks'>
                <Link href="/home">Home</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/art_us">Art & Us</Link>
                <Link href="/contact">Contact</Link>
                
            </div>
            
        </div>
    )
    
}