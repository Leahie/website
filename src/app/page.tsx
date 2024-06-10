import Card from '@/(components)/Card';
import Heading from '@/(components)/Heading';
import Nav from '@/(components)/Nav'
import Image from 'next/image';
import { IoIosArrowDropdownCircle } from "react-icons/io";


export default function Home() {
  return (<div>
    <Nav place={-1}/>
    <div className='bg-white-color'>
      <div className='mt-[5%] mx-[5%] flex  h-[80vh]'>
        <Heading name="Hi, I'm Leah"/>
        <div className='relative w-[50%]'>
          <Image className="absolute bottom-10 right-0 z-0" src="/Home_01.jpg" width={400} height={400} alt='Charcoal Drawing of Creator' />
          <Image className='absolute top-0 left-0 z-0' src="/Home_00.jpg" width={430} height={430} alt='Picture of Moon' />
        </div>  
      </div>
    </div>
    
    <IoIosArrowDropdownCircle className='flex w-full h-[4.5em] text-light-color'/>
    <div className='flex flex-wrap justify-center'>
        <Card name="About"/>
        <Card name="Notes"/>
        <Card name="Portfolio"/>
        <Card name="Projects"/>
    </div>    
  </div>
  );
}
