import Image from "next/image";
import main from '@/(assets)/1.jpg'
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({subsets: ["latin"], weight:['200', '400', '500','600', '700']});

import "./Hero.css"
interface HeroProps{
    source: string
}

export default function Hero(props: HeroProps){
    return(
        <div className="object-cover overflow-hidden relative h-[60vh] w-[80vw] mx-10 mb-5 rounded-lg shadow-xl">
            <Image  src={props.source} fill={true}  quality={100} objectFit="cover"   alt="Picture of the author" />
        </div>
          
    )
}