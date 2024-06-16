import { Montserrat } from "next/font/google";
const montserrat = Montserrat({subsets: ["latin"], weight:['200', '400', '500','600', '700']});
export default function CS(){
    return(
        <div>
            <h1 className={montserrat.className} style={{fontWeight:600, fontSize:"4vh"}}>Computer Science</h1>
        </div>
    )
}