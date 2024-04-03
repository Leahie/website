import "./Description.css"
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({subsets: ["latin"], weight:['200', '400', '500','600', '700']});

export default function Description(){
    return(
        <div className="Description">
            <p className={montserrat.className} >Hello! My name is Leah. I am a 
            junior at <a href="https://tjhsst.fcps.edu/">Thomas Jefferson High School for Science and Technology</a>. 
            My interests broadly vary from machine learning and web development to digital design and painting.
            </p>
            <p className={montserrat.className} >
            My love for CS comes from a desire to increase access. Growing up, my interests gravitated around art and math, both of which require the ability to put pen to paper. 
            It wasn’t until I started a volunteer art workshop at my grandmother’s retirement home that I realized that a kind of ableism was embedded in this practice—some of the residents were suffering from Parkinson’s, making their hands shaky. 
            I realized that the problem wasn’t limited to senior citizens—students with limited mobility would miss out on these important creative and analytical outlets.
            </p>
            <p className={montserrat.className} >
             Coding has allowed me to create applications that help students draw; for example, in my first year in ATC, we created an application that allows users to “draw” shapes using a single button rather than a mouse and keyboard. 
             </p >
            
        </div>
    )
}