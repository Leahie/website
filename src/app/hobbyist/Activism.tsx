import { Montserrat } from "next/font/google";
const montserrat = Montserrat({subsets: ["latin"], weight:['200', '400', '500','600', '700']});
export default function Activism(){
    return(
        <div>
            <h1 className={montserrat.className} style={{fontWeight:400, fontSize:"4vh"}}>Activism</h1>
        </div>
    )
}