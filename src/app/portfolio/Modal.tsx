import React, { useState, useEffect } from "react";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import Image from "next/image";

interface ModalProps {
  isOpen: boolean;
  changeArtwork: (arg0: number, arg1: number) => void;
  onClose: () => void;
  index: number;
  imgSrc: string;
  imgAlt: string;
  text: string;
  desc: string;
}

export function Modal({ isOpen, changeArtwork, onClose, index, imgSrc, imgAlt, text, desc }: ModalProps) {
  const [imgDimensions, setImgDimensions] = useState({ width: 800, height: 500 });
  const [maxDimensions, setMaxDimensions] = useState({ width: 800, height: 500 });

  useEffect(() => {
    // Set the maximum dimensions based on the current viewport size
    const updateMaxDimensions = () => {
      setMaxDimensions({
        width: window.innerWidth * 0.9, // 90% of viewport width
        height: window.innerHeight * 0.8 // 80% of viewport height
      });
    };
    updateMaxDimensions();
    window.addEventListener("resize", updateMaxDimensions);

    return () => window.removeEventListener("resize", updateMaxDimensions);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e:any) => {
      if (e.key === "Escape") {
        onClose();
      }
      if (isOpen==true) {
        
        console.log("registers") 
        if (e.key === "ArrowLeft") {
            onClose();
        changeArtwork(index, -1); // Previous artwork
        } else if (e.key === "ArrowRight") {
            onClose();
        changeArtwork(index, 1); // Next artwork
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]); // Add onClose as a dependency


  if (!isOpen) return null;

  const aspectRatio = imgDimensions.width / imgDimensions.height;
  let scaledWidth = imgDimensions.width;
  let scaledHeight = imgDimensions.height;

  if (scaledWidth > maxDimensions.width) {
    scaledWidth = maxDimensions.width;
    scaledHeight = scaledWidth / aspectRatio;
  }
  if (scaledHeight > maxDimensions.height) {
    scaledHeight = maxDimensions.height;
    scaledWidth = scaledHeight * aspectRatio;
  }
  
  const handleChangeArtwork = (direction: number) => {
    changeArtwork(index, direction);
  };


  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex  flex-col items-center justify-center z-50 "onClick={onClose}>
      <div
        className="relative bg-white rounded-md bg-opacity-90 overflow-hidden"
        style={{
          width: scaledWidth,
          height: scaledHeight + 40, // Adding space for text and close button
        }}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-xl font-bold"
        >
          &times;
        </button>
        <div className="flex flex-col p-4 items-center  mt-2 pb-[3.5em]" style={{ maxHeight: scaledHeight + 40, overflowY: "auto"}}>
          <div className="relative w-full h-full mb-4  ">
            <Image
              src={imgSrc}
              alt={imgAlt}
              layout="responsive"
              width={imgDimensions.width}
              height={imgDimensions.height}
              onLoadingComplete={({ naturalWidth, naturalHeight }) =>
                setImgDimensions({ width: naturalWidth, height: naturalHeight })
              }
            />
          </div>
          <p className="text-[2em] font-serif  text-dark-color  font-bold  leading-tight text-center decoration-4 underline underline-offset-4 mb-3">
            {text}
            </p>
          <p className="font-serif mx-2 text-balance text-center">{desc}</p>
          
        </div>
      </div>
       {/* Floating Navigation Arrows */}
       <div className=" flex justify-center px-4 text-[2.5em]">
        <button
          onClick={() => handleChangeArtwork(-1)}
          className="p-2  font-bold text-pale-color hover:text-white"
        >
          <IoIosArrowDropleftCircle />
        </button>
        <button
          onClick={() => handleChangeArtwork(1)}
          className="p-2 font-bold text-pale-color hover:text-white"
        >
          <IoIosArrowDroprightCircle />
        </button>
      </div>
    </div>
  );
}
