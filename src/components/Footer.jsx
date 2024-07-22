import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import { Cube01 } from './Cube'
import { Sphere01 } from './Sphere'

const Footer = () => {
  return (
    <div className='w-screen h-[18vh] mb-10 custom-shadow flex items-center justify-center bg-[#212324] '>
        <div className='h-full w-[80vw] flex items-center justify-center gap-[3%] md:gap-[33%] md:pr-12'>
        <div className='h-[80%] w-1/8 flex flex-col mb-8 text-white cursor-pointer relative'>
        <Canvas camera={{position:[0,1.5,4.5]}} dpr={[1.5, 2]} linear shadows>
            <OrbitControls enablePan={false} enableZoom={false} 
                        maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2}
                        />
            <ambientLight intensity={1.2}/>
            <Environment preset='warehouse'/>
                <Cube01 position={[0,-0.6,0]} scale = {8.5} />
        </Canvas>
                <div className='absolute left-[31.75%] h-28 w-28 bottom-[-4%] pointer-events-none'>
                    &harr;
                </div>
            <div>
                ARCHITECTURE
            </div>
        </div>
        
        <div className='h-[80%] w-1/8 flex flex-col mb-8 text-white cursor-pointer relative'>
        <Canvas camera={{position:[0,1.5,4.5]}} dpr={[1.5, 2]} linear shadows>
            <OrbitControls enablePan={false} enableZoom={false} 
                        maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2}
                        />
            <ambientLight intensity={1.2}/>
            <Environment preset='warehouse'/>
                <Sphere01 position={[0,-0.8,0]} scale = {0.45} />
        </Canvas>
                <div className='absolute left-[31.25%] h-28 w-28 bottom-[-4%] pointer-events-none'>
                    &harr;
                </div>
            <div>
            3D WEB
            </div>
        </div>
        </div>
    </div>
  )
}

export default Footer