import React, { useState } from 'react'
import Navbar from './Navbar'
import FooterWorks from './FooterWorks'
import bg from '../images/08.png'
import render01 from '../images/01AnaPerspektif.jpg'
import render02 from '../images/Image01.png'
import render03 from '../images/05.jpg'
import render04 from '../images/03.jpg'
import ProjectCard from './ProjectCard'
import { Link } from 'react-router-dom'

const Works = () => {


  return (
    <>
    <div className='w-full h-full rounded-3xl bg-cover bg-center custom-shadow z-10 flex flex-col relative'
    style={{backgroundImage : `url(${bg})`, borderRadius: '24 px'}}
    >
      <div className="w-full h-full bg-black rounded-3xl opacity-55 absolute left-0 right-0"></div>
        <Navbar />
        <div className='flex flex-col h-full w-full justify-between '>
          <div className='w-full flex h-full'>
            <div className='w-1/2 h-1/2 '>
              <div className='flex flex-col h-full justify-center items-center text-center w-full border rounded-3xl border-white'>
                <ProjectCard to={'/Works/MixedUse'} text={"MIXED USE DEVELOPMENT"} src={render01} />
                <div className='text-white'>
                2022 
                </div>
              </div>
              <div className='flex flex-col h-full justify-center items-center text-center w-full border rounded-3xl border-white'>
              <ProjectCard to={'/Works/V01'} text={"PRIVATE VILLA"} src={render02}/>
                <div className='text-white'>
                  2024
                </div>
              </div>
            </div>
            <div className='w-1/2 h-1/2 '>
              <div className='flex flex-col h-full justify-center items-center text-center w-full border rounded-3xl border-white'>
                <ProjectCard to={'/Works/V02'} text={"VILLA 02"} src={render03} />
                <div className='text-white'>
                2023
                </div>
              </div>
              <div className='flex flex-col h-full justify-center items-center text-center w-full border rounded-3xl border-white'>
              <ProjectCard to={'/Works/Carport'} text={"CARPORT"} src={render04}/>
                <div className='text-white'>
                2023
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    {/* <FooterWorks/> */}
    </>
  )
}

export default Works