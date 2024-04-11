import { Montserrat } from "next/font/google";
const montserrat = Montserrat({subsets: ["latin"], weight:['200', '400', '500','600', '700']});
export default function Activism(){
    return(
        <div className={montserrat.className} >
            <h1 style={{fontWeight:600, fontSize:"4vh"}}>Activism</h1>
            <p>My love for activism started when I joined the assistive technology club in my freshman year. Now, as co-president, 
                my mission is to foster this love in the younger students. At ATC  we work with Mary Fleming, an assistive technology 
                resource teacher, to meet with elementary schoolers around Fairfax County Public Schools. There we work through slideshows 
                and games we make during Sunday meetings to help them practice NuVoice (an app that helps them create, modify, and save vocabularies).
                In my years in the club, I've fallen in love with working with the students.
            </p>
            <h2 style={{fontWeight:500}}>Portfolio </h2>
            <ul >
                <li>Nova-Lang (2023-2024): In progress for MIT Beaver Works CRE[AT]E challenge. An application
                for people of all types. Teaches better communication for those with autism and better writing for
                general people through an NLP-based application. Uses HTML, CSS, JS, nodeJS, EJS, PyTorch, and
                hugging face databases.</li>
                <li>Art Rest (2022-2023): Utilized AutoCAD to create pen-holding technology for users with
                disabilities</li>
                <li>Colors (2021-2022): A web-based software to allow students who struggle with drawing paper to
                pencil to create colorful shapes without point-and-click</li>
            </ul>
            <h2 style={{fontWeight:500}}>Lewinsville Retirement Center Mclean Art Teacher</h2>
            <ul>
                <li>Teacher: Designed and created a free art program to help financially disadvantaged elderly to learn and create art</li>
                <li>Worked with poor motor capabilities caused by Parkinson's and difficult eyesight from age</li>
                <li>Aided students to create works for a culminating art exhibition</li>
            </ul>
        </div>
    )
}