"use client";
import { Montserrat } from "next/font/google";
import React, {useState, useEffect, useRef} from 'react';
const montserrat = Montserrat({subsets: ["latin"], weight:['200', '400', '500','600', '700']});
import Heading from "@/(components)/Heading" 
// Import tabs
import OlderWorks from "@/(assets)/Portfolio/Older_Works.json"
import AIUSWorks from "@/(assets)/Portfolio/Ai_Us.json"

import Artwork from "./Artwork";
import Subtitle from "./Subtitle";
import {Modal} from "./Modal"


export default function Page() {
  const [modalOpen, setPageModalOpen] = useState(false)
  const openModal = () => setPageModalOpen(true);
  const closeModal = () => setPageModalOpen(false);
    
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalArtworks = AIUSWorks.length + OlderWorks.length; // Total number of artworks

  const artworks = [...AIUSWorks, ...OlderWorks];

  const changeArtwork = (_ind:number, num:number) => {
    setCurrentIndex(_ind);
    setCurrentIndex((index) => {
      console.log(index)
      let newIndex = index + num;
      if (newIndex < 0) newIndex = totalArtworks - 1; // Wrap around to the last artwork
      if (newIndex >= totalArtworks) newIndex = 0; // Wrap around to the first artwork
      return newIndex;
    });
    openModal()
  };

  const handleKeyDown = (e:any) => {
    if (modalOpen==true) {
        closeModal();
        if (e.key === "ArrowLeft") {
            
        changeArtwork(currentIndex, -1); // Previous artwork
        } else if (e.key === "ArrowRight") {
        changeArtwork(currentIndex, 1); // Next artwork
        }
    }
  };
  
  return(
    <> 
     <div className="mt-[5%] mx-[5%] flex flex-col h-fit mb-[2%]">
    <div >
      <Heading name="Portfolio"/>
    </div>  
  <Subtitle text="AI & Us Works" num="1"/>
  <div className="flex gap-10 flex-wrap items-center justify-center ">
    {
      AIUSWorks.map(({name, img, desc}, index)=>(
        <Artwork name={name} img={img} key={index} index={index} desc={desc} classname={""} changeArtwork={changeArtwork}/>
      )) 
    }
  </div>
  <Subtitle text="Older Works" num="2"/>
  <div className="flex gap-10 flex-wrap items-center justify-center ">
    {
      OlderWorks.map(({name, img}, index)=>(
        <Artwork name={name} img={img} key={index} index={AIUSWorks.length + index} desc= "" classname={""} changeArtwork={changeArtwork}/>
      )) 
    }
  </div>
</div>    
    <Modal
    isOpen={modalOpen}
    index={currentIndex}
    onClose = {closeModal}
    changeArtwork = {changeArtwork}
    imgSrc = {artworks[currentIndex].img}
    imgAlt={artworks[currentIndex].name}
    text={artworks[currentIndex].name}
    desc={artworks[currentIndex].desc}/>
    </>
   
  );
  }