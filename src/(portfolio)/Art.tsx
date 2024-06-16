import { Montserrat } from "next/font/google";
const montserrat = Montserrat({subsets: ["latin"], weight:['200', '400', '500','600', '700']});
export default function Art(){
    return(
        <div>
            <h1 className={montserrat.className} style={{fontWeight:600, fontSize:"4vh"}}>Art</h1>
        </div>
    )
}