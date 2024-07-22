import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Man(props) {
  const group = useRef()
  const basePath = import.meta.env.VITE_BASE_URL === '/codesignweb/' ? '' : import.meta.env.VITE_BASE_URL;
  const { nodes, materials } = useGLTF(`${basePath}models/Man.glb`)

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
const basePath = import.meta.env.VITE_BASE_URL === '/codesignweb/' ? '' : import.meta.env.VITE_BASE_URL;
useGLTF.preload(`${basePath}models/Man.glb`)