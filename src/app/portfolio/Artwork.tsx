interface ArtProps{
    name: string, 
    img:string
}

export default function Artwork(props: ArtProps){
    return(
        <div>
            <img src={props.img} alt={props.name} />
        </div>
    )
}