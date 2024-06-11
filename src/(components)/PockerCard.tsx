import Image from "next/image"

interface PockerProps{
    name: string, 
    img: string, 
    symbol: string, 
    desc:string
}

export default function PockerCard(props:PockerProps){
    return(
        <div className="bg-white-color min-w-[20%] min-h-[40%] m-5" >
            <Image src={props.img} width="200" height="400" alt="" />

        </div>
    )
}