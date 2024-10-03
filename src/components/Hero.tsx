"use client";

import React from "react";
import { Environment, OrbitControls, Text } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Link from "next/link";
import Image from "next/image";
import { Torus01 } from "./Torus01";
import { cloudinaryUrl, backgroundImages } from "@/constants";

type ProjectCardProps = {
  href: string;
  text: string;
  src: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ href, text, src }) => (
  <Link href={href} className="w-full">
    <div className="relative w-full h-48 rounded-lg overflow-hidden">
      <Image src={src} alt={text} layout="fill" objectFit="cover" />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <h2 className="text-white text-xl font-bold">{text}</h2>
      </div>
    </div>
  </Link>
);

const Hero: React.FC = () => {
  return (
    <div
      className="w-full h-full rounded-3xl bg-cover bg-center custom-shadow z-10 flex flex-col relative select-none overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImages.hero})`,
        borderRadius: "24px",
      }}
    >
      <div className="w-full h-full bg-black rounded-3xl opacity-55 absolute left-0 right-0"></div>
      <div className="h-full flex flex-col gap-2 sm:gap-0 sm:flex-row rounded-3xl justify-center items-center border border-white">
        <div className="w-full sm:w-1/2 flex flex-col justify-center items-center gap-4 my-auto rounded-3xl">
          <div className="w-[90%] flex items-center justify-center">
            <ProjectCard
              href="/works/mixed-use"
              text="MIXED USE DEVELOPMENT"
              src={`${cloudinaryUrl}/01AnaPerspektif_binjqw`}
            />
          </div>
          <div className="w-[90%] flex items-center justify-center">
            <ProjectCard
              href="/works/v01"
              text="PRIVATE VILLA"
              src={`${cloudinaryUrl}/Image01_a3wraq`}
            />
          </div>
        </div>
        <div className="relative w-full sm:w-1/2 min-h-1/2 sm:h-full bg-none sm:mt-0 flex flex-col justify-between items-center text-center rounded-3xl custom-shadow">
          <div className="w-full h-10 bg-[#504f51] rounded-3xl flex justify-end items-center text-center pr-4 border border-white text-white z-10">
            3D Web
          </div>
          <div className="h-[65%] sm:h-[70%] sm:bottom-[35%] w-full flex justify-center items-end z-0 cursor-grab">
            <Canvas
              camera={{ position: [0, 0, 6] }}
              dpr={[1.5, 2]}
              linear
              shadows
            >
              <OrbitControls
                enablePan={false}
                enableZoom={false}
                rotateSpeed={0.25}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 2}
                minAzimuthAngle={-Math.PI / 3.75}
                maxAzimuthAngle={Math.PI / 3.75}
              />
              <ambientLight intensity={1.2} />
              <Environment preset="warehouse" />
              <Torus01 position={[0, -1.9, -0.35]} scale={1.5} />
              <Text
                position={[3.15, -1.2, 1.05]}
                rotation={[0, 0.85, 0]}
                scale={0.175}
                color="white"
                anchorX="center"
                anchorY="middle"
              >
                ARCHITECTURE
              </Text>
              <Text
                position={[-3, -1.35, 1.05]}
                rotation={[0, -0.75, 0]}
                scale={0.175}
                color="white"
                anchorX="center"
                anchorY="middle"
              >
                3D WEB
              </Text>
            </Canvas>
          </div>
          <div className="text-white z-10 mb-8 text-3xl pointer-events-none flex absolute top-[37.5%]">
            &harr;
          </div>
          <div className="text-white text-sm sm:text-[16px] mt-2 mb-4 sm:mb-24 flex flex-col items-center">
            <p>For a better journey through a website,</p>
            <p>3D interactions are fun to have..</p>
            <p>Drag the &harr; sign / Check Interactive Model for more...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
