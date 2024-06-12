import QuickFacts from "@/(assets)/QuickFacts.json"
import PockerCard from "@/(components)/PockerCard"
import { motion } from "framer-motion"

export default function(){
    return(
        <div className='bg-med-color pt-[10%] pb-[12%] w-[100%] flex items-center content-center place-content-evenly'>
           <motion.div className="w-[95%] flex items-center content-center place-content-evenly flex-wrap "
           initial={{ opacity: 0, y: 100}}
           whileInView={{ opacity: 1, y:0}}
            transition={{ type: "spring", duration: 2 }}
           >
                {QuickFacts.map(({name, label, symbol ,img, desc}, index)=>(
                    <PockerCard label={label} name={name} symbol={symbol} img={img} desc={desc} key={index}/>
                )) }
            </motion.div>
            
    </div>

    )
}