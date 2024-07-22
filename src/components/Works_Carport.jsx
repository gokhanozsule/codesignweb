import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import FooterWorks from './FooterWorks'
import bg from '../images/08.png'
import { Link } from 'react-router-dom'
import { Carousel07 } from './Carousel07'

const Works_Carport = () => {



  return (
    <>
    <div className='w-full h-[80vh] rounded-3xl bg-cover bg-center custom-shadow z-10 flex flex-col relative  box-border'
    style={{backgroundImage : `url(${bg})`, borderRadius: '24 px'}}
    >
      <div className="w-full h-full bg-black rounded-3xl opacity-55 absolute left-0 right-0 z-10">
        <div className='absolute text-white z-50 left-[2.5%] bottom-[80%]'>Year</div>
        <div className='absolute text-white z-50 left-[2.5%] bottom-[75%]'>2022</div>
        <div className='absolute text-white z-50 left-[14%] bottom-[80%]'>2500 sqm</div>
      </div>
        <Navbar />
            
        <div div className='flex w-[80%] md:w-[55%] lg:w-[50%] h-[68%] lg:h-[90%] translate-x-[12.5%] md:translate-x-[40%] lg:translate-x-[50%] translate-y-[30%] lg:translate-y-[2%] justify-center items-center object-center z-50 bg-neutral-900/40  rounded-3xl'>
          
          
          <Carousel07/>
        </div>
        </div>  
    <FooterWorks/>
    </>
  )
}

export default Works_Carport