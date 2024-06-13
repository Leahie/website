"use client"
import Socials from "@/(components)/Socials";
import Description from "./Description";
import Image from 'next/image'
import headShot from '@/(assets)/52.png'
import "./Home.css"
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({subsets: ["latin"], weight:['200', '400', '500','600', '700']});
import Heading from "@/(components)/Heading"
import { motion } from "framer-motion";

export default function Page() {
    
    return(
      <div className='Home'>
        <div className='mt-[5%] mx-[5%] flex  h-fit mb-[7%]'>
          <div className="w-[50%]">
          <Heading name="I'm Leah"/>
 
          <Description/>

          </div>

              
          <div className='flex justify-center w-[50%] h-[35em]'>
            <motion.img 
            initial={{ opacity: 0,  x:50}}  
            animate={{ opacity: 1,   x: 0}}
            transition={{ duration: 0.5 }}
            className="rounded-[30%]" src="/photo.png" alt='Photo of Creator' />
          </div>  
        </div>
        
      </div>

    );
  }