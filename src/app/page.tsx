"use client"
import Card from '@/(components)/Card';
import Heading from '@/(components)/Heading';
import Nav from '@/(components)/Nav'
import Image from 'next/image';
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { FaRegHandPointer } from "react-icons/fa";
import { motion } from "framer-motion"
import Socials from '@/(components)/Socials';
import { useState } from 'react';
import QuickFacts from './QuickFacts';




export default function Home() {
  const [bool, setBool] = useState(false)
  return (<div>
    <Nav place={-1}/>
    <div className='bg-white-color'>
      <div className='mt-[5%] mx-[5%] flex  h-[80vh]'>
        <div>
        <Heading name="Hi, I'm Leah"/>
        <motion.div
        initial={{ opacity: 0,  y:50}}
        animate={{ opacity: 1,   y: 0}}
        transition={{ duration: 0.5 }}
        ><Socials/></motion.div>
        
        </div>
        
        <div className='relative w-[50%]'>
          <motion.img 
          initial={{ opacity: 0,  x:50}}
          animate={{ opacity: 1,   x: 0}}
          transition={{ duration: 0.5 }}
          className="absolute bottom-10 right-0 z-0" src="/Home_01.jpg" width={400} height={400} alt='Charcoal Drawing of Creator' />
          <motion.img 
          initial={{ opacity: 0,  x:-100}}
          animate={{ opacity: 1,   x: 0}}
          transition={{ duration: 0.7 }}
          className='absolute top-0 left-0 z-0' src="/Home_00.jpg" width={430} height={430} alt='Picture of Moon' />
        </div>  
      </div>
    </div>
    
    <motion.div layout animate={{scale: [1,1.2, 1]}} transition={{
        duration: 1,
        ease: "easeInOut",
        times: [0, 0.8, 1],
        repeat: Infinity,
        repeatDelay: 0.2
      }} className='flex  mt-[5%] mb-[5%] w-fit mx-auto justify-center relative'>
    <IoIosArrowDropdownCircle className=' text-light-color size-[4.5em]'/>
    </motion.div>
    
    
    
    <QuickFacts/>
    <div className='bg-white-color pt-[4%] pb-[2%] '>
      <motion.div layout whileInView={{rotate: [0, 360]}} transition={{ duration: 1 }} whileHover={{
        scale: 1.2,
        rotate:0,
        transition: { duration: 1 },
      }}
      onMouseOver={() => setBool(true)} onMouseOut={() => setBool(false)} className=' flex p-4 rounded-full w-fit mx-auto justify-center relative gap-3 bg-light-color text-white-color'>
      <FaRegHandPointer className='size-8'/> {bool ?  <p className='font-semibold'>Learn More!</p> : <></> }
      </motion.div>
    </div>

    <motion.div className='flex flex-wrap justify-center pt-[10%] pb-[15%] gap-10 w-full '
    initial={{ opacity: 0,  y:100}}
    whileInView={{ opacity: 1,   y: 0}}
    transition={{ duration: 0.5 }}
    >
        <Card link="/about" name="About" desc="Learn a little about me!"/>
        <Card link="/blog" name="Notes" desc="Blogging bout life!"/>
        <Card link="/portfolio" name="Portfolio" desc="Artwork on Display!"/>
        <Card link="/projects" name="Projects" desc="Things I'm working on!"/>
    </motion.div>    
    
      
  </div>
  );
}
