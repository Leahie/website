import "./Hobbyist.css"
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({subsets: ["latin"], weight:['200', '400', '500','600', '700']});

export default function Page() {
    return(
      <div className="Bg">
        <div className={['Hobbyist', montserrat.className].join(' ')}>
          <button>&#8592;</button>
          <button >Activism</button>
          <button >Social Impact</button>
          <button >Computer Science</button>
          <button >Art</button>
          <button> &#8594; </button>

        </div>
      </div>
      
    );
  }