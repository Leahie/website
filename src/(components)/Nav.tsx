"use client";
import Link from 'next/link'
import Leah from './Leah'
import Hamburger from './Hamburger';
import './Nav.css'
import { Montserrat } from "next/font/google";
import React, {useState, useEffect, useRef} from 'react';

const montserrat = Montserrat({subsets: ["latin"], weight:['200', '400', '500','600', '700']});

interface BoxProps{
    place: number;
}

export default function Nav(props: BoxProps){

    const [LinksClass, setLinksClass] = useState("")

    const toggleit = () =>{
        if (LinksClass === ""){
            setLinksClass("On")
        } 
        else{
            setLinksClass("")
        }
    }
    return(
        <div className={[montserrat.className, 'Nav'].join(' ')}>
            <div className='Logo'>
                <a href="/"><Leah/></a>
                <span onClick={toggleit} className="navbar-toggle" id="js-navbar-toggle">
                   <Hamburger /> 
                </span>
            </div>
            <div className={['Navlinks', LinksClass].join(' ')}>
                <Link href="/home" style={props.place===0 ? { borderBottom: "5px solid #453F78"} : {}}>Home</Link>
                <Link href="/blog" style={props.place===1 ? {borderBottom: "5px solid #453F78"} : {}}>Blog</Link>
                <Link href="/hobbyist" style={props.place===2 ? { borderBottom: "5px solid #453F78"} : {}}>Hobbyist</Link>
                <Link href="/projects" style={props.place===3 ? { borderBottom: "5px solid #453F78"} : {}}>Projects</Link>
                
            </div>
            
        </div>
    )
    
}