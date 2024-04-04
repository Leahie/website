"use client";
import React, {useState, useEffect, useRef} from 'react';
import { Montserrat } from "next/font/google";
import "./Heading.css"
const montserrat = Montserrat({subsets: ["latin"], weight:['200', '400', '500','600', '700']});

const tags = ["#Developer", "#Programmer", "#Artist", "#Creative", "#Student", "#Data Scientist", "#Service", "#Machine Learning"]

export default function Heading(){
    const [tag, setTag] = useState("?");
    const [index, setIndex] = useState(0);
    const [delay, setDelay] = useState(333);
    const [isRunning, setIsRunning] = useState(true);

    function chooseRand(arr){
        index;
        let newIndex = (index+1)%(arr.length);
        setIndex(newIndex);
        return arr[index];
    }

    useInterval(()=>{
        const newTag = chooseRand(tags);
        setTag(newTag);
    }, isRunning ? delay : null);
    //console.log(chooseRand(tags))
    
    function stop(){
        setIsRunning(false);
    }

    return(
        <div className='Heading'>
            <h1 className={montserrat.className}>My Id is . . . {tag}</h1>
            <button className={montserrat.className} onClick={stop}>STOP</button>
        </div>
    
    )
}



function useInterval(callback, delay) {
    const savedCallback = useRef();
   
    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);
   
    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

