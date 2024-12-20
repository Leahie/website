"use client";
import "./Hobbyist.css"
import { Montserrat } from "next/font/google";
import React, {useState, useEffect, useRef} from 'react';
const montserrat = Montserrat({subsets: ["latin"], weight:['200', '400', '500','600', '700']});
import Heading from "@/(components)/Heading" 
// Import tabs
import Activism from "./Activism"
import SocialImpact from "./Social_Impact"
import CS from "./CS"
import Art from "./Art"



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
      
      <Heading name="Semi-Professional"/>
      <div className="hobb-nav">
        <div className={['Hobbyist', montserrat.className].join(' ')}>
          <button onClick={() => change((tab-1)%4)}>&#8592;</button>
          <button className={classes[0]} onClick={() => change(0)} style={tab===0 ? {boxShadow: "0px 3px 4px #d9a0b0"} : {}}>Activism</button>
          <button className={classes[1]}onClick={() => change(1)}  style={tab===1 ? {boxShadow: "0px 3px 4px #d9a0b0"} : {}}>Social Impact</button>
          <button className={classes[2]} onClick={() => change(2)} style={tab===2 ? {boxShadow: "0px 3px 4px #d9a0b0"} : {}}>CS</button>
          <button className={classes[3]} onClick={() => change(3)} style={tab===3 ? {boxShadow: "0px 3px 4px #d9a0b0"} : {}}>Art</button>
          <button onClick={() => change((tab+1)%4)}> &#8594; </button>
        </div>
      </div>
      <div className="hobb-body">
        {tab===0 && <Activism/>}
        {tab===1 && <SocialImpact/>}
        {tab===2 && <CS/>}
        {tab===3 && <Art/>}
      </div>
      
    </div>
    
    
  );
  }