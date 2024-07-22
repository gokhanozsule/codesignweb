import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import FooterWorks from './FooterWorks'
import bg from '../images/08.png'
import { Carousel } from './Carousel'
import { Link } from 'react-router-dom'

const Works_Mix = () => {



  return (
    <>
    <div className='w-full h-[80vh] rounded-3xl bg-cover bg-center custom-shadow z-10 flex flex-col relative  box-border'
    style={{backgroundImage : `url(${bg})`, borderRadius: '24 px'}}
    >
      <div className="w-full h-full bg-black rounded-3xl opacity-55 absolute left-0 right-0 z-10">
        <div className='absolute text-white z-50 left-[2.5%] bottom-[80%]'>Year</div>
        <div className='absolute text-white z-50 left-[2.5%] bottom-[75%]'>2022</div>
        <div className='absolute text-white z-50 left-[14%] bottom-[80%]'>16000 sqm</div>
        <Link to="/codesignweb/Works/MixedUse/Interiors"><div className='absolute text-white z-50 right-[8%] bottom-[78%] p-1 w-28
                        border border-white rounded-2xl hover:bg-neutral-600 hover:cursor-pointer '>
            Interiors
        </div>
        </Link>
      </div>
        <Navbar />
            
        <div className='flex w-[80%] md:w-[55%] lg:w-[50%] h-[68%] lg:h-[90%] translate-x-[12.5%] md:translate-x-[40%] lg:translate-x-[50%] translate-y-[30%] lg:translate-y-[2%] justify-center items-center object-center z-50 bg-neutral-900/40  rounded-3xl'>
          {/* <img src={Ana} alt="AnaPers" className=' max-h-full border border-white rounded-3xl '/> */} 
          
          <Carousel/>
        </div>
        </div>  
    <FooterWorks/>
    </>
  )
}

export default Works_Mix