"use client";

import React from "react";
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Man } from "@/components/Man";

export default function AboutClientComponent() {
  return (
    <div className="absolute h-[85%] w-1/2 bottom-[5%] left-[22.5%] hidden sm:flex justify-center items-end rounded-3xl z-10 cursor-pointer">
      <Canvas camera={{ position: [0, 1, 6] }} dpr={[1.5, 2]} linear shadows>
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          minAzimuthAngle={-Math.PI / 8}
          maxAzimuthAngle={Math.PI / 3}
        />
        <ambientLight intensity={1.2} />
        <Environment preset="warehouse" />
        <Man position={[0, -3, -1.2]} scale={4.5} />
      </Canvas>
    </div>
  );
}
