import { Montserrat } from "next/font/google";
const montserrat = Montserrat({subsets: ["latin"], weight:['200', '400', '500','600', '700']});
import { TypeAnimation } from 'react-type-animation';

// Blog page slugging 
// https://nextjs.org/docs/pages/building-your-application/routing/dynamic-routes 
// https://www.npmjs.com/package/@next/mdx 

interface HeadingProps{
    name: string;
}

export default function Heading(props: HeadingProps){
    return(
            <h1 className={[montserrat.className, "Title", "self-start pt-5"].join(" ")}>{props.name}</h1>
    )
}
