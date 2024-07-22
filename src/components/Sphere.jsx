import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Sphere01(props) {
  const basePath = import.meta.env.VITE_BASE_URL === '/codesignweb/' ? '' : import.meta.env.VITE_BASE_URL;
  const { nodes, materials } = useGLTF(`${basePath}models/Sphere.glb`)
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.geo1__0.geometry}
        material={materials.Emission}
        position={[0.023, 0.007, 0]}
        rotation={[0, 0, 0.603]}
        scale={0.05}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.geo1__0001.geometry}
        material={materials.Orange}
        position={[0.023, 0.007, 0]}
        rotation={[0, 0, 0.603]}
        scale={0.05}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.geo1__0002.geometry}
        material={materials.Emission}
        position={[0.023, 0.007, 0]}
        rotation={[0, 0, 0.603]}
        scale={0.05}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.geo1__0003.geometry}
        material={materials.Blue}
        position={[0.023, 0.007, 0]}
        rotation={[0, 0, 0.603]}
        scale={0.05}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.geo1__0004.geometry}
        material={materials.Red}
        position={[0.023, 0.007, 0]}
        rotation={[0, 0, 0.603]}
        scale={0.05}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.geo1__0005.geometry}
        material={materials.Red}
        position={[0.023, 0.007, 0]}
        rotation={[0, 0, 0.603]}
        scale={0.05}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.geo1__0006.geometry}
        material={materials.Red}
        position={[0.023, 0.007, 0]}
        rotation={[0, 0, 0.603]}
        scale={0.05}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.geo1__0007.geometry}
        material={materials.Red}
        position={[0.023, 0.007, 0]}
        rotation={[0, 0, 0.603]}
        scale={0.05}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.geo1__0008.geometry}
        material={materials.Red}
        position={[0.023, 0.007, 0]}
        rotation={[0, 0, 0.603]}
        scale={0.05}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.geo1__0009.geometry}
        material={materials.Red}
        position={[0.023, 0.007, 0]}
        rotation={[0, 0, 0.603]}
        scale={0.05}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.geo1__0010.geometry}
        material={materials.Blue}
        position={[0.023, 0.007, 0]}
        rotation={[0, 0, 0.603]}
        scale={0.05}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.geo1__0011.geometry}
        material={materials.Blue}
        position={[0.023, 0.007, 0]}
        rotation={[0, 0, 0.603]}
        scale={0.05}
      />
    </group>
  )
}
const basePath = import.meta.env.VITE_BASE_URL === '/codesignweb/' ? '' : import.meta.env.VITE_BASE_URL;
useGLTF.preload(`${basePath}models/Sphere.glb`)