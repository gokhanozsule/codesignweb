import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function BuckleBall03(props) {
  const { nodes } = useGLTF('/models/03Buckminister.glb')

  /* nodes.Object_2.material.wireframe = true; */


  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.1}
      >
        <meshBasicMaterial color={"white"}/>
      </mesh>
    </group>
  )
}

useGLTF.preload('/models/03Buckminister.glb')