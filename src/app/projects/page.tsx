import Heading from "@/(components)/Heading";
import Data from "@/(data)/projects.json";
import Box from "./Box";
import Link from 'next/link'
import "./projects.css"

//Look up form videos 
export default function Page() {
    return(<div className="Projects">
        <Heading name="Lights, Camera, Projects!"/>
        <div className="Boxes">
            {Data.map((e)=>( 
            <Link  href = {e.link} key={e.name}>
                <Box   key={e.name} name = {e.name} snippet={e.snippet} tags = {e.tags}  />   
            </Link>
            ))}
        </div>
        
    
    </div>
    
    )
  }