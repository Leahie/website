"use client"
import Image from "next/image";
import {Modal} from "./Modal"
import { useState, useEffect } from "react";
interface ArtProps{
    name: string, 
    changeArtwork: (arg0: number, arg1: number) => void;
    img:string, 
    desc: string,
    classname: string,
    index: number
}


export default function Artwork(props: ArtProps){
    const [modalOpen, setArtModalOpen] = useState(false)
    const openModal = () => setArtModalOpen(true);
    const closeModal = () => setArtModalOpen(false);

    const handleKeyDown = (e:any) => {
        console.log(props.index)
        if (modalOpen==true) {
            
            if (e.key === "ArrowLeft") {
                closeModal();
            props.changeArtwork(props.index, -1); // Previous artwork
            } else if (e.key === "ArrowRight") {
                closeModal();
            props.changeArtwork(props.index, 1); // Next artwork
            }
        }
      };
      
      useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);
        return () => {
          window.removeEventListener("keydown", handleKeyDown);
        };
      }, [modalOpen]);
      
    return(
        <>
        <div className=" w-[90vw] sm:w-[45vw] md:w-[30vw] lg:w-[25vw] h-[50vh] overflow-hidden relative lg:hover:scale-105 ease-in-out duration-300" onClick={openModal}>
            <Image src={props.img} alt={props.name} fill={true} objectFit="cover" className="cursor-pointer" />
        </div>
        <Modal
            isOpen={modalOpen}
            index={props.index}
            onClose = {closeModal}
            changeArtwork = {props.changeArtwork}
            imgSrc = {props.img}
            imgAlt={props.name}
            text={props.name}
            desc={props.desc}
        />
        </>
        
    )
}