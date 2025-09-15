"use client";

import { backgroundImages, cloudinaryUrl } from "@/constants";
import { Environment, OrbitControls, Text } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import ProjectCard from "./ProjectCard";
import { Torus01 } from "./Torus01";

// const ProjectCard: React.FC<ProjectCardProps> = ({ href, text, src }) => (
//   <Link href={href} className="relative w-full h-48 rounded-lg overflow-hidden">
//     <Image src={src} alt={text} layout="fill" objectFit="cover" />
//     <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
//       <h2 className="text-white text-xl font-bold">{text}</h2>
//     </div>
//   </Link>
// );

const Hero: React.FC = () => {
  return (
    <div
      className="w-full h-full rounded-3xl bg-cover bg-center custom-shadow z-10 flex flex-col relative"
      style={{
        backgroundImage: `url(${backgroundImages.hero})`,
        borderRadius: "24px",
      }}
    >
      <div className="w-full h-full bg-black rounded-3xl opacity-55 absolute left-0 right-0 pointer-events-none" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 h-full w-full">
        <div className="grid grid-cols-1 gap-1 h-full w-full justify-items-center">
          <ProjectCard
            slug="mixed-use"
            text="MIXED USE DEVELOPMENT"
            year="2022"
            src={`${cloudinaryUrl}/01AnaPerspektif_binjqw`}
          />

          <ProjectCard
            slug="v01"
            text="PRIVATE VILLA"
            year="2023"
            src={`${cloudinaryUrl}/Image01_a3wraq`}
          />
        </div>
        <div className="relative flex flex-col justify-between items-center text-center rounded-3xl custom-shadow">
          <div className="w-full mt-11 h-10 bg-[#504f51] rounded-3xl flex items-center justify-end pr-4 border border-white text-white">
            3D Web
          </div>
          <div className="h-[70%] sm:h-[60%] sm:bottom-[35%] w-full flex justify-center items-end z-0 cursor-grab">
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
