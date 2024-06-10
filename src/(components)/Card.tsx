interface CardProps{
    name: String
}
export default function Card(props: CardProps){
    return(
        <div className="rounded-[50%] w-[5em] h-[5em] bg-med-color p-10 m-5">
            <p className="">{props.name}</p>
        </div>
    )
}