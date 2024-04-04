import { Montserrat } from "next/font/google";
import Heading from "./Heading"
const montserrat = Montserrat({subsets: ["latin"], weight:['200', '400', '500','600', '700']});

export default function Page() {
    return <div className='BLOG'>
    <Heading/>
  </div>
  }