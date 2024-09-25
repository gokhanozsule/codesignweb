import {
  AccumulativeShadows,
  BakeShadows,
  Environment,
  OrbitControls,
  Sky,
  SoftShadows,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useState, useEffect, Suspense } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { Villa01_Partial } from "./Villa01_Partial";
import { VSMShadowMap } from "three";

export const Villa01_3D = () => {
  return (
    <div className="w-full h-full rounded-3xl bg-cover bg-center custom-shadow z-10 flex flex-col border border-white relative">
      <div className="absolute w-[98%] h-[87%] translate-y-16 sm:translate-y-12 sm:translate-x-6 rounded-3xl">
        <Canvas
          camera={{ position: [1, -4.5, -3.75], rotateOnAxis: (0, 0, 1, 25) }}
          dpr={[1.5, 2]}
          linear
          shadows
          gl={VSMShadowMap}
        >
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            rotateSpeed={0.7}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2.5}
            minAzimuthAngle={Math.PI / 4}
            maxAzimuthAngle={-Math.PI}
          />

          <ambientLight intensity={2.5} />
          <spotLight
            scale={100}
            intensity={75000}
            position={[-20, 20, -45]}
            castShadow
            shadow-mapSize={[2048, 2048]}
            shadow-bias={-0.0001}
          />
          {/* <directionalLight castShadow position={[30,20,45]} shadow-mapSize= {[2048,2048]} /> */}
          <Environment preset="forest" environmentIntensity={1.5} />
          <Sky sunPosition={[30, 20, 45]} />

          <Suspense fallback={null}>
            <mesh castShadow>
              <Villa01_Partial position={[0, -1.9, -0.35]} scale={1.5} />
            </mesh>
          </Suspense>
        </Canvas>
      </div>
      <div className="absolute bottom-0 w-full h-10 border border-white bg-[#191a1a] flex justify-center items-center rounded-3xl z-30 custom-shadow">
        <Link to="/V01">
          <div
            className="flex p-1 w-28 justify-center text-white
                                border border-white rounded-2xl hover:bg-[#525253] hover:cursor-pointer "
          >
            Back
          </div>
        </Link>
      </div>
      <div className="absolute top-52 sm:top-12 left-1/4 sm:left-1/2 sm:-translate-x-1/2 pointer-events-none">
        Navigate to see the kitchen
      </div>
      <div className="absolute top-6 sm:top-10 sm:left-[13.75%] bg-gradient-to-b from-[#393a39] to-[#191a1a] w-full sm:w-[30%] sm:h-[92%] px-8 sm:-translate-x-[45%] text-white pointer-events-none flex justify-center items-center">
        Welcome to the world of 3D, <br />
        imagine yourself walking around <br />
        the corridor and have a better experience about the space.
        <br />
        In a 3D Web application, everything can be interacted if wanted to..{" "}
        <br />
        Just ask for it and it will be done.
      </div>
    </div>
  );
};
