"use client";

import Hero3D from "@/components/Hero3D";
import logo from "@/images/Codesign_Logo_Inv 1.svg";
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect, useState } from "react";

export default function Welcome() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // console.log(isMobile);
  return (
    <>
      <div className="w-full h-full rounded-3xl bg-cover bg-center custom-shadow z-10 flex flex-col relative">
        <div className="w-full h-full opacity-85 absolute left-0 right-0"></div>

        <div
          className="h-full w-full bottom-[3.55%] flex justify-center items-end 
          rounded-3xl z-10 border border-white"
        >
          <Canvas
            camera={{
              position: /* isMobile ? [4, 2, 1] :  */ [11, 2, 9],
              fov: 50,
            }}
            dpr={[1.25, 1.5]}
            linear
            shadows
          >
            <OrbitControls
              enablePan={false}
              enableZoom={false}
              maxPolarAngle={Math.PI / 2.15}
              minPolarAngle={Math.PI / 2.75}
              minAzimuthAngle={-Math.PI / 360}
              maxAzimuthAngle={Math.PI / 2}
              rotateSpeed={0.65}
            />
            <ambientLight position={[0, 3, 0]} intensity={0.5} />
            <hemisphereLight args={["#fff", "#333", 0.5]} />
            <spotLight
              scale={100}
              color={"beige"}
              intensity={3000}
              position={[20, 7.5, -20]}
              castShadow
              shadow-mapSize={[2048, 2048]}
              shadow-bias={-0.0001}
            />
            <directionalLight
              scale={1}
              color={"beige"}
              intensity={7}
              position={[30, 30, -35]}
              castShadow
              shadow-mapSize={[2048, 2048]}
              shadow-bias={-0.0001}
            />
            <rectAreaLight
              args={["orange", 3, 15, 2]}
              position={[5, 2.5, 1.75]}
            />
            <rectAreaLight
              args={["orange", 5500, 1, 1]}
              position={[-15, 0, 1]}
            />
            <rectAreaLight
              args={["orange", 150, 2, 0.2]}
              position={[-1, 3, 3.65]}
            />
            <pointLight
              position={[0, 0.15, 0]}
              scale={5}
              color={"orange"}
              intensity={3}
            />
            <pointLight
              position={[0.75, -0.25, 4.1]}
              scale={5}
              color={"orange"}
              intensity={2.5}
            />
            <pointLight
              position={[0.1, -0.25, 4.1]}
              scale={5}
              color={"orange"}
              intensity={5}
            />
            <Environment preset="warehouse" environmentIntensity={0.5} />
            <Hero3D
              position={isMobile ? [0, 0, 1] : [0, -1.5, 1]}
              scale={isMobile ? 0.75 : 1.25}
            />
          </Canvas>
        </div>
        <div className="absolute h-full w-full bg-black z-40 flex items-center justify-center landing pointer-events-none">
          <img src={logo.src} className="loading" />
        </div>
      </div>
    </>
  );
}
