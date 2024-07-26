import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Villa01_Partial(props) {
  const { nodes, materials } = useGLTF(`/models/Villa01_Partial.glb`);
  return (
    <group {...props} dispose={null}>
      <group
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.079, 0.08, 0.08]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["G-Agrupar#1001"].geometry}
          material={materials["Material__9.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["G-Agrupar#1001_1"].geometry}
          material={materials["[Color M08].002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["G-Agrupar#1001_2"].geometry}
          material={materials["Eg vand.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["G-Agrupar#1001_3"].geometry}
          material={materials["*33.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["G-Agrupar#1001_4"].geometry}
          material={materials["[Color B08].001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["G-Agrupar#1001_5"].geometry}
          material={materials["*34.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["G-Agrupar#1001_6"].geometry}
          material={materials["*35.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["G-Agrupar#1001_7"].geometry}
          material={materials["Material #.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["G-Agrupar#1001_8"].geometry}
          material={materials["Material #3.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["G-Agrupar#1001_9"].geometry}
          material={materials["Material #4.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["G-Agrupar#1001_10"].geometry}
          material={materials["Material #1.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["G-Agrupar#1001_11"].geometry}
          material={materials["stebel1.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["G-Agrupar#1001_12"].geometry}
          material={materials["steklo zelenkovatoie1.001"]}
        />
      </group>
      <group rotation={[0, 1.571, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane002_1.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane002_2.geometry}
          material={materials["Mutfak_ArkaDuvar.001"]}
        />
      </group>
      <group scale={2.846}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane003_1.geometry}
          material={materials["Material.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane003_2.geometry}
          material={materials["Simple Marble Procedural.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane003_3.geometry}
          material={materials["Mutfak_ArkaDuvar.001"]}
        />
      </group>
      <group rotation={[0, 1.571, 0]} scale={[0.965, 1, 1]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Component#224003"].geometry}
          material={materials.Xam}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Component#224003_1"].geometry}
          material={materials.Acrylic}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Component#224003_2"].geometry}
          material={materials.Color_002}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Component#224003_3"].geometry}
          material={materials["<CorrogateShiny>3"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Component#224003_4"].geometry}
          material={materials["Material.005"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Component#224003_5"].geometry}
          material={materials.LED_5500k}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Component#224003_6"].geometry}
          material={materials["Wood.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Component#224003_7"].geometry}
          material={materials["Den vang"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Component#224003_8"].geometry}
          material={materials["[0129_WhiteSmoke]"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Component#224003_9"].geometry}
          material={materials.Steel}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Component#224003_10"].geometry}
          material={materials["Oak 2"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Component#224003_11"].geometry}
          material={materials["[Color_009].003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Component#224003_12"].geometry}
          material={materials.Scissors}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Component#224003_13"].geometry}
          material={materials.Material6}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Component#224003_14"].geometry}
          material={materials.Cromado1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Component#224003_15"].geometry}
          material={materials.Ceramic}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Component#224003_16"].geometry}
          material={materials.Inox}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Component#224003_17"].geometry}
          material={materials["*13.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Component#224003_18"].geometry}
          material={materials["[Color_008]1.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Component#224003_19"].geometry}
          material={materials["[Wood_Cherry_Original]3"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Component#224003_20"].geometry}
          material={materials["Kinh guong"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Component#224003_21"].geometry}
          material={materials["White_blury1.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Component#224003_22"].geometry}
          material={materials["chrome.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Component#224003_23"].geometry}
          material={materials["inox 1"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Component#224003_24"].geometry}
          material={materials.Metal_Corrogated_Shiny4}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Component#224003_25"].geometry}
          material={materials["[Color_007]3"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Component#224003_26"].geometry}
          material={
            materials["rangemaster_contemporary_oven_r6012_large 594x594x535"]
          }
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Component#224003_27"].geometry}
          material={materials["96_96_96"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Component#224003_28"].geometry}
          material={materials["Rangemaster oven R1"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Component#224003_29"].geometry}
          material={materials["Giriş_İçduvar01.001"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["G-__572736001"].geometry}
        material={materials["3D66_SU_1585032480651_001"]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[0.196, 0.185, 0.185]}
      />
      <group rotation={[0, 0, -Math.PI]} scale={[-0.438, -0.438, -0.515]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["G-__562251_1"].geometry}
          material={materials["1174_0_panasonic_nr_bw465xsvn_2"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["G-__562251_2"].geometry}
          material={materials["[Color_008].004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["G-__562251_3"].geometry}
          material={materials["1174_0_panasonic_nr_bw465xsvn_2#1"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["G-__562251_4"].geometry}
          material={materials["Material.044"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["G-__562251_5"].geometry}
          material={materials["[Color_005].003"]}
        />
      </group>
      <group rotation={[Math.PI, 0, Math.PI]} scale={[0.586, 0.69, 0.586]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["G-__556131_1"].geometry}
          material={materials["[Color_009].005"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["G-__556131_2"].geometry}
          material={materials["[Color_002]3"]}
        />
      </group>
      <group rotation={[0, 0, -Math.PI / 2]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["G-__556059_1"].geometry}
          material={materials["*1.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["G-__556059_2"].geometry}
          material={materials["Material.016"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["G-__556059_3"].geometry}
          material={materials["il_570xN.876616258_qdfx"]}
        />
      </group>
      <group scale={[1.299, 1, 1]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["G-__555708_1"].geometry}
          material={materials["Architectural Glass"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["G-__555708_2"].geometry}
          material={materials["Material.007"]}
        />
      </group>
      <group
        position={[0.208, 0.119, 2.27]}
        rotation={[0, 0, -Math.PI]}
        scale={-1}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Door_PI002.geometry}
          material={materials["Wood Base 01"]}
          position={[-0.208, -0.119, 2.27]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Frame.geometry}
          material={materials["Wood Base 01.001"]}
          position={[-0.208, -0.119, 2.27]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Handle_Argos.geometry}
          material={materials["aluminium used"]}
          position={[-0.208, -0.119, 2.27]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.394}
        />
      </group>
      <group rotation={[Math.PI, 0, Math.PI]} scale={[0.024, 0.023, 0.023]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Assembly-2_Defintion#1_1"].geometry}
          material={materials.Microwave}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Assembly-2_Defintion#1_2"].geometry}
          material={materials.Oven}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001_1.geometry}
        material={materials["Material.001"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001_2.geometry}
        material={materials["Giriş_İçduvar01.001"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane004_1.geometry}
        material={materials["Material.004"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane004_2.geometry}
        material={materials["Giriş_İçduvar01.001"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane005.geometry}
        material={materials["Wooden plank.001"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane005_1.geometry}
        material={materials["Simple Marble Procedural.001"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane005_2.geometry}
        material={materials["Marble tiles 10.001"]}
      />
    </group>
  );
}

useGLTF.preload(`/models/Villa01_Partial.glb`);
