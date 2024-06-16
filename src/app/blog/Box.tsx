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
        <div className="transition ease-in-out delay-100 duration-300 bg-[#006989]/70 flex flex-col w-[70vw] mb-5 p-[2em] rounded-xl text-white-color  shadow-xl hover:shadow-2xl hover:bg-[#006989]">
            <h2 className=" text-[2.5em]">{props.title}</h2>
            <h3 className="opacity-85">{props.date}</h3>
            <p>{props.snippet}</p>
        </div>
    )
}