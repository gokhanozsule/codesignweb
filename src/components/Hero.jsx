import React from 'react'
import Navbar from './Navbar'
import ProjectCard from './ProjectCard'
import render01 from '../images/01AnaPerspektif.jpg'
import render02 from '../images/Image01.png'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, Text } from '@react-three/drei'
import { Torus01 } from './Torus01'
import bg from '../images/10a.png'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <>
    <div className='w-full h-[100vh] rounded-3xl bg-cover bg-center custom-shadow  z-10 flex flex-col relative select-none'
    style={{backgroundImage : `url(${bg})`, borderRadius: '24 px'}}
    >
      <div className="w-full h-full bg-black rounded-3xl opacity-55 absolute left-0 right-0"></div>
          <Navbar />
          <div className='w-full h-full flex flex-col sm:flex-row rounded-3xl justify-center items-center border border-white'>
            <div className='w-full sm:w-1/2 h-full flex flex-row sm:flex-col justify-center items-start mt-20 sm:mt-0 sm:items-center gap-10 rounded-3xl'>
                <div className='w-[90%] flex items-center justify-center'>
                <ProjectCard to={'/codesignweb/Works/MixedUse'} text={"MIXED USE DEVELOPMENT"} src={render01} />
                </div>
                <div className='w-[90%] flex items-center justify-center'>
                <ProjectCard to={'/codesignweb/Works/V01'} text={"PRIVATE VILLA"} src={render02}/>
                </div>

            </div>
            <div className='w-full sm:w-1/2 h-1/2 sm:h-full -mt-[75%] sm:mt-0 bg-[#404242] flex flex-col justify-between items-center text-center rounded-3xl custom-shadow'>
              <div className='w-full h-10 bg-[#504f51] rounded-3xl flex justify-end items-center text-center pr-4 border border-white text-white z-10'>
                3D Web
              </div>
              <div className='text-white z-10 mb-8 text-3xl pointer-events-none flex'>
                &harr;
              </div>
              <div className='text-white mb-0 sm:mb-28 flex'>
                For a better journey through a website, <br/>
                3D interactions are fun to have.. <br/>
                Drag the &harr; sign /
                Check Interactive Model for more...
              </div>
            </div>
            <div className='absolute h-[30%] sm:h-[65%] w-full sm:w-1/2 bottom-[14%] sm:bottom-[26%] left-0 sm:left-1/2 flex justify-center items-end rounded-3xl z-0 cursor-pointer '>
              <Canvas camera={{position:[0,0,6]}} dpr={[1.5, 2]} linear shadows>
                <OrbitControls enablePan={false} enableZoom={false} rotateSpeed={0.25}
                          maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2}
                          minAzimuthAngle={-Math.PI /3.75} maxAzimuthAngle={Math.PI /3.75}
                          />
                <ambientLight intensity={1.2}/>
                <Environment preset='warehouse'/>
                  <Torus01 position={[0,-1.9,-0.35]} scale={1.5} />
                  <Text position={[3.15,-1.2,1.05]} rotation={[0,0.85,0]} scale={0.175} color="white"  anchorX="center" anchorY="middle">ARCHITECTURE</Text>
                  <Text position={[-3,-1.35,1.05]} rotation={[0,-0.75,0]} scale={0.175} color="white"  anchorX="center" anchorY="middle">3D WEB</Text>
              </Canvas>
            </div>
          </div>
        </div>
        {/* <Footer/> */}
        </>
  )
}

export default Hero