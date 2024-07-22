import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Cube01(props) {

  const modelPath = import.meta.env.VITE_BASE_URL + 'models/Cube.glb';
  const { nodes, materials } = useGLTF(modelPath) 
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_3.geometry}
        material={materials.Chrome}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.001}
      />
    </group>
  )
}

useGLTF.preload(import.meta.env.VITE_BASE_URL + 'models/Cube.glb')