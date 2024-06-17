"use client";
import { Montserrat } from "next/font/google";
import React, {useState, useEffect, useRef} from 'react';
const montserrat = Montserrat({subsets: ["latin"], weight:['200', '400', '500','600', '700']});
import Heading from "@/(components)/Heading" 
// Import tabs
import OlderWorks from "@/(assets)/Portfolio/Older_Works.json"
import Artwork from "./Artwork";


export default function Page() {
  let classes = [];
  const [tab, setTab] = useState(0)
  const change = (num: number) => {
    if (num<0) num+=4;
    setTab(num)
  }
  console.log(tab)
  for(let i =0; i<4;i++){
    if (i!==tab) classes.push("Small")
    else classes.push("Big")
  }

  return(
    <div className="Hobby">
      <div className='mt-[5%] mx-[5%] flex h-fit mb-[2%]'>
        <div className="w-[50%]">
          <Heading name="Portfolio"/>
        </div>
      </div>
      <div>
        {
          OlderWorks.map(({name, img}, index)=>(
            <Artwork name={name} img={img} key={index}/>
          )) 
        }
      </div>
    </div>    
  );
  }