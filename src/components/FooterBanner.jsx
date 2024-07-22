import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import { Cube01 } from './Cube'

const FooterBanner = () => {
  return (
    <div className='w-screen h-[24vh] custom-shadow flex flex-col items-center justify-center bg-[#212324] '>
        <div className='h-full w-full flex items-center justify-center gap-[3%] md:gap-[33%] rounded-3xl bg-[#e5e4e3]'>
        <div className='flex flex-col h-full w-full justify-center items-center text-center'>
            <div className='h-20 w-full flex flex-col items-center justify-center text-2xl border border-black rounded-3xl'>
                OFFERED SERVICES
            </div>
            <div className='h-full w-full flex items-center justify-center pl-32 pr-32 pb-4'>
                <div className='w-full h-full flex justify-center items-center text-center bg-slate-400'>
                Architectural Project
                </div>
                <div className='w-full h-full flex justify-center items-center text-center'>
                Interior Design
                </div>
                <div className='w-full h-[80%] flex justify-center cursor-pointer items-center text-center'>
                <Canvas camera={{position:[0,1.5,4.5]}} dpr={[1.5, 2]} linear shadows>
                    <OrbitControls enablePan={false} enableZoom={false} 
                            maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2}
                            />
                    <ambientLight intensity={1.2}/>
                    <Environment preset='warehouse'/>
                    <Cube01 position={[0,-0.6,0]} scale = {8.5} />
                </Canvas>
                </div>
                <div className='w-full h-full flex justify-center items-center text-center'>
                Visualisation
                </div>
                <div className='w-full h-[80%] flex justify-center cursor-pointer items-center text-center'>
                <Canvas camera={{position:[0,1.5,4.5]}} dpr={[1.5, 2]} linear shadows>
                    <OrbitControls enablePan={false} enableZoom={false} 
                            maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2}
                            />
                    <ambientLight intensity={1.2}/>
                    <Environment preset='warehouse'/>
                    <Cube01 position={[0,-0.6,0]} scale = {8.5} />
                </Canvas>
                </div>
                <div className='w-full h-full flex justify-center items-center text-center'>
                3D Web Application
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default FooterBanner