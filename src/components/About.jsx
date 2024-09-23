import React from "react";
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Man } from "./Man";

const About = ({ cloudinaryUrl }) => {
  const bg = `${cloudinaryUrl}/06_qcvmdm`;
  const AboutImages = {
    Joali: "jb-arrival-jetty_cm8ri2",
    Emaar: "emaar-square-mall_cihdim",
    bg: "06_qcvmdm",
  };
  return (
    <>
      <div
        className="w-full h-full rounded-3xl bg-cover bg-center custom-shadow mb-4 z-10 flex flex-col relative select-none"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="w-full h-full bg-black opacity-45 absolute left-0 right-0"></div>
        <div className="flex flex-row h-full w-full justify-between px-4 sm:pr-24 sm:pl-24 relative">
          <div className="flex flex-col h-full justify-start items-center text-start w-full text-white">
            <div className="flex w-full text-xs pt-12 ">GOKHAN OZSULE</div>
            <div className="flex w-full text-2xl ">CoDeSiGn</div>
            <p className="flex w-full text-sm pt-4">
              Graduated from METU Architecture Faculty
            </p>
            <p className="flex w-full text-sm">
              Continued Design Academy Eindhoven
            </p>
            <p className="flex w-full text-sm pt-4">
              Has been working as a professional Architect for 15+ years
            </p>
            <p className="flex w-full text-sm pt-4">Most recent roles are;</p>
            <div className="flex w-full text-sm text-red-400">
              Design and Construction Chief for
            </div>
            <a
              href="https://www.joali.com/joali-being/"
              target="_blank"
              className="flex w-full text-sm text-red-400"
            >
              Joali Being Maldives / 4 years
            </a>
            <div className="flex w-full text-sm">
              <img
                src={`${cloudinaryUrl}/${AboutImages.Joali}`}
                alt="JoaliBeing_aerial"
                className="w-56 flex "
              />
            </div>
            <div className="flex w-full text-sm pt-1 text-red-400">
              Design Lead and Construction Consultant for
            </div>
            <a
              href="https://www.emaarsquaremall.com/en/"
              target="_blank"
              className="flex w-full text-sm text-red-400"
            >
              EmaarSquare Istanbul / 6 years
            </a>
            <div className="flex w-full text-sm pt-1">
              <img
                src={`${cloudinaryUrl}/${AboutImages.Emaar}`}
                alt="Emaar_aerial"
                className="w-56 flex "
              />
            </div>
          </div>
          <div className="flex flex-col h-full justify-center items-center text-center w-full text-white">
            <div className="flex flex-col justify-start items-end h-full w-full text-2xl pt-24">
              <div>Why 3D Web</div>
              <p className="flex w-full items-end text-end justify-end text-sm pt-8">
                Every idea starts with a model
              </p>
              <p className="flex w-full items-end text-end justify-end text-sm pt-1">
                3D AR/VR experiences are gradually developing
              </p>
              <p className="flex w-full items-end text-end justify-end text-sm pt-1">
                Designing a web flow in 3D is exciting
              </p>
              <p className="flex w-full items-end text-end justify-end text-sm pt-1">
                3D web ui offers more creative interactions
              </p>
              <p className="flex w-full items-end text-end justify-end text-base pt-8">
                Why not to build 3D websites together?
              </p>
              <p className="flex w-full items-end text-end justify-end text-sm pt-8">
                Eagerly growing <br/>understanding of :<br/> React
              </p>
              <p className="flex w-full items-end text-end justify-end text-sm pt-1">
                React Three Fiber
              </p>
              <p className="flex w-full items-end text-end justify-end text-sm pt-1">
                Javascript
              </p>
              <p className="flex w-full items-end text-end justify-end text-sm pt-1">
                THREE.js
              </p>
              <p className="flex w-full items-end text-end justify-end text-sm pt-1">
                Css
              </p>
              <p className="flex w-full items-end text-end justify-end text-sm pt-1">
                Tailwind
              </p>
              <p className="flex w-full items-end text-end justify-end text-sm pt-1">
                AI
              </p>
              <p className="flex w-full items-end text-end justify-end text-sm pt-1">
                And a curious mind <br/>to discover more...
              </p>
            </div>
          </div>
          <div className="absolute h-[85%] w-1/2 bottom-[5%] left-[22.5%] hidden sm:flex justify-center items-end rounded-3xl z-10 cursor-pointer">
            <Canvas
              camera={{ position: [0, 1, 6] }}
              dpr={[1.5, 2]}
              linear
              shadows
            >
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
        </div>
      </div>
    </>
  );
};

export default About;
