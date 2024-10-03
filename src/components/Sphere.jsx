import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { models } from "@/constants";

export function Sphere01(props) {
  const { nodes, materials } = useGLTF(models.Sphere);
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
  );
}
