"use client";
import { Montserrat } from "next/font/google";
import React, {useState, useEffect, useRef} from 'react';
const montserrat = Montserrat({subsets: ["latin"], weight:['200', '400', '500','600', '700']});
import Heading from "@/(components)/Heading" 
// Import tabs



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
      <p>wassup</p>
    </div>    
  );
  }