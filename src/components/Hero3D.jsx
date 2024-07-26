import {
  Environment,
  Html,
  Image,
  OrbitControls,
  useGLTF,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { DoubleSide } from "three";
import logo from "../assets/images/Codesign_Logo_Inv 1.svg";
import { Man } from "./Man";
import ProjectCard from "./ProjectCard";

export function Hero3D({ cloudinaryUrl, ...props}) {

  const bg = `${cloudinaryUrl}/08_ujpych`;
  const bg01 = `${cloudinaryUrl}/06_qcvmdm`;
  const render01 = `${cloudinaryUrl}/01AnaPerspektif_binjqw`;
  const render02 = `${cloudinaryUrl}/Image01_a3wraq`;
  const render03 = `${cloudinaryUrl}/05_gtdpby`;
  const render04 = `${cloudinaryUrl}/03_nkgusl`;
  const AboutImages = {
    Joali: "jb-arrival-jetty_cm8ri2",
    Emaar: "emaar-square-mall_cihdim",
    bg01: "06_qcvmdm",
  };

  const group = useRef();

  const emmissiveIntensity = 5;
  const emmissiveColor = "orange";

  const [contact, setContact] = useState(false);
  const [hovered, setHovered] = useState(false);

  const [hoveredAbout, setHoveredAbout] = useState(false);
  const [about, setAbout] = useState(false);

  const [hoveredWorks, setHoveredWorks] = useState(false);
  const [works, setWorks] = useState(false);

  useEffect(() => {
    document.body.style.cursor =
      hovered || hoveredAbout || hoveredWorks ? "pointer" : "auto";
  }, [hovered, hoveredAbout, hoveredWorks]);

  useFrame((_, delta) => {
    group.current.children[24].children[0].rotation.y += delta;
    group.current.children[24].children[1].rotation.y += delta;
    group.current.children[26].children[0].rotation.y += delta;
    group.current.children[26].children[1].rotation.y += delta;
    group.current.children[27].children[0].rotation.y += delta;
    group.current.children[27].children[1].rotation.y += delta;
  });

  const { nodes, materials } = useMemo(() => useGLTF(`/models/Hero3D.glb`));
  return (
    <>
      <group ref={group} {...props} dispose={null}>
        {/* model zemin */}
        <group position={[1, 0.025, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane_1.geometry}
            material={materials.LightGray}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane_2.geometry}
            material={materials["emmission.003"]}
          >
            <meshPhysicalMaterial
              color={emmissiveColor}
              emissive={emmissiveColor}
              emissiveIntensity={emmissiveIntensity}
            />
          </mesh>
        </group>

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.StageBackground.geometry}
          material={materials["GrayWall.001"]}
          scale={7}
          visible={false}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={materials["Material.002"]}
          position={[0, 2.966, 2.19]}
          scale={[2.281, 1.161, 0.775]}
        >
          <meshPhysicalMaterial
            color={"lightgray"}
            metalness={1}
            roughness={0.25}
          />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Wall.geometry}
          material={materials.GrayWall}
          position={[-0.29, 0.795, 1.463]}
          scale={[0.737, 1, 0.5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001.geometry}
          material={materials["Material.002"]}
          position={[3.075, 2.966, -0.872]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[2.281, 1.161, 0.775]}
        >
          <meshPhysicalMaterial
            color={"lightgray"}
            metalness={1}
            roughness={0.3}
          />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Wall001.geometry}
          material={materials.GrayWall}
          position={[2.35, 0.795, -0.657]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[1.403, 1, 0.5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Wall002.geometry}
          material={materials["Material.011"]}
          position={[-0.053, 2.3, 2.673]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[1.403, 1, 0.5]}
        />

        {/* ust kat zemin */}
        <group position={[-1.3, 1.795, 0.409]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane002_1.geometry}
            material={materials.GrayWall}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane002_2.geometry}
            material={materials.Floor}
          >
            <meshPhysicalMaterial
              color={"#d6cbb9"}
              roughness={0.15}
              side={DoubleSide}
            />
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane002_3.geometry}
            material={materials["emmission.001"]}
            material-emmisiveIntensity={1000}
          >
            <meshPhysicalMaterial
              emissive={emmissiveColor}
              emissiveIntensity={emmissiveIntensity}
            />
          </mesh>
        </group>

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001.geometry}
          material={materials.GrayWall}
          position={[-1.3, 1.795, 0.646]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane002.geometry}
          material={materials.Glass}
          position={[-1.3, 1.795, 0.654]}
        >
          <meshPhysicalMaterial transparent opacity={0.1} alphaHash />
        </mesh>
        <group position={[-1.324, -1.55, 6.663]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["C-Cylinder_1"].geometry}
            material={materials["Material.001"]}
            position={[1.324, 1.55, -6.663]}
            scale={0.1}
          />
        </group>

        {/* banyo dolap */}
        <group position={[-0.178, 1.822, 2.965]}>
          <group position={[0.027, 0.43, 0.2]}>
            <group
              position={[-0.284, 0.025, -0.935]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={[0.5, 0.148, 0.36]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["C-panel_side"].geometry}
                material={materials.OAK}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["C-panel_side_1"].geometry}
                material={materials.Material1}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["C-panel_side_2"].geometry}
                material={materials.marble_1_1}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["C-panel_side_3"].geometry}
                material={materials["Material.003"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["C-panel_side_4"].geometry}
                material={materials["*9"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["C-panel_side_5"].geometry}
                material={materials["[Color M00]"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["C-panel_side_6"].geometry}
                material={materials.LED}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["C-panel_side_7"].geometry}
                material={materials["[Translucent Glass Sky Reflection]"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["C-panel_side_8"].geometry}
                material={materials["[Mirror 01]"]}
              />
            </group>
          </group>
        </group>

        {/* banyo kuvet */}
        <group
          position={[-1.839, 1.877, 2.225]}
          rotation={[0, 1.571, 0]}
          scale={0.75}
        >
          <group rotation={[Math.PI, 0, Math.PI]} scale={[1, 0.934, 1]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube005.geometry}
              material={materials.ceramic}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube005_1.geometry}
              material={materials["polished metal"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube005_2.geometry}
              material={materials.darkness}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube005_3.geometry}
              material={materials.metal}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube005_4.geometry}
              material={materials["hose metal with riges"]}
            />
          </group>
        </group>

        {/* armchairs */}
        <group position={[0.879, 1.805, 2.273]}>
          <group
            position={[-0.194, 0.053, -0.246]}
            rotation={[0, 0.685, 0]}
            scale={0.625}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["C-Box007#1_1"].geometry}
              material={materials["04 - Default"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["C-Box007#1_2"].geometry}
              material={materials["03 - Default"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["C-Box007#1_3"].geometry}
              material={materials["02 - Default"]}
            />
          </group>
          <group
            position={[0.926, 0.053, -0.246]}
            rotation={[0, -0.886, 0]}
            scale={0.625}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["C-Box007#1_1"].geometry}
              material={materials["04 - Default"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["C-Box007#1_2"].geometry}
              material={materials["03 - Default"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["C-Box007#1_3"].geometry}
              material={materials["02 - Default"]}
            />
          </group>
        </group>

        {/* puff */}
        <group position={[1.237, 1.965, 2.428]} scale={0.5}>
          <group position={[0.064, 0.413, 0.343]} scale={0.024}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Assembly-3_(C-Assembly-3_Defintion)_1"].geometry}
              material={materials.Gold_24k}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Assembly-3_(C-Assembly-3_Defintion)_2"].geometry}
              material={materials.Fabric_F01_40cm}
            />
          </group>
        </group>

        {/* office desk */}
        <group
          position={[2.849, 1.822, -0.213]}
          rotation={[0, 1.571, 0]}
          scale={0.625}
        >
          <group position={[-0.607, 0, -1.528]} rotation={[0, -1.571, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["C-HSeat#6_1"].geometry}
              material={materials["[Leather Blue]2"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["C-HSeat#6_2"].geometry}
              material={materials["[0134_DimGray]"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["C-HSeat#6_3"].geometry}
              material={materials["[Color M02]"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["C-HSeat#6_4"].geometry}
              material={materials["[Wood Veneer 02]1"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["C-HSeat#6_5"].geometry}
              material={materials["[Metal Corrugated Shiny]1"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["C-HSeat#6_6"].geometry}
              material={materials["HMI- BK (Black) 1"]}
            />
          </group>
        </group>

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane003.geometry}
          material={materials.emmission}
          position={[-1.3, 1.795, 0.409]}
        >
          <meshPhysicalMaterial
            emissive={emmissiveColor}
            emissiveIntensity={emmissiveIntensity}
          />
        </mesh>

        {/* office puffes */}
        <group position={[3.85, 1.822, 1.044]}>
          <group
            position={[-0.283, 0.298, -1.352]}
            rotation={[-Math.PI / 2, 0, 2.44]}
            scale={-0.625}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["G-Object014_1"].geometry}
              material={materials["Leather_soft_ Brown_bump "]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["G-Object014_2"].geometry}
              material={materials.DEFAULT_0_0}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["G-Object014_3"].geometry}
              material={materials.default_0_1}
            />
          </group>
          <group
            position={[-0.283, 0.298, -0.653]}
            rotation={[Math.PI / 2, 0, -0.887]}
            scale={0.625}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["G-Object014_1"].geometry}
              material={materials["Leather_soft_ Brown_bump "]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["G-Object014_2"].geometry}
              material={materials.DEFAULT_0_0}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["G-Object014_3"].geometry}
              material={materials.default_0_1}
            />
          </group>
        </group>

        {/* kitchen */}
        <group position={[0.22, 0.3, 1.52]}>
          <group position={[-0.03, 0, 0.075]}>
            <group position={[-0.03, 2.68, 0]}>
              <group position={[0.03, -2.68, 0]}>
                <group
                  position={[-1.102, 0, 1.747]}
                  rotation={[Math.PI, Math.PI / 2, 0]}
                  scale={-0.5}
                >
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes["G-Object147_1"].geometry}
                    material={materials["[Color M02].001"]}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes["G-Object147_2"].geometry}
                    material={materials["14c5e43acef786fe6b389ede192f9bb9"]}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes["G-Object147_3"].geometry}
                    material={materials["2-6"]}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes["G-Object147_4"].geometry}
                    material={materials.Stone_D_150cm}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes["G-Object147_5"].geometry}
                    material={materials["1-3"]}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes["G-Object147_6"].geometry}
                    material={materials["2-3"]}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes["G-Object147_7"].geometry}
                    material={materials["2-1"]}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes["G-Object147_8"].geometry}
                    material={materials["2-5"]}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes["G-Object147_9"].geometry}
                    material={materials["Material.005"]}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes["G-Object147_10"].geometry}
                    material={materials["[Metal_Corrogated_Shiny]"]}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes["G-Object147_11"].geometry}
                    material={materials["[Color_D11]"]}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes["G-Object147_12"].geometry}
                    material={materials["[Color_000].001"]}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes["G-Object147_13"].geometry}
                    material={materials["[Color_E04]"]}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes["G-Object147_14"].geometry}
                    material={materials["[Color M02].001"]}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes["G-Object147_15"].geometry}
                    material={materials.Gold_Blurry}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes["G-Object147_16"].geometry}
                    material={materials.chek}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes["G-Object147_17"].geometry}
                    material={materials["1-2"]}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes["G-Object147_18"].geometry}
                    material={materials["1-6"]}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes["G-Object147_19"].geometry}
                    material={materials["1-4"]}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes["G-Object147_20"].geometry}
                    material={materials["1-5"]}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes["G-Object147_21"].geometry}
                    material={materials["1-1"]}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Wall003.geometry}
          material={materials["Material.002"]}
          position={[0.843, 0.795, 1.463]}
          scale={[0.737, 1, 0.5]}
        >
          <meshPhysicalMaterial
            color={"lightgray"}
            metalness={1}
            roughness={0.3}
            side={DoubleSide}
          />
        </mesh>

        <group position={[-1.3, 1.795, 0.409]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane006_1.geometry}
            material={materials.GrayWall}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane006_2.geometry}
            material={materials["emmission.002"]}
          >
            <meshPhysicalMaterial
              emissive={emmissiveColor}
              emissiveIntensity={emmissiveIntensity}
            />
          </mesh>
        </group>

        {/* computer */}
        <group position={[2.862, 2.26, -0.428]} scale={0.625}>
          <group position={[-1.323, 0, -1.664]}>
            <group position={[1.329, 0.018, 1.661]}>
              <group
                position={[0.019, 0.025, 0.014]}
                rotation={[-0.629, -0.951, -0.535]}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes["G-Object030_1"].geometry}
                  material={materials["[0137_Black]"]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes["G-Object030_2"].geometry}
                  material={materials["Material.012"]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes["G-Object030_3"].geometry}
                  material={materials["*12"]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes["G-Object030_4"].geometry}
                  material={materials["*5"]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes["G-Object030_5"].geometry}
                  material={materials["*6"]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes["G-Object030_6"].geometry}
                  material={materials["*2.001"]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes["G-Object030_7"].geometry}
                  material={materials["*8"]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes["G-Object030_8"].geometry}
                  material={materials["*11"]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes["G-Object030_9"].geometry}
                  material={materials["*9.002"]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes["G-Object030_10"].geometry}
                  material={materials["ps desktop"]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes["G-Object030_11"].geometry}
                  material={materials.on}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes["G-Object030_12"].geometry}
                  material={materials["*15"]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes["G-Object030_13"].geometry}
                  material={materials["*16"]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes["G-Object030_14"].geometry}
                  material={materials["[0136_Charcoal].001"]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes["G-Object030_15"].geometry}
                  material={materials["[0131_Silver]"]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes["G-Object030_16"].geometry}
                  material={materials["[0128_White]"]}
                />
              </group>
            </group>
          </group>
        </group>

        {/* kitchen ceiling */}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane005.geometry}
          material={materials["Dark Gray"]}
          position={[0.088, 1.55, 2.341]}
        />
        {/* kitchen ceiling wireframe wall */}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane006.geometry}
          material={materials["Material.002"]}
          position={[0.088, 1.55, 2.341]}
        />

        {/* kitchen back solid */}
        <group position={[3.5, 0, 0.25]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere.geometry}
            material={materials["Material.007"]}
            position={[-1.693, 0.963, 2.274]}
            scale={hovered ? 0.45 : 0.35}
            onPointerEnter={() => setHovered(true)}
            onPointerLeave={() => setHovered(false)}
            onClick={() => setContact(true)}
          >
            <meshPhysicalMaterial
              transparent={true}
              wireframe
              emissive={hovered ? "lime" : "black"}
              thickness={0.75}
              color={hovered ? "lime" : "white"}
              opacity={0.9}
              roughness={0.25}
              metalness={hovered ? 0 : 1}
            />
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere.geometry}
            material={materials["Material.007"]}
            position={[-1.693, 0.963, 2.274]}
            scale={hovered ? 0.45 : 0.35}
            onPointerEnter={() => setHovered(true)}
            onPointerLeave={() => setHovered(false)}
            onClick={() => setContact(true)}
          >
            <meshPhysicalMaterial
              transparent={true}
              wireframe={hovered}
              emissive={hovered ? "lime" : "orange"}
              thickness={0.75}
              color={hovered ? "lime" : "gray"}
              opacity={0.75}
              roughness={0.25}
              metalness={hovered ? 0 : 1}
            />
          </mesh>

          {hovered && !contact && (
            <Html position={[-2, 0.45, 2.55]}>
              <div
                className="bg-slate-700/75 text-white border border-white px-2 p-1 rounded-full cursor-pointer"
                onClick={() => setContact(true)}
              >
                Contact
              </div>
            </Html>
          )}

          {contact && (
            <Html
              as="div"
              fullscreen
              className="flex flex-col justify-center items-center rounded-3xl cursor-default select-none relative z-20"
            >
              <div
                className="h-[65%] rounded-3xl z-20 border mb-16 bg-cover bg-center w-[75%] flex flex-col -translate-x-[8%] -translate-y-[25%] "
                style={{ backgroundImage: `url(${bg})` }}
              >
                <div className="w-full h-full z-20 bg-black opacity-70 absolute rounded-3xl left-0 right-0"></div>
                <button
                  className=" border rounded-full w-6 h-6 flex justify-center items-center ml-4 mt-4 hover:bg-slate-400 text-white z-30"
                  onClick={() => {
                    setContact(!contact);
                  }}
                >
                  X
                </button>
                <div className="flex h-full w-full flex-col text-white z-30">
                  <div className="mt-20 text-base lg:text-xl">
                    Contact below for an exciting project idea
                  </div>
                  <div className="flex justify-center w-full mt-4 ">
                    Kadıköy / Istanbul
                  </div>
                  <div className="flex justify-center w-full mt-20 ">
                    +90 534 887 1868
                  </div>
                  <a
                    className="text-white hover:text-orange-400"
                    href="mailto:codesign@gmail.com"
                  >
                    codesign.gokhanozsule@gmail.com
                  </a>
                </div>
              </div>
            </Html>
          )}
        </group>

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere001.geometry}
          material={materials["Material.002"]}
          position={[5.02, 0.225, -0.53]}
          rotation={[0, Math.PI / 2, 0]}
          scale={0.283}
        >
          <meshPhysicalMaterial color={"gray"} side={DoubleSide} />
        </mesh>

        {/* hamak front solid */}
        <group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere001.geometry}
            material={materials["Material.002"]}
            position={[3.75, 0.9, -0.85]}
            rotation={[0, Math.PI / 2, 0]}
            scale={hoveredAbout ? 0.45 : 0.3}
            onPointerOver={() => setHoveredAbout(true)}
            onPointerOut={() => setHoveredAbout(false)}
            onClick={() => setAbout(true)}
          >
            <meshPhysicalMaterial
              transparent={true}
              wireframe
              emissive={hoveredAbout ? "lime" : "black"}
              emissiveIntensity={1.5}
              color={hoveredAbout ? "lime" : "white"}
              opacity={0.95}
              roughness={0.25}
              metalness={1}
            />
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere001.geometry}
            material={materials["Material.002"]}
            position={[3.75, 0.9, -0.85]}
            rotation={[0, Math.PI / 2, 0]}
            scale={hoveredAbout ? 0.45 : 0.3}
            onPointerOver={() => setHoveredAbout(true)}
            onPointerOut={() => setHoveredAbout(false)}
            onClick={() => setAbout(true)}
          >
            <meshPhysicalMaterial
              transparent={true}
              wireframe={hoveredAbout}
              emissive={hoveredAbout ? "lime" : "orange"}
              emissiveIntensity={1.5}
              color={hoveredAbout ? "lime" : "gray"}
              opacity={0.75}
              roughness={0.25}
              metalness={1}
            />
          </mesh>
          {hoveredAbout && (
            <Html position={[3.5, 0.3, -0.65]}>
              <div className="bg-slate-700/75 text-white border border-white px-2 p-1 rounded-full cursor-pointer">
                About
              </div>
            </Html>
          )}

          {about && (
            <Html fullscreen className="-translate-y-[15%]">
              <>
                <div
                  className="w-[95%] h-[95%] rounded-3xl border border-white bg-cover bg-center custom-shadow mb-4 z-10 flex flex-col relative select-none translate-x-[5%] -translate-y-[10%]"
                  style={{ backgroundImage: `url(${bg01})` }}
                >
                  <div className="w-full h-full bg-black opacity-45 absolute left-0 right-0 rounded-3xl"></div>
                  <button
                    className=" border rounded-full w-6 h-6 flex justify-center items-center ml-4 mt-4 hover:bg-slate-400 text-white z-30"
                    onClick={() => {
                      setAbout(!about);
                    }}
                  >
                    X
                  </button>
                  <div className="flex flex-row h-full w-full justify-between pr-10 lg:pr-24 pl-10 sm:pl-24 relative">
                    <div className="flex flex-col h-full justify-start items-start text-start w-full text-white">
                      <div className="flex w-full text-[10px] lg:text-xs pt-4 lg:pt-10 ">
                        GOKHAN OZSULE
                      </div>
                      <div className="flex w-full text-xl lg:text-2xl ">
                        CoDeSiGn
                      </div>
                      <p className="flex w-full text-xs lg:text-sm pt-4">
                        Graduated from METU Architecture Faculty
                      </p>
                      <p className="flex w-full text-xs lg:text-sm">
                        Continued Design Academy Eindhoven
                      </p>
                      <p className="flex w-full text-xs lg:text-sm pt-4">
                        Has been working as a professional Architect for 15+
                        years
                      </p>
                      <p className="flex w-full text-xs lg:text-sm pt-4">
                        Most recent roles are;
                      </p>
                      <div className="flex w-full text-xs lg:text-sm text-red-400">
                        Design and Construction Chief for
                      </div>
                      <a
                        href="https://www.joali.com/joali-being/"
                        target="_blank"
                        className="flex w-full text-xs lg:text-sm text-red-400"
                      >
                        Joali Being Maldives / 4 years
                      </a>
                      <div className="flex w-full text-xs lg:text-sm">
                        <img
                          src={`${cloudinaryUrl}/${AboutImages.Joali}`}
                          alt="JoaliBeing_aerial"
                          className="w-56 flex "
                        />
                      </div>
                      <div className="flex w-full text-xs lg:text-sm pt-1 text-red-400">
                        Design Lead and Construction Consultant for
                      </div>
                      <a
                        href="https://www.emaarsquaremall.com/en/"
                        target="_blank"
                        className="flex w-full text-xs lg:text-sm text-red-400"
                      >
                        EmaarSquare Istanbul / 6 years
                      </a>
                      <div className="flex w-full text-xs lg:text-sm pt-1">
                        <img
                          src={`${cloudinaryUrl}/${AboutImages.Emaar}`}
                          alt="Emaar_aerial"
                          className="w-56 flex "
                        />
                      </div>
                    </div>
                    <div className="flex flex-col h-full justify-center items-center text-center w-full text-white">
                      <div className="flex flex-col justify-start items-end h-full w-full text-lg lg:text-2xl pt-4 lg:pt-20">
                        <div>Why 3D Web</div>
                        <p className="flex w-full items-end text-end justify-end text-sm lg:text-base pt-8">
                          Every idea starts with a model
                        </p>
                        <p className="flex w-full items-end text-end justify-end text-sm lg:text-base pt-1">
                          3D AR/VR experiences are gradually developing
                        </p>
                        <p className="flex w-full items-end text-end justify-end text-sm lg:text-base pt-1">
                          Designing a web flow in 3D is exciting
                        </p>
                        <p className="flex w-full items-end text-end justify-end text-sm lg:text-base pt-1">
                          3D web ui offers more creative interactions
                        </p>
                        <p className="flex w-full items-end text-end justify-end text-sm lg:text-base pt-8">
                          Why not to build 3D websites together?
                        </p>
                        <p className="flex w-full items-end text-end justify-end text-sm lg:text-base pt-8">
                          Eagerly growing understanding of : React
                        </p>
                        <p className="flex w-full items-end text-end justify-end text-sm lg:text-base pt-1">
                          React Three Fiber
                        </p>
                        <p className="flex w-full items-end text-end justify-end text-sm lg:text-base pt-1">
                          Javascript
                        </p>
                        <p className="flex w-full items-end text-end justify-end text-sm lg:text-base pt-1">
                          THREE.js
                        </p>
                        <p className="flex w-full items-end text-end justify-end text-sm lg:text-base pt-1">
                          Css
                        </p>
                        <p className="flex w-full items-end text-end justify-end text-sm lg:text-base pt-1">
                          Tailwind
                        </p>
                        <p className="flex w-full items-end text-end justify-end text-sm lg:text-base pt-1">
                          AI
                        </p>
                        <p className="flex w-full items-end text-end justify-end text-sm lg:text-base pt-1">
                          And a curious mind to discover more...
                        </p>
                      </div>
                    </div>
                    <div className="absolute h-[85%] w-1/4 bottom-[5%] left-[37.5%] flex justify-center items-end rounded-3xl z-10 cursor-pointer">
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
                        <Man position={[0, -4.8, -1.2]} scale={6} />
                      </Canvas>
                    </div>
                  </div>
                </div>
              </>
            </Html>
          )}
        </group>

        {/* office solid */}
        <group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere001.geometry}
            material={materials["Material.002"]}
            position={[3, 3, 0]}
            rotation={[0, Math.PI / 2, 0]}
            scale={hoveredWorks ? 0.45 : 0.3}
            onPointerOver={() => setHoveredWorks(true)}
            onPointerOut={() => setHoveredWorks(false)}
            onClick={() => setWorks(true)}
          >
            <meshPhysicalMaterial
              transparent={true}
              wireframe
              emissive={hoveredWorks ? "lime" : "black"}
              emissiveIntensity={1.5}
              color={hoveredWorks ? "lime" : "white"}
              opacity={0.95}
              roughness={0.25}
              metalness={1}
            />
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere001.geometry}
            material={materials["Material.002"]}
            position={[3, 3, 0]}
            rotation={[0, Math.PI / 2, 0]}
            scale={hoveredWorks ? 0.45 : 0.3}
            onPointerOver={() => setHoveredWorks(true)}
            onPointerOut={() => setHoveredWorks(false)}
            onClick={() => setWorks(true)}
          >
            <meshPhysicalMaterial
              transparent={true}
              wireframe={hoveredWorks}
              emissive={hoveredWorks ? "lime" : "orange"}
              emissiveIntensity={1.5}
              color={hoveredWorks ? "lime" : "gray"}
              opacity={0.75}
              roughness={0.25}
              metalness={1}
            />
          </mesh>
          {hoveredWorks && (
            <Html position={[2.75, 2.5, 0.25]}>
              <div className="bg-slate-700/75 text-white border border-white px-2 p-1 rounded-full cursor-pointer">
                Works
              </div>
            </Html>
          )}
        </group>

        {works && (
          <Html fullscreen>
            <div
              className="w-[90%] h-[97%] rounded-3xl bg-cover bg-center custom-shadow z-10 flex flex-col relative translate-x-28 -translate-y-[75px] select-none"
              style={{ backgroundImage: `url(${bg})`, borderRadius: "24 px" }}
            >
              <div className="w-full h-full bg-black rounded-3xl opacity-55 absolute left-0 right-0"></div>
              <button
                className=" absolute border rounded-full w-6 h-6 flex justify-center items-center ml-4 mt-4 hover:bg-slate-400 text-white z-30"
                onClick={() => {
                  setWorks(!works);
                }}
              >
                X
              </button>
              <div className="flex flex-col h-full w-full justify-between ">
                <div className="w-full flex h-full">
                  <div className="w-1/2 h-1/2 ">
                    <div className="flex flex-col h-full justify-center items-center text-center w-full border rounded-3xl border-white">
                      <ProjectCard
                        to={"/MixedUse"}
                        text={"MIXED USE DEVELOPMENT"}
                        src={render01}
                      />
                      <div className="text-white">2022</div>
                    </div>
                    <div className="flex flex-col h-full justify-center items-center text-center w-full border rounded-3xl border-white">
                      <ProjectCard
                        to={"/V01"}
                        text={"PRIVATE VILLA"}
                        src={render02}
                      />
                      <div className="text-white">2024</div>
                    </div>
                  </div>
                  <div className="w-1/2 h-1/2 ">
                    <div className="flex flex-col h-full justify-center items-center text-center w-full border rounded-3xl border-white">
                      <ProjectCard
                        to={"/V02"}
                        text={"VILLA 02"}
                        src={render03}
                      />
                      <div className="text-white">2023</div>
                    </div>
                    <div className="flex flex-col h-full justify-center items-center text-center w-full border rounded-3xl border-white">
                      <ProjectCard
                        to={"/Carport"}
                        text={"CARPORT"}
                        src={render04}
                      />
                      <div className="text-white">2023</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Html>
        )}

        {/* Platonik solidler */}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004.geometry}
          material={materials.GrayWall}
          position={[5.02, 0.225, -1.172]}
          rotation={[0, Math.PI / 2, 0]}
          scale={0.162}
        >
          <meshPhysicalMaterial color={"gray"} side={DoubleSide} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube003.geometry}
          material={materials["Material.002"]}
          position={[5.02, 0.3, -2.492]}
          rotation={[0, Math.PI / 2, 0]}
          scale={0.283}
        >
          <meshPhysicalMaterial color={"gray"} side={DoubleSide} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002.geometry}
          material={materials["Material.002"]}
          position={[5.02, 0.225, 0.806]}
          rotation={[0, Math.PI / 2, 0]}
          scale={0.2}
        >
          <meshPhysicalMaterial color={"gray"} side={DoubleSide} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle001.geometry}
          material={materials["GrayWall.001"]}
          position={[5.02, 0.432, 0.114]}
          rotation={[0, Math.PI / 2, 0]}
          scale={0.199}
        >
          <meshPhysicalMaterial color={"gray"} side={DoubleSide} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle.geometry}
          material={materials["GrayWall.001"]}
          position={[5.02, 0.3, -1.835]}
          rotation={[0, Math.PI / 2, 0]}
          scale={0.283}
        >
          <meshPhysicalMaterial color={"gray"} side={DoubleSide} />
        </mesh>

        <group
          position={[-0.423, 0.302, -1.335]}
          rotation={[0, -0.459, 0]}
          scale={0.025}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Component2#1_1"].geometry}
            material={
              materials["设计师SING的模型专用贴图(QQ群号：469733580) (339)2"]
            }
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Component2#1_2"].geometry}
            material={materials["1"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Component2#1_3"].geometry}
            material={materials["2"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Component2#1_4"].geometry}
            material={materials["121"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Component2#1_5"].geometry}
            material={
              materials["设计师SING的模型专用贴图(QQ群号：469733580) (3"]
            }
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Component2#1_6"].geometry}
            material={
              materials["设计师SING的模型专用贴图(QQ群号：469733580) (3.006"]
            }
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Component2#1_7"].geometry}
            material={materials["Material #84356"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Component2#1_8"].geometry}
            material={materials["Material #843"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Component2#1_9"].geometry}
            material={materials["Material #844"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Component2#1_10"].geometry}
            material={materials["Mat3dd66-e327-1-442"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Component2#1_11"].geometry}
            material={
              materials["设计师SING的模型专用贴图(QQ群号：469733580) (3.001"]
            }
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Component2#1_12"].geometry}
            material={
              materials["设计师SING的模型专用贴图(QQ群号：469733580) (339)1"]
            }
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Component2#1_13"].geometry}
            material={materials["67"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Component2#1_14"].geometry}
            material={materials["45"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Component2#1_15"].geometry}
            material={materials["Minotti_Alexander Sofa 4_041"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Component2#1_16"].geometry}
            material={materials["3"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Component2#1_17"].geometry}
            material={
              materials["设计师SING的模型专用贴图(QQ群号：469733580) (3.004"]
            }
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Component2#1_18"].geometry}
            material={materials["4"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Component2#1_19"].geometry}
            material={materials["Minotti_Lawrence Sofa_016"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Component2#1_20"].geometry}
            material={materials["01 - Default"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Component2#1_21"].geometry}
            material={materials["01 - Default1"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Component2#1_22"].geometry}
            material={materials["01 - Default2"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Component2#1_23"].geometry}
            material={materials.家具不锈钢}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Component2#1_24"].geometry}
            material={materials["01 - Default3"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Component2#1_25"].geometry}
            material={materials["[Color_007]"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Component2#1_26"].geometry}
            material={
              materials["设计师SING的模型专用贴图(QQ群号：469733580) (3.005"]
            }
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Component2#1_27"].geometry}
            material={
              materials["设计师SING的模型专用贴图(QQ群号：469733580) (339)7"]
            }
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Component2#1_28"].geometry}
            material={
              materials["设计师SING的模型专用贴图(QQ群号：469733580) (339)8"]
            }
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Component2#1_29"].geometry}
            material={
              materials["设计师SING的模型专用贴图(QQ群号：469733580) (3.002"]
            }
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Component2#1_30"].geometry}
            material={
              materials["设计师SING的模型专用贴图(QQ群号：469733580) (3.003"]
            }
          />
        </group>

        {/* TV Unit  */}
        <group
          position={[-2.086, 1.238, 0.91]}
          rotation={[-Math.PI, 0, 0]}
          scale={[-0.825, -0.452, -1.254]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["G-__574194_1"].geometry}
            material={materials["[Color_000]"]}
          >
            <meshPhysicalMaterial color={"#bebebe"} roughness={0.15} />
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["G-__574194_2"].geometry}
            material={materials["[Color_B16]1"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["G-__574194_3"].geometry}
            material={materials["*34"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["G-__574194_4"].geometry}
            material={materials["<DarkGreen>"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["G-__574194_5"].geometry}
            material={materials.mat__ACI__1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["G-__574194_6"].geometry}
            material={materials["<Olive>2"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["G-__574194_7"].geometry}
            material={materials["<Olive>"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["G-__574194_8"].geometry}
            material={materials["[<0059_DarkOliveGreen>]"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["G-__574194_9"].geometry}
            material={materials["[Color_008]3"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["G-__574194_10"].geometry}
            material={materials["Material.009"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["G-__574194_11"].geometry}
            material={materials.isi_book_cover}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["G-__574194_12"].geometry}
            material={materials["[Color_C15]"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["G-__574194_13"].geometry}
            material={materials.White2}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["G-__574194_14"].geometry}
            material={materials.cover}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["G-__574194_15"].geometry}
            material={
              materials["halo-contact-harvest-book-cover-final-10july072"]
            }
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["G-__574194_16"].geometry}
            material={materials["20641_Ampliada"]}
          >
            <meshPhysicalMaterial
              color={"gray"}
              emissive={"white"}
              emissiveIntensity={30}
            />
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["G-__574194_17"].geometry}
            material={materials["[Translucent_Glass_Gray]1"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["G-__574194_18"].geometry}
            material={materials["[0135_DarkGray]1"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["G-__574194_19"].geometry}
            material={materials["[Color_F19]"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["G-__574194_20"].geometry}
            material={materials["[Color_E05]"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["G-__574194_21"].geometry}
            material={materials["[Vegetation_Grass1]"]}
          />
        </group>

        {/* Merdiven */}
        <group
          position={[-2.079, 2.366, -2.298]}
          rotation={[0, 0, -Math.PI]}
          scale={-0.5}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.STEEL_BAR001_1.geometry}
            material={materials["Aluminum_Anodized_DarkGray#1"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.STEEL_BAR001_2.geometry}
            material={materials["Architectural Glass.001"]}
          >
            <meshPhysicalMaterial transparent opacity={0.1} />
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.STEEL_BAR001_3.geometry}
            material={materials["Aluminum_Anodized_Clear#1"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.STEEL_BAR001_4.geometry}
            material={materials["Material.004"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.STEEL_BAR001_5.geometry}
            material={materials["led white"]}
          >
            <meshPhysicalMaterial
              emissive={emmissiveColor}
              emissiveIntensity={emmissiveIntensity}
            />
          </mesh>
        </group>

        {/* Yatak */}
        <group
          position={[-1.481, 2.575, -1.044]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={[-0.023, -0.022, -0.02]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["G-mmjhfdgh7550_1"].geometry}
            material={materials.mmjhfdghd179}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["G-mmjhfdgh7550_2"].geometry}
            material={materials.mmjhfdghd180}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["G-mmjhfdgh7550_3"].geometry}
            material={materials["ChenZc-200606-DCZ97"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["G-mmjhfdgh7550_4"].geometry}
            material={materials["youshang-北欧卧室-20422-_641"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["G-mmjhfdgh7550_5"].geometry}
            material={materials["youshang-北欧卧室-20422-_640"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["G-mmjhfdgh7550_6"].geometry}
            material={materials.sfdsafafssssssss}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["G-mmjhfdgh7550_7"].geometry}
            material={materials.taochi}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["G-mmjhfdgh7550_8"].geometry}
            material={materials.vray_VRayMtl_21}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["G-mmjhfdgh7550_9"].geometry}
            material={materials["2106173_040"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["G-mmjhfdgh7550_10"].geometry}
            material={materials["2106173_041"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["G-mmjhfdgh7550_11"].geometry}
            material={materials["2106173_019"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["G-mmjhfdgh7550_12"].geometry}
            material={materials["2106173_042"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["G-mmjhfdgh7550_13"].geometry}
            material={materials["vray ChenZc-200606-DCZ22"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["G-mmjhfdgh7550_14"].geometry}
            material={materials["vray ChenZc-200606-DCZ8"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["G-mmjhfdgh7550_15"].geometry}
            material={materials["youshang-m11011"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["G-mmjhfdgh7550_16"].geometry}
            material={materials["youshang-m11012"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["G-mmjhfdgh7550_17"].geometry}
            material={materials["youshang-m11013"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["G-mmjhfdgh7550_18"].geometry}
            material={materials.Alberta_Bed_LAwwGUNwloth7}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["G-mmjhfdgh7550_19"].geometry}
            material={materials["youshang-EEl #13479"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["G-mmjhfdgh7550_20"].geometry}
            material={materials.mmjhfdghd189}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["G-mmjhfdgh7550_21"].geometry}
            material={materials.mmjhfdghd176}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["G-mmjhfdgh7550_22"].geometry}
            material={materials.mmjhfdghd188}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["G-mmjhfdgh7550_23"].geometry}
            material={materials.mmjhfdghd187}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["G-mmjhfdgh7550_24"].geometry}
            material={materials["2106173_036"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["G-mmjhfdgh7550_25"].geometry}
            material={materials["2106173_037"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["G-mmjhfdgh7550_26"].geometry}
            material={materials["2106173_039"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["G-mmjhfdgh7550_27"].geometry}
            material={materials["2106173_033"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["G-mmjhfdgh7550_28"].geometry}
            material={materials["2106173_034"]}
          />
        </group>

        {/* Dresser */}
        <group
          position={[-2.074, 1.962, 0.663]}
          rotation={[0, Math.PI / 2, 0]}
          scale={0.025}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Component67_1.geometry}
            material={materials["*1.003"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Component67_2.geometry}
            material={materials.SZTSDB0102}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Component67_3.geometry}
            material={materials.SZTSDB0035}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Component67_4.geometry}
            material={materials.SZTSDB0036}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Component67_5.geometry}
            material={materials.SZTSDB0037}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Component67_6.geometry}
            material={materials.SZTSDB0040}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Component67_7.geometry}
            material={materials.SZTSDB0039}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Component67_8.geometry}
            material={materials.SZTSDB0041}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Component67_9.geometry}
            material={materials.SZTSDB0044}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Component67_10.geometry}
            material={materials.SZTSDB0043}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Component67_11.geometry}
            material={materials.SZTSDB0045}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Component67_12.geometry}
            material={materials.SZTSDB0048}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Component67_13.geometry}
            material={materials.SZTSDB0047}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Component67_14.geometry}
            material={materials.SZTSDB0049}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Component67_15.geometry}
            material={materials.SZTSDB0052}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Component67_16.geometry}
            material={materials.SZTSDB0051}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Component67_17.geometry}
            material={materials.SZTSDB0053}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Component67_18.geometry}
            material={materials.SZTSDB0062}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Component67_19.geometry}
            material={materials.SZTSDB0058}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Component67_20.geometry}
            material={materials.SZTSDB0060}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Component67_21.geometry}
            material={materials.SZTSDB0055}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Component67_22.geometry}
            material={materials.SZTSDB0061}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Component67_23.geometry}
            material={materials.SZTSDB0059}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Component67_24.geometry}
            material={materials.SZTSDB0057}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Component67_25.geometry}
            material={materials.SZTSDB0056}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Component67_26.geometry}
            material={materials.SZTSDB0063}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Component67_27.geometry}
            material={materials.SZTSDB0064}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Component67_28.geometry}
            material={materials.SZTSDB0065}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Component67_29.geometry}
            material={materials.SZTSDB0066}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Component67_30.geometry}
            material={materials.SZTSDB0067}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Component67_31.geometry}
            material={materials.SZTSDB0068}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Component67_32.geometry}
            material={materials.SZTSDB0070}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Component67_33.geometry}
            material={materials.SZTSDB0077}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Component67_34.geometry}
            material={materials.SZTSDB0079}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Component67_35.geometry}
            material={materials.SZTSDB0081}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Component67_36.geometry}
            material={materials.SZTSDB0083}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Component67_37.geometry}
            material={materials.SZTSDB0084}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Component67_38.geometry}
            material={materials.SZTSDB0086}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Component67_39.geometry}
            material={materials.SZTSDB0087}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Component67_40.geometry}
            material={materials.SZTSDB0085}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Component67_41.geometry}
            material={materials.SZTSDB0088}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Component67_42.geometry}
            material={materials.SZTSDB0090}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Component67_43.geometry}
            material={materials.SZTSDB0092}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Component67_44.geometry}
            material={materials.SZTSDB0093}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Component67_45.geometry}
            material={materials.SZTSDB0095}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Component67_46.geometry}
            material={materials.SZTSDB0096}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Component67_47.geometry}
            material={materials["*2"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Component67_48.geometry}
            material={materials["*"]}
          />
        </group>

        {/* Hamak */}
        <group
          position={[2.9, 0.3, -0.848]}
          rotation={[0, Math.PI / 2, 0]}
          scale={0.017}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["G-modern_pergola_001__30___30__1"].geometry}
            material={materials.Material__1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["G-modern_pergola_001__30___30__2"].geometry}
            material={materials.Material__2}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["G-modern_pergola_001__30___30__3"].geometry}
            material={materials.Material__4}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["G-modern_pergola_001__30___30__4"].geometry}
            material={materials.Material__5}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["G-modern_pergola_001__30___30__5"].geometry}
            material={materials.Material__6}
          />
        </group>

        {/* Gym */}
        <group
          position={[3.188, 1.877, -3.172]}
          rotation={[0, -1.571, 0]}
          scale={0.375}
        >
          <group position={[3.494, 0.022, -1.247]}>
            <group
              position={[0.2, 0.43, 0.062]}
              rotation={[0, 0, -Math.PI]}
              scale={-1}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["G-Object189_1"].geometry}
                material={materials["[Color_008]2"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["G-Object189_2"].geometry}
                material={materials["[Color M01]"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["G-Object189_3"].geometry}
                material={materials["Dark Gray"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["G-Object189_4"].geometry}
                material={materials["[Color_003]1"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["G-Object189_5"].geometry}
                material={materials["<DimGray>"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["G-Object189_6"].geometry}
                material={materials["[Color_002]"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["G-Object189_7"].geometry}
                material={materials["[0136_Charcoal]"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["G-Object189_8"].geometry}
                material={materials.black2}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["G-Object189_9"].geometry}
                material={materials.kettlebell_black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["G-Object189_10"].geometry}
                material={materials["[Color_007]1"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["G-Object189_11"].geometry}
                material={materials["[Color_006]2"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["G-Object189_12"].geometry}
                material={materials["Material.006"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["G-Object189_13"].geometry}
                material={materials["[Color M08]1"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["G-Object189_14"].geometry}
                material={materials["[Color M02].002"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["G-Object189_15"].geometry}
                material={materials["[Color M06]"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["G-Object189_16"].geometry}
                material={materials["[Color M09]"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["G-Object189_17"].geometry}
                material={materials["[Metal Corrugated Shiny]"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["G-Object189_18"].geometry}
                material={materials["[Metal_Aluminum_Anodized]2"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["G-Object189_19"].geometry}
                material={materials["[Translucent Glass Gray]"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["G-Object189_20"].geometry}
                material={materials["metal equipamentos"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["G-Object189_21"].geometry}
                material={materials["[Mirror 01].001"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["G-Object189_22"].geometry}
                material={materials.chrome}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["G-Object189_23"].geometry}
                material={materials["borracha preta"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["G-Object189_24"].geometry}
                material={materials["plastico cinza escuro"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["G-Object189_25"].geometry}
                material={materials["[Color D05]"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["G-Object189_26"].geometry}
                material={materials["[Color_004]"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["G-Object189_27"].geometry}
                material={materials["6112 MAHOGANY"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["G-Object189_28"].geometry}
                material={materials.Sport_preto}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["G-Object189_29"].geometry}
                material={materials["[0135_DarkGray]"]}
              />
            </group>
          </group>
        </group>

        {/* Saksi */}
        <group position={[4, 0.3, -4.378]} scale={0.5}>
          <group position={[-0.046, 0, 0.7]} rotation={[Math.PI, 0, Math.PI]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["G-Object013_1"].geometry}
              material={materials["[Formica Laminate Dark]"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["G-Object013_2"].geometry}
              material={materials["Material.010"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["G-Object013_3"].geometry}
              material={materials["*9.001"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["G-Object013_4"].geometry}
              material={materials["[Groundcover Bark Chips]"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["G-Object013_5"].geometry}
              material={materials["Ophiopogon Jaburan Leaf1"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["G-Object013_6"].geometry}
              material={materials["<Stucco2>2"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["G-Object013_7"].geometry}
              material={materials["*1.001"]}
            />
          </group>
        </group>

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Base_1.geometry}
          material={materials.Floor}
        >
          <meshPhysicalMaterial color={"beige"} roughness={0.15} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Base_2.geometry}
          material={materials.GrayWall}
        >
          <meshPhysicalMaterial
            color={"lightgray"}
            roughness={0.15}
            metalness={1}
            clearcoat={0.6}
          />
        </mesh>
      </group>
      <Image
        url={logo}
        scale={0.75}
        color="white"
        position={[0.235, 2.5, 3.75]}
        rotation={[0, Math.PI / 2, 0]}
        side={DoubleSide}
      />
    </>
  );
}
useGLTF.preload(`/models/Hero3D.glb`);
