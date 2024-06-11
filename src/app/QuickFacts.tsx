import QuickFacts from "@/(assets)/QuickFacts.json"
import PockerCard from "@/(components)/PockerCard"
export default function(){
    return(
        <div className='bg-light-color max-w-[100%] h-fit flex'>
{       QuickFacts.map(({name, symbol ,img, desc}, index)=>(
                    <PockerCard name={name} symbol={symbol} img={img} desc={desc} key={index}/>
                )) }
    </div>

    )
}