import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Man(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/models/Man.glb')

    return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="Low_poly_man_wearing_suit"
          castShadow
          receiveShadow
          geometry={nodes.Low_poly_man_wearing_suit.geometry}
        > 
        </mesh>
      </group>
    </group>
  )
}

useGLTF.preload('/models/Man.glb')