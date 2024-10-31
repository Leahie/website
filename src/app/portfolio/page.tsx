"use client";
import { Montserrat } from "next/font/google";
import React, {useState, useEffect, useRef} from 'react';
const montserrat = Montserrat({subsets: ["latin"], weight:['200', '400', '500','600', '700']});
import Heading from "@/(components)/Heading" 
// Import tabs
import OlderWorks from "@/(assets)/Portfolio/Older_Works.json"
import AIUSWorks from "@/(assets)/Portfolio/AI_Us.json"
import RecentWorks from "@/(assets)/Portfolio/Recent_Works.json"
import Slider from "react-slick"; // don't forget to do npm install --save @types/react-slick in order to get the types
import Artwork from "./Artwork";
import Subtitle from "./Subtitle";
import {Modal} from "./Modal"
import { motion } from "framer-motion"
import Hero from "@/(components)/Hero";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Page() {
  const [modalOpen, setPageModalOpen] = useState(false);
  const openModal = () => setPageModalOpen(true);
  const closeModal = () => setPageModalOpen(false);
    
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalArtworks = AIUSWorks.length + OlderWorks.length + RecentWorks.length;
  const artworks = [...RecentWorks, ...AIUSWorks, ...OlderWorks];
  const images = ['/Portfolio/MixedMedia/1.JPG', '/Portfolio/MixedMedia/2.JPG', '/Portfolio/MixedMedia/3.JPG', '/Portfolio/MixedMedia/4.JPG', '/Portfolio/MixedMedia/5.JPG', '/Portfolio/MixedMedia/6.JPG','/Portfolio/MixedMedia/7.JPG']
  // Monitor modal state changes
useEffect(() => {
    console.log("Modal Open:", modalOpen);
  }, [modalOpen]);

  const changeArtwork = (index: number, offset: number) => {
    setCurrentIndex((prevIndex) => {
      let newIndex = index + offset;
      if (newIndex < 0) newIndex = totalArtworks - 1;
      if (newIndex >= totalArtworks) newIndex = 0;
      return newIndex;
    });
    console.log(currentIndex)
    if (!modalOpen) openModal();
  };
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    dots:true,
    speed:1000,
    slideToShow:1,
    slideToScroll:1,
    initialSlide:0,
    pauseOnHover:true,
    autoplay:true,
    arrows : false,
    };


  return (
    <> 
      <div className="mt-[5%] mx-[5%] flex flex-col h-fit mb-[2%]">
        <Heading name="Portfolio" />
        <Subtitle text="Recent Works" num="1" />
        <div className="flex gap-10 flex-wrap items-center justify-center">
          {RecentWorks.map(({ name, img, desc }, index) => (
            <Artwork
              key={index}
              name={name}
              img={img}
              index={index}
              desc={desc}
              classname=""
              changeArtwork={changeArtwork}
            />
          ))}
        </div>
        <Subtitle text="AI & Us Works" num="2" />
        <div className="mb-10 flex gap-10 flex-wrap items-center justify-center">
          {AIUSWorks.map(({ name, img, desc }, index) => (
            <Artwork
              key={index}
              name={name}
              img={img}
              index={index + RecentWorks.length}
              desc={desc}
              classname=""
              changeArtwork={changeArtwork}
            />
          ))}
        </div>
        <Subtitle text="Mixed Media Closeup" num="3"/>
        <div className=" mb-10 ">
          <Slider {...settings}>
          {
              images.map((item, index)=>(
                <Hero key = {index} source={item}/>
            ))
            }
        </Slider>
        </div>
        

        <Subtitle text="Older Works" num="4" />
        <div className="flex gap-10 flex-wrap items-center justify-center">
          {OlderWorks.map(({ name, img }, index) => (
            <Artwork
              key={index}
              name={name}
              img={img}
              index={index + RecentWorks.length + AIUSWorks.length}
              desc=""
              classname=""
              changeArtwork={changeArtwork}
            />
          ))}
        </div>
      </div>

      {modalOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.8 }} 
          transition={{ duration: 0.5 }}
        >
          <Modal
            isOpen={modalOpen}
            index={currentIndex}
            onClose={closeModal}
            tempfunct={() => null}
            changeArtwork={changeArtwork}
            imgSrc={artworks[currentIndex].img}
            imgAlt={artworks[currentIndex].name}
            text={artworks[currentIndex].name}
            desc={artworks[currentIndex].desc}
          />
        </motion.div>
      )}
    </>
  );
}
