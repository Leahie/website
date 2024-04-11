import { Montserrat } from "next/font/google";
const montserrat = Montserrat({subsets: ["latin"], weight:['200', '400', '500','600', '700']});
export default function SocialImpact(){
    return(
        <div className={montserrat.className}>
            <h1  style={{fontWeight:600, fontSize:"4vh"}}>Social Impact</h1>
            <p> q</p>
            <h2>Bow Seat, Threads of Change: Weaving Climate Activism into Art</h2>
            <ul>
                <li>Award-Winning Film Director: Directed a film for the betterment of the climate and named second place in the world for the Film Category</li>
                <li>Interviewed and worked with associate professor and professional climate activist Monica Johan Bose who has gained numerous awards for her work</li>
            </ul>
            <h2>AI & Us: Art Exhibition</h2>
            <ul>
                <li>Sole Organizer: Prepared art show, reached out and coordinated with art gallery owners of the Reston Art Gallery</li>
                <li>Art Auction with a Cause: Reached out to ARC of Nova. The Art Exhibition is a silent auction,
                funds made go to ARC to support their cause of making assistive technology for those with
                disabilities.
                </li>
            </ul>
        </div>
    )
}