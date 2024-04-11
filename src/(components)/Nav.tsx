import Link from 'next/link'
import Leah from './Leah'
import './Nav.css'
import { Montserrat } from "next/font/google";
import { underline } from 'colors';
const montserrat = Montserrat({subsets: ["latin"], weight:['200', '400', '500','600', '700']});

interface BoxProps{
    place: number;
}

export default function Nav(props: BoxProps){
    return(
        <div className={[montserrat.className, 'Nav'].join(' ')}>
            <div className='Logo'>
                <Leah/>
            </div>
            <div className='Navlinks'>
                <Link href="/home" style={props.place===0 ? {textDecoration:"underline", borderBottom: "2px solid #453F78"} : {}}>Home</Link>
                <Link href="/blog" style={props.place===1 ? {textDecoration:"underline", borderBottom: "2px solid #453F78"} : {}}>Blog</Link>
                <Link href="/hobbyist" style={props.place===2 ? {textDecoration:"underline", borderBottom: "2px solid #453F78"} : {}}>Hobbyist</Link>
                <Link href="/projects" style={props.place===3 ? {textDecoration:"underline", borderBottom: "2px solid #453F78"} : {}}>Projects</Link>
                
            </div>
            
        </div>
    )
    
}