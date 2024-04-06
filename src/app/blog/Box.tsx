import "./Box.css"
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({subsets: ["latin"], weight:['200', '400', '500','600', '700']});

interface BoxProps{
    title: string, 
    snippet: string, 
    date: string
}
export default function Box(props: BoxProps){
    return(
        <div className={["Box", montserrat.className].join(' ')}>
            <h2>{props.title}</h2>
            <h3>{props.date}</h3>
            <p>{props.snippet}</p>
        </div>
    )
}