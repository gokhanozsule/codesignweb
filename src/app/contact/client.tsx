"use client";

import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Contact3D } from "@/components/Contact3D";
import { backgroundImages } from "@/constants";

export default function ContactPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="w-full h-full rounded-3xl bg-cover bg-center custom-shadow z-10 flex flex-col relative"
      style={{ backgroundImage: `url(${backgroundImages.contact})` }}
    >
      <div className="w-full h-full bg-black opacity-[0.97] absolute left-0 right-0"></div>
      <div className="flex flex-row h-full w-full justify-between pr-24 pl-24">
        <div className="absolute h-full w-full bottom-[5%] left-0 flex justify-center items-end rounded-3xl z-10 cursor-pointer">
          <Canvas
            camera={{ position: [3, 1, 3.5], fov: 60 }}
            dpr={[1.5, 2]}
            linear
            shadows
          >
            <OrbitControls
              enablePan={false}
              enableZoom={false}
              maxPolarAngle={Math.PI / 2.5}
              minPolarAngle={Math.PI / 3}
              minAzimuthAngle={-Math.PI / 24}
              maxAzimuthAngle={Math.PI / 2}
            />
            <ambientLight position={[0, 3, 0]} intensity={0.75} />
            <spotLight
              scale={1000}
              intensity={8500}
              position={[12, 20, -15]}
              castShadow
              shadow-mapSize={[2048, 2048]}
              shadow-bias={-0.0001}
            />
            <Environment preset="warehouse" environmentIntensity={1.25} />
            <Contact3D
              position={[0, -0.75, 0]}
              scale={isMobile ? 0.65 : 1.25}
            />
          </Canvas>
        </div>
      </div>
    </div>
  );
}