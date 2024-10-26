import { Montserrat } from "next/font/google";
const montserrat = Montserrat({subsets: ["latin"], weight:['200', '400', '500','600', '700']});

type props = {
    text:string;
    num: string;
}



export default function Subtitle({text, num}:props){
    return(
        <div className=" flex flex-col gap-4 my-2 mb-10 ">
            <p className="text-[3em] text-[#453F78]  font-bold  leading-tight">
                <span className="text-dark-color">{num}</span> {text} 
            </p>
        </div>
    )
}