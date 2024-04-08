import { Montserrat } from "next/font/google";
import "./Box.css"
const montserrat = Montserrat({subsets: ["latin"], weight:['200', '400', '500','600', '700']});

interface BoxProps{
    name: string, 
    snippet: string, 
    tags: string[]
}
export default function Box(props: BoxProps){
    return(
        <div className={["Box2", montserrat.className].join(' ')}>
            <h2>{props.name}</h2>
            <h3>{(props.tags.join(" "))}</h3>
            <p>{props.snippet}</p>
        </div>
    )
}