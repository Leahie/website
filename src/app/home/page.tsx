import Socials from "@/(components)/Socials";
import Description from "./Description";
import Image from 'next/image'
import headShot from '@/(assets)/52.png'
import "./Home.css"
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({subsets: ["latin"], weight:['200', '400', '500','600', '700']});

import Heading from "./Heading"

export default function Page() {
    
    return(
      <div className='Home'>
        <Heading/>
        <div className='Content'>
        
          <div className="ImgGroup">
            <Image src={headShot} alt="Picture of Leah Zhang" className="Face"/>
            <Socials/>
              
          </div>
          <Description/>
          </div>
      </div>

    );
  }