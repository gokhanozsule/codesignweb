import React, { useRef, useState } from 'react'
import { Html, Image, Outlines, Text, useGLTF } from '@react-three/drei'
import { DoubleSide } from 'three'
import { useFrame } from '@react-three/fiber';
import Blop from './Blop';
import bg from '../images/07.png'
import logo from "../assets/Codesign_Logo_Inv.png"

export function Contact3D(props) {
  const basePath = import.meta.env.VITE_BASE_URL === '/codesignweb/' ? '' : import.meta.env.VITE_BASE_URL;
  const { nodes, materials } = useGLTF(`${basePath}models/Contact3D.glb`)
  const colorHex = ["#212226","#54532D","#5E4035", "#242F45"];
  const group = useRef()

  const [hovered, setHovered] = useState(false);
  const [hoveredIco, setHoveredIco] = useState(false);
  const [hoveredCo, setHoveredCo] = useState(false);
  const [hoveredGreen, setHoveredGreen] = useState(false);
  const [hoveredRed, setHoveredRed] = useState(false);
  const [hoveredBlue, setHoveredBlue] = useState(false);
  const [hoveredGray, setHoveredGray] = useState(false);

  useFrame((_, delta) =>{
    group.current.children[2].children[0].rotation.y += delta;
    group.current.children[2].children[1].rotation.y += delta;
  })

  const [contactOpen, setContactOpen] = useState(false);
  const handleContact = () => {
    setContactOpen(!contactOpen);
  }

  const [hexNum, setHexNum] = useState(0);
  const handleColorGreen = () => {
    setHexNum(1);
  }
  const handleColorRed = () => {
    setHexNum(2);
  }
  const handleColorBlue = () => {
    setHexNum(3);
  }
  const handleColorGray = () => {
    setHexNum(0);
  }

  return (
    <>
    <group ref={group} {...props} dispose={null}>
      <group scale={2}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Platform_1.geometry}
          material={materials['Material.002']}
        >
            <meshPhysicalMaterial color={colorHex[hexNum]}/>
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Platform_2.geometry}
          material={materials['Material.008']}
        />
      </group>
      <group scale={2}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Platform001_1.geometry}
          material={materials['Material.002']}
        >
            <meshPhysicalMaterial color={colorHex[hexNum]}/>
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Platform001_2.geometry}
          material={materials['Material.001']}
        />
      </group>
      <group rotation={[0, 0.441, 0]} scale={0.707} onClick={() => setHoveredIco(true)} 
      onPointerEnter={() => setHoveredCo(true)} onPointerLeave={() => setHoveredCo(false)}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere002.geometry}
          material={materials['Material.008']}
          scale={hoveredCo ? 1.1 : 1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere002_1.geometry}
          material={materials['Material.003']}
          scale={hoveredCo ? 1.1 : 1}
        >
            <meshPhysicalMaterial transparent={true} color={"orange"} opacity={0.3} roughness={0.15} metalness={1}/>
        </mesh>
        { hoveredIco && 
        <Html as='div' fullscreen className='flex flex-col justify-end mt-[-560px] items-center rounded-3xl cursor-default select-none' >
          <div className='h-[10%] rounded-full z-20 border mb-16 bg-cover bg-center w-[95%] flex flex-col  relative '
              style={{backgroundImage : `url(${bg})`}}
          >
            <div className="w-full h-full z-20 bg-black opacity-75 absolute rounded-full left-0 right-0"></div>
            <div className='flex h-full w-full flex-col text-white z-30'>
              <button className=' border rounded-full w-6 h-6 flex justify-center items-center ml-4 mt-4 hover:bg-slate-400 text-white z-30'
                      onClick={() => setHoveredIco(false)}
              >
                X
              </button>
              <div className='text-base lg:text-xl -translate-y-10'>
                Welcome to a new 3D aproach where the aim is :
              </div>
              <div className='mt-2 text-base lg:text-xl -translate-y-12'>
                Coding for Design, Designing for everyone
              </div>
            </div>
          </div>
        </Html>
        }
      </group>
      
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Platform002.geometry}
        material={materials['Material.002']}
        scale={2}
      >
        <meshPhysicalMaterial color={colorHex[hexNum]}/>
        </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Platform003.geometry}
        material={materials['Material.002']}
        scale={2}
      >
        <meshPhysicalMaterial color={colorHex[hexNum]}/>
        </mesh>
      <group scale={2}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Platform004_1.geometry}
          material={materials['Material.002']}
        >
        <meshPhysicalMaterial color={colorHex[hexNum]}/>
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Platform004_2.geometry}
          material={materials['Material.003']}
        >
            <meshPhysicalMaterial transparent={true} opacity={0.15} roughness={0.15} metalness={1}/>
        </mesh>
      </group>
      <group visible={false}>
        <mesh 
          castShadow
          receiveShadow
          geometry={nodes.Dodecahedron.geometry}
          material={materials['Material.008']}
        > 
          <meshPhysicalMaterial color={"red"} emissive={"orange"} emissiveIntensity={3} shadowSide={DoubleSide}/>
        </mesh>
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials['Material.004']}
        scale={[7, 7, 18.08]}
        visible={false}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube004.geometry}
        material={materials['Material.006']}
        scale={0.284}
        onClick={handleContact}
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
      >
        <meshPhysicalMaterial roughness={0.35} metalness={1} />
        {hovered && <Outlines thickness={0.15} color="red" />}
      </mesh>
      {contactOpen && <Html as='div' fullscreen className='bg-black flex flex-col justify-center items-center rounded-3xl cursor-default' >
        <div className='h-[80%] rounded-3xl border mb-16 bg-cover bg-center w-[75%] flex flex-col relative select-none'
             style={{backgroundImage : `url(${bg})`}}
        >
          <div className="w-full h-full bg-black opacity-70 absolute rounded-3xl left-0 right-0 "></div>
          <button className=' border rounded-full w-6 h-6 flex justify-center items-center ml-4 mt-4 hover:bg-slate-400 text-white z-30'
                  onClick={() => {setContactOpen(!contactOpen)}}
          >
            X
          </button>
          <div className='flex h-full w-full flex-col text-white z-30'>
            <div className='mt-20 text-xl'>
              Contact below for an exciting project idea
            </div>
            <div className='flex justify-center w-full mt-4 '>
              Kadıköy / Istanbul 
            </div>
            <div className='flex justify-center w-full mt-20 '>
              +90 534 887 1868
            </div>
            <a className="text-white hover:text-orange-400" href="mailto:codesign@gmail.com">codesign.gokhanozsule@gmail.com</a>
          </div>
        </div>
      </Html>}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tetrahedron.geometry}
        material={materials['Material.005']}
        rotation={[0, -0.497, 0]}
        scale={0.353}
      >
      <meshPhysicalMaterial roughness={0.35} metalness={1} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={materials['Material.008']}
      />
      <group visible={true}>
        <group scale={0.1} visible={true} onClick={handleColorGreen} onPointerEnter={() => setHoveredGreen(true)} onPointerLeave={() => setHoveredGreen(false)}>
            <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder001_1.geometry}
            material={materials['Material.011']}
            />
            {
            (hoveredGreen) &&
            <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder001_1.geometry}
            material={materials['Material.011']}
            >
            <Outlines thickness={0.25} color="red" />
            </mesh>
            }
            <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder001_2.geometry}
            material={materials['Material.013']}
            />
        </group>
        <group scale={0.1} visible={true} onClick={handleColorRed} onPointerEnter={() => setHoveredRed(true)} onPointerLeave={() => setHoveredRed(false)}>
            <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder002_1.geometry}
            material={materials['Material.010']}
            />
            {
            (hoveredRed) &&
            <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder002_1.geometry}
            material={materials['Material.010']}
            >
            <Outlines thickness={0.25} color="red" />
            </mesh>
            }
            <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder002_2.geometry}
            material={materials['Material.014']}
            />
        </group>
        <group scale={0.1} visible={true} onClick={handleColorBlue} onPointerEnter={() => setHoveredBlue(true)} onPointerLeave={() => setHoveredBlue(false)}>
            <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder003_1.geometry}
            material={materials['Material.009']}
            />
            {
            (hoveredBlue) &&
            <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder003_1.geometry}
            material={materials['Material.009']}
            >
            <Outlines thickness={0.25} color="red" />
            </mesh>
            }
            <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder003_2.geometry}
            material={materials['Material.015']}
            />
            {
            (hexNum === 1 || hexNum === 2 || hexNum === 0) &&
            <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder003_2.geometry}
            material={materials['Material.015']}
            >
            <Outlines thickness={0.25} color="red" />
            </mesh>
            }
        </group>
        <group visible={true} onClick={handleColorGray} onPointerEnter={() => setHoveredGray(true)} onPointerLeave={() => setHoveredGray(false)}>
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_1.geometry}
            material={materials['Material.012']}
        />
        {
        (hoveredGray) && 
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_1.geometry}
            material={materials['Material.012']}
        >
            <Outlines thickness={0.025} color="red" />
        </mesh>
        }
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_2.geometry}
            material={materials['Material.012']}
        />
        {
        (hexNum === 1 || hexNum === 2 || hexNum === 3) && 
        <mesh scale={1}
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_2.geometry}
            material={materials['Material.012']}
        >
            <Outlines thickness={0.025} color="red" />
        </mesh>
        }
        </group>
      </group>
    </group>
    <Blop position={[0.22,0.4,-2.1]} scale={0.35}/>
    <Text position={[-1.4,0.8,-2.32]} scale={0.3}>
        3D Web
    </Text>
    <Text position={[-2.6,1.4,1.9]} scale={0.12} rotation={[0, Math.PI / 2, 0]}>
        Architecture
    </Text>
    <Text position={[-2.6,1.15,1.9]} scale={0.12} rotation={[0, Math.PI / 2, 0]}>
        BIM Modeling
    </Text>
    <Text position={[-2.5,1.4,0.65]} scale={0.12} rotation={[0, Math.PI / 2, 0]}>
        Interior Design
    </Text>
    <Text position={[-2.3,0.9,-0.8]} scale={0.2} rotation={[0, Math.PI / 2, 0]}>
        Visualisation
    </Text>
    <Image url={logo} scale={.5} color="white" position={[2,0.9,-2.4]} side={DoubleSide}/>
    <Text position={[2.35,-0.44,0.1]} scale={0.15} rotation={[ -Math.PI / 2,0,  Math.PI / 2]}>
        Change UI colors
    </Text>
    <Text position={[1.7,-0.08,-1.37]} scale={0.15} rotation={[ -Math.PI / 2,0,  Math.PI / 2]} color={"black"}>
        Contact
    </Text>
    </>
  )
}
const basePath = import.meta.env.VITE_BASE_URL === '/codesignweb/' ? '' : import.meta.env.VITE_BASE_URL;
useGLTF.preload(`${basePath}models/Contact3D.glb`)