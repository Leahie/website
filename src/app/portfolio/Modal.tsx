"use client"
import React, { useState, useEffect } from "react";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { motion } from "framer-motion"
import Image from "next/image";

interface ModalProps {
  isOpen: boolean;
  changeArtwork: (arg0: number, arg1: number) => void;
  onClose: () => void;
  tempfunct: () => void;
  index: number;
  imgSrc: string;
  imgAlt: string;
  text: string;
  desc: string;
}

export function Modal({ isOpen, changeArtwork, tempfunct, onClose, index, imgSrc, imgAlt, text, desc }:ModalProps) {
  const [imgDimensions, setImgDimensions] = useState({ width: 800, height: 500 });
  const [maxDimensions, setMaxDimensions] = useState({ width: 800, height: 500 });

  useEffect(() => {
    const updateMaxDimensions = () => {
      setMaxDimensions({
        width: window.innerWidth * 0.9,
        height: window.innerHeight * 0.8,
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
      } else if (e.key === "ArrowLeft") {
        changeArtwork(index, -1);
      } else if (e.key === "ArrowRight") {
        changeArtwork(index, 1);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [index, onClose, changeArtwork]);

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

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <button
        onClick={(e) => {
          e.stopPropagation();
          tempfunct();
          changeArtwork(index, -1);
        }}
        className="p-2 font-bold text-pale-color flex justify-center px-4 text-[2.5em] hover:text-white"
      >
        <IoIosArrowDropleftCircle />
      </button>
      
      <div
        className="relative bg-white rounded-md bg-opacity-90 overflow-hidden"
        style={{ width: scaledWidth, height: scaledHeight + 40 }}
        onClick={(e) => e.stopPropagation()} // Prevents modal close on clicking the content
      >
        <p className="text-[2em] font-serif mt-5 text-dark-color font-bold leading-tight text-center decoration-4 underline underline-offset-4 mb-3">
          {text} <span className="text-sm text-[#453F78]">{index}</span>
        </p>
        <button onClick={onClose} className="absolute top-2 right-2 text-xl font-bold">
          &times;
        </button>
        <div className="flex flex-col p-4 items-center mt-2 pb-[3.5em]" style={{ maxHeight: scaledHeight + 40, overflowY: "auto" }}>
          <div className="relative w-full h-full mb-4">
            <Image
              src={imgSrc}
              alt={imgAlt}
              layout="responsive"
              width={imgDimensions.width}
              height={imgDimensions.height}
              onLoadingComplete={({ naturalWidth, naturalHeight }) => setImgDimensions({ width: naturalWidth, height: naturalHeight })}
            />
          </div>
          <p className="font-serif mb-10 mx-2 text-balance text-center">{desc}</p>
        </div>
      </div>
      
      <button
        onClick={(e) => {
          tempfunct();
          e.stopPropagation();
          changeArtwork(index, 1);
        }}
        className="p-2 font-bold text-pale-color flex justify-center px-4 text-[2.5em] hover:text-white"
      >
        <IoIosArrowDroprightCircle />
      </button>
    </motion.div>
  );
}
