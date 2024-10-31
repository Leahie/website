"use client"
import Image from "next/image";
import { Modal } from "./Modal";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface ArtProps {
  name: string;
  changeArtwork: (arg0: number, arg1: number) => void;
  img: string;
  desc: string;
  classname: string;
  index: number;
}

export default function Artwork(props: ArtProps) {
  const [modalOpen, setArtModalOpen] = useState(false);
  const openModal = () => {
    setArtModalOpen(true);
    props.changeArtwork(props.index, 0)
  }
  const closeModal = () => setArtModalOpen(false);
  const temp_funct = () => setArtModalOpen(false);



  return (
    <>
      <div 
        className="w-[90vw] sm:w-[45vw] md:w-[30vw] lg:w-[25vw] h-[50vh] overflow-hidden relative lg:hover:scale-105 ease-in-out duration-300
        drop-shadow-lg hover:drop-shadow-2xl"
        onClick={openModal}
      >
        <Image src={props.img} alt={props.name} fill={true} objectFit="cover" className="cursor-pointer" />
      </div>
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5 }}
      >
                <Modal
        isOpen={modalOpen}
        index={props.index}
        onClose={closeModal}
        tempfunct = {temp_funct}
        changeArtwork={props.changeArtwork} // Pass this function to Modal
        imgSrc={props.img}
        imgAlt={props.name}
        text={props.name}
        desc={props.desc}
        />

      </motion.div> */}
    </>
  );
}
