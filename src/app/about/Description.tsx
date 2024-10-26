import "./Description.css"
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({subsets: ["latin"], weight:['200', '400', '500','600', '700']});

export default function Description(){
    return(
        <div className="mx-5 flex flex-col gap-4">
            <p className="text-[3em] text-dark-color font-semibold  leading-tight">I am a senior at <a href="https://tjhsst.fcps.edu/">Thomas Jefferson High School for Science and Technology</a>. 
            </p>
            
            <p className="text-dark-color mx-1 text-[1.2em] font-medium">
            My love for CS comes from a desire to increase access. Over the past four years I've worked on various projects using web development and AI. 
            <br /> <br />
            These days my interests broadly vary from machine learning and web development to digital design and painting.
            </p>
        </div>
    )
}