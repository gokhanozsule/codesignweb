import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function BuckleBall01(props) {
  const { nodes, materials } = useGLTF('/models/01Buckminister.glb')

    nodes.Sphere.material.wireframe = true;

    return (
        <group {...props} dispose={null}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sphere.geometry}
            material={nodes.Sphere.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube.geometry}
            material={materials['Material.003']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube003.geometry}
            material={materials['Material.004']}
            scale={1.415}
          />
        </group>
      )
}

useGLTF.preload('/models/01Buckminister.glb')