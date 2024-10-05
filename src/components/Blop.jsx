import * as THREE from "three";
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, MeshDistortMaterial, Shadow } from "@react-three/drei";
import Text from "./Text";
import { models } from "@/constants";

export default function Blop(props) {
  const group = useRef();
  const shadow = useRef();
  const { nodes } = useGLTF(models.Blop, true);
  useFrame(({ clock }) => {
    const t = (1 + Math.sin(clock.getElapsedTime() * 1.5)) / 2;
    group.current.position.y = t / 3;
    shadow.current.scale.y = shadow.current.scale.z = 1 + t;
    shadow.current.scale.x = (1 + t) * 1.25;
    group.current.rotation.x = group.current.rotation.z += 0.005;
    group.current.position.x = THREE.MathUtils.lerp(
      group.current.position.x,
      0.1,
      0.05
    );
    group.current.position.z = THREE.MathUtils.lerp(
      group.current.position.z,
      0.1,
      0.03
    );
  });
  return (
    <group {...props} dispose={null}>
      <group ref={group}>
        <mesh geometry={nodes.geo.geometry} castShadow receiveShadow>
          <MeshDistortMaterial
            color="#516754"
            roughness={1}
            metalness={0.5}
            factor={15}
            speed={5}
          />
        </mesh>
        <mesh geometry={nodes.geo.geometry}>
          <meshBasicMaterial wireframe color="#b4d100" />
        </mesh>
      </group>
      <group position={[1.25, -0.5, 0]} scale={0.5}>
        <Text
          position={[-2.5, 4.5, -1]}
          fontsize={0.03}
          lineHeight={0.5}
          letterSpacing={-0.05}
        >
          Animation
          <meshBasicMaterial color={"#b4d100"} side={THREE.DoubleSide} />
        </Text>
      </group>
      <Shadow
        ref={shadow}
        opacity={0.3}
        rotation-x={-Math.PI / 2}
        position={[0, -1.51, 0]}
      />
    </group>
  );
}
