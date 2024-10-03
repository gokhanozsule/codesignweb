import { models } from "@/constants";
import { useGLTF } from "@react-three/drei";
import React, { useRef } from "react";

export function Man(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF(models.Man);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="Low_poly_man_wearing_suit"
          castShadow
          receiveShadow
          geometry={nodes.Low_poly_man_wearing_suit.geometry}
        ></mesh>
      </group>
    </group>
  );
}
