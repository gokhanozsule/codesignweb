"use client";

import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { models } from "@/constants";

export function Torus01(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(models.Torus01);
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    actions["Take 001"].timeScale = "0.5";
    actions["Take 001"].reset().fadeIn(0.5).play();
  }, []);

  useFrame((_, delta) => {
    group.current.children[0].children[1].children[0].rotation.y += delta;
    group.current.children[0].children[1].children[0].rotation.x += delta;
    group.current.children[0].children[2].children[0].rotation.x += delta;
    group.current.children[0].children[2].children[1].rotation.x += delta;
    group.current.children[0].children[2].children[2].rotation.x += delta;
    group.current.children[0].children[2].children[3].rotation.x += delta;
    group.current.children[0].children[2].children[4].rotation.x += delta;
    group.current.children[0].children[2].children[5].rotation.x += delta;
    group.current.children[0].children[2].children[6].rotation.x += delta;
    group.current.children[0].children[2].children[7].rotation.x += delta;
    group.current.children[0].children[2].children[8].rotation.x += delta;
    group.current.children[0].children[2].children[9].rotation.x += delta;
    group.current.children[0].children[2].children[10].rotation.x += delta;
    group.current.children[0].children[2].children[11].rotation.x += delta;
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="Sketchfab_model"
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.018}
        >
          <group
            name="f2fe7fbafa5c49b19b55eb42f79c41affbx"
            rotation={[Math.PI, 0, 0]}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="Camera001"
                  position={[-4.738, -271.712, 63.529]}
                  rotation={[Math.PI / 2, -0.03, 0]}
                >
                  <group name="Object_224" />
                </group>
                <group
                  name="Camera001Target"
                  position={[-2.839, -207.372, 63.529]}
                />
                <group name="Sphere002" position={[1.513, -119.437, 65.511]}>
                  <mesh
                    name="Sphere002_04_-_Default_0"
                    castShadow
                    receiveShadow
                    geometry={nodes["Sphere002_04_-_Default_0"].geometry}
                    material={materials["04_-_Default"]}
                  />
                </group>
                <group name="text" position={[-2.983, -208.046, 65.88]}>
                  <group
                    name="Text001"
                    position={[0, 87.727, 6.642]}
                    rotation={[Math.PI / 2, 0, 0]}
                    scale={0.029}
                  >
                    <mesh
                      name="Text001_02_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["Text001_02_-_Default_0"].geometry}
                      material={materials["02_-_Default"]}
                      position={[0, 0, 0]}
                    />
                  </group>
                </group>
                <group
                  name="torus"
                  position={[0, -114.957, 65.511]}
                  rotation={[-Math.PI, 0, -Math.PI]}
                >
                  <group name="Torus001" position={[0, 114.957, 0]}>
                    <group name="Object_6" rotation={[0, 1.571, 0]}>
                      <mesh
                        name="Torus001_01_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Torus001_01_-_Default_0"].geometry}
                        material={materials["01_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Torus002"
                    position={[10.019, 114.519, 0]}
                    rotation={[0, 0, -0.087]}
                  >
                    <group name="Object_9" rotation={[0, 1.571, 0]}>
                      <mesh
                        name="Torus002_01_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Torus002_01_-_Default_0"].geometry}
                        material={materials["01_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Torus003"
                    position={[19.962, 113.21, 0]}
                    rotation={[0, 0, -0.175]}
                  >
                    <group name="Object_12" rotation={[0, 1.571, 0]}>
                      <mesh
                        name="Torus003_01_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Torus003_01_-_Default_0"].geometry}
                        material={materials["01_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Torus004"
                    position={[29.753, 111.04, 0]}
                    rotation={[0, 0, -0.262]}
                  >
                    <group name="Object_15" rotation={[0, 1.571, 0]}>
                      <mesh
                        name="Torus004_01_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Torus004_01_-_Default_0"].geometry}
                        material={materials["01_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Torus005"
                    position={[39.318, 108.024, 0]}
                    rotation={[0, 0, -Math.PI / 9]}
                  >
                    <group name="Object_18" rotation={[0, 1.571, 0]}>
                      <mesh
                        name="Torus005_01_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Torus005_01_-_Default_0"].geometry}
                        material={materials["01_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Torus006"
                    position={[48.583, 104.186, 0]}
                    rotation={[0, 0, -0.436]}
                  >
                    <group name="Object_21" rotation={[0, 1.571, 0]}>
                      <mesh
                        name="Torus006_01_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Torus006_01_-_Default_0"].geometry}
                        material={materials["01_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Torus007"
                    position={[57.478, 99.556, 0]}
                    rotation={[0, 0, -Math.PI / 6]}
                  >
                    <group name="Object_24" rotation={[0, 1.571, 0]}>
                      <mesh
                        name="Torus007_01_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Torus007_01_-_Default_0"].geometry}
                        material={materials["01_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Torus008"
                    position={[65.937, 94.167, 0]}
                    rotation={[0, 0, -0.611]}
                  >
                    <group name="Object_27" rotation={[0, 1.571, 0]}>
                      <mesh
                        name="Torus008_01_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Torus008_01_-_Default_0"].geometry}
                        material={materials["01_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Torus009"
                    position={[73.893, 88.062, 0]}
                    rotation={[0, 0, -0.698]}
                  >
                    <group name="Object_30" rotation={[0, 1.571, 0]}>
                      <mesh
                        name="Torus009_01_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Torus009_01_-_Default_0"].geometry}
                        material={materials["01_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Torus010"
                    position={[81.287, 81.287, 0]}
                    rotation={[0, 0, -Math.PI / 4]}
                  >
                    <group name="Object_33" rotation={[0, 1.571, 0]}>
                      <mesh
                        name="Torus010_01_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Torus010_01_-_Default_0"].geometry}
                        material={materials["01_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Torus011"
                    position={[88.062, 73.893, 0]}
                    rotation={[0, 0, -0.873]}
                  >
                    <group name="Object_36" rotation={[0, 1.571, 0]}>
                      <mesh
                        name="Torus011_01_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Torus011_01_-_Default_0"].geometry}
                        material={materials["01_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Torus012"
                    position={[94.167, 65.937, 0]}
                    rotation={[0, 0, -0.96]}
                  >
                    <group name="Object_39" rotation={[0, 1.571, 0]}>
                      <mesh
                        name="Torus012_01_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Torus012_01_-_Default_0"].geometry}
                        material={materials["01_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Torus013"
                    position={[99.556, 57.478, 0]}
                    rotation={[0, 0, -Math.PI / 3]}
                  >
                    <group name="Object_42" rotation={[0, 1.571, 0]}>
                      <mesh
                        name="Torus013_01_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Torus013_01_-_Default_0"].geometry}
                        material={materials["01_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Torus014"
                    position={[104.186, 48.583, 0]}
                    rotation={[0, 0, -1.134]}
                  >
                    <group name="Object_45" rotation={[0, 1.571, 0]}>
                      <mesh
                        name="Torus014_01_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Torus014_01_-_Default_0"].geometry}
                        material={materials["01_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Torus015"
                    position={[108.024, 39.318, 0]}
                    rotation={[0, 0, -1.222]}
                  >
                    <group name="Object_48" rotation={[0, 1.571, 0]}>
                      <mesh
                        name="Torus015_01_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Torus015_01_-_Default_0"].geometry}
                        material={materials["01_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Torus016"
                    position={[111.04, 29.753, 0]}
                    rotation={[0, 0, -1.309]}
                  >
                    <group name="Object_51" rotation={[0, 1.571, 0]}>
                      <mesh
                        name="Torus016_01_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Torus016_01_-_Default_0"].geometry}
                        material={materials["01_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Torus017"
                    position={[113.21, 19.962, 0]}
                    rotation={[0, 0, -1.396]}
                  >
                    <group name="Object_54" rotation={[0, 1.571, 0]}>
                      <mesh
                        name="Torus017_01_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Torus017_01_-_Default_0"].geometry}
                        material={materials["01_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Torus018"
                    position={[114.519, 10.019, 0]}
                    rotation={[0, 0, -1.484]}
                  >
                    <group name="Object_57" rotation={[0, 1.571, 0]}>
                      <mesh
                        name="Torus018_01_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Torus018_01_-_Default_0"].geometry}
                        material={materials["01_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Torus019"
                    position={[114.957, 0, 0]}
                    rotation={[0, 0, -Math.PI / 2]}
                  >
                    <group name="Object_60" rotation={[0, 1.571, 0]}>
                      <mesh
                        name="Torus019_01_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Torus019_01_-_Default_0"].geometry}
                        material={materials["01_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Torus020"
                    position={[114.519, -10.019, 0]}
                    rotation={[0, 0, -1.658]}
                  >
                    <group name="Object_63" rotation={[0, 1.571, 0]}>
                      <mesh
                        name="Torus020_01_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Torus020_01_-_Default_0"].geometry}
                        material={materials["01_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Torus021"
                    position={[113.21, -19.962, 0]}
                    rotation={[0, 0, -1.745]}
                  >
                    <group name="Object_66" rotation={[0, 1.571, 0]}>
                      <mesh
                        name="Torus021_01_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Torus021_01_-_Default_0"].geometry}
                        material={materials["01_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Torus022"
                    position={[111.04, -29.753, 0]}
                    rotation={[0, 0, -1.833]}
                  >
                    <group name="Object_69" rotation={[0, 1.571, 0]}>
                      <mesh
                        name="Torus022_01_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Torus022_01_-_Default_0"].geometry}
                        material={materials["01_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Torus023"
                    position={[108.024, -39.318, 0]}
                    rotation={[0, 0, -1.92]}
                  >
                    <group name="Object_72" rotation={[0, 1.571, 0]}>
                      <mesh
                        name="Torus023_01_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Torus023_01_-_Default_0"].geometry}
                        material={materials["01_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Torus024"
                    position={[104.186, -48.583, 0]}
                    rotation={[0, 0, -2.007]}
                  >
                    <group name="Object_75" rotation={[0, 1.571, 0]}>
                      <mesh
                        name="Torus024_01_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Torus024_01_-_Default_0"].geometry}
                        material={materials["01_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Torus025"
                    position={[99.556, -57.478, 0]}
                    rotation={[0, 0, -2.094]}
                  >
                    <group name="Object_78" rotation={[0, 1.571, 0]}>
                      <mesh
                        name="Torus025_01_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Torus025_01_-_Default_0"].geometry}
                        material={materials["01_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Torus026"
                    position={[94.167, -65.937, 0]}
                    rotation={[0, 0, -2.182]}
                  >
                    <group name="Object_81" rotation={[0, 1.571, 0]}>
                      <mesh
                        name="Torus026_01_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Torus026_01_-_Default_0"].geometry}
                        material={materials["01_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Torus027"
                    position={[88.062, -73.893, 0]}
                    rotation={[0, 0, -2.269]}
                  >
                    <group name="Object_84" rotation={[0, 1.571, 0]}>
                      <mesh
                        name="Torus027_01_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Torus027_01_-_Default_0"].geometry}
                        material={materials["01_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Torus028"
                    position={[81.287, -81.287, 0]}
                    rotation={[0, 0, -2.356]}
                  >
                    <group name="Object_87" rotation={[0, 1.571, 0]}>
                      <mesh
                        name="Torus028_01_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Torus028_01_-_Default_0"].geometry}
                        material={materials["01_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Torus029"
                    position={[73.893, -88.062, 0]}
                    rotation={[0, 0, -2.443]}
                  >
                    <group name="Object_90" rotation={[0, 1.571, 0]}>
                      <mesh
                        name="Torus029_01_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Torus029_01_-_Default_0"].geometry}
                        material={materials["01_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Torus030"
                    position={[65.937, -94.167, 0]}
                    rotation={[0, 0, -2.531]}
                  >
                    <group name="Object_93" rotation={[0, 1.571, 0]}>
                      <mesh
                        name="Torus030_01_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Torus030_01_-_Default_0"].geometry}
                        material={materials["01_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Torus031"
                    position={[57.478, -99.556, 0]}
                    rotation={[0, 0, -2.618]}
                  >
                    <group name="Object_96" rotation={[0, 1.571, 0]}>
                      <mesh
                        name="Torus031_01_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Torus031_01_-_Default_0"].geometry}
                        material={materials["01_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Torus032"
                    position={[48.583, -104.186, 0]}
                    rotation={[0, 0, -2.705]}
                  >
                    <group name="Object_99" rotation={[0, 1.571, 0]}>
                      <mesh
                        name="Torus032_01_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Torus032_01_-_Default_0"].geometry}
                        material={materials["01_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Torus033"
                    position={[39.318, -108.024, 0]}
                    rotation={[0, 0, -2.793]}
                  >
                    <group name="Object_102" rotation={[0, 1.571, 0]}>
                      <mesh
                        name="Torus033_01_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Torus033_01_-_Default_0"].geometry}
                        material={materials["01_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Torus034"
                    position={[29.753, -111.04, 0]}
                    rotation={[0, 0, -2.88]}
                  >
                    <group name="Object_105" rotation={[0, 1.571, 0]}>
                      <mesh
                        name="Torus034_01_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Torus034_01_-_Default_0"].geometry}
                        material={materials["01_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Torus035"
                    position={[19.962, -113.21, 0]}
                    rotation={[0, 0, -2.967]}
                  >
                    <group name="Object_108" rotation={[0, 1.571, 0]}>
                      <mesh
                        name="Torus035_01_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Torus035_01_-_Default_0"].geometry}
                        material={materials["01_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Torus036"
                    position={[10.019, -114.519, 0]}
                    rotation={[0, 0, -3.054]}
                  >
                    <group name="Object_111" rotation={[0, 1.571, 0]}>
                      <mesh
                        name="Torus036_01_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Torus036_01_-_Default_0"].geometry}
                        material={materials["01_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Torus037"
                    position={[0, -114.957, 0]}
                    rotation={[0, 0, -Math.PI]}
                  >
                    <group name="Object_114" rotation={[0, 1.571, 0]}>
                      <mesh
                        name="Torus037_01_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Torus037_01_-_Default_0"].geometry}
                        material={materials["01_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Torus038"
                    position={[-10.019, -114.519, 0]}
                    rotation={[0, 0, 3.054]}
                  >
                    <group name="Object_117" rotation={[0, 1.571, 0]}>
                      <mesh
                        name="Torus038_01_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Torus038_01_-_Default_0"].geometry}
                        material={materials["01_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Torus039"
                    position={[-19.962, -113.21, 0]}
                    rotation={[0, 0, 2.967]}
                  >
                    <group name="Object_120" rotation={[0, 1.571, 0]}>
                      <mesh
                        name="Torus039_01_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Torus039_01_-_Default_0"].geometry}
                        material={materials["01_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Torus040"
                    position={[-29.753, -111.04, 0]}
                    rotation={[0, 0, 2.88]}
                  >
                    <group name="Object_123" rotation={[0, 1.571, 0]}>
                      <mesh
                        name="Torus040_01_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Torus040_01_-_Default_0"].geometry}
                        material={materials["01_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Torus041"
                    position={[-39.318, -108.024, 0]}
                    rotation={[0, 0, 2.793]}
                  >
                    <group name="Object_126" rotation={[0, 1.571, 0]}>
                      <mesh
                        name="Torus041_01_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Torus041_01_-_Default_0"].geometry}
                        material={materials["01_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Torus042"
                    position={[-48.583, -104.186, 0]}
                    rotation={[0, 0, 2.705]}
                  >
                    <group name="Object_129" rotation={[0, 1.571, 0]}>
                      <mesh
                        name="Torus042_01_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Torus042_01_-_Default_0"].geometry}
                        material={materials["01_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Torus043"
                    position={[-57.478, -99.556, 0]}
                    rotation={[0, 0, 2.618]}
                  >
                    <group name="Object_132" rotation={[0, 1.571, 0]}>
                      <mesh
                        name="Torus043_01_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Torus043_01_-_Default_0"].geometry}
                        material={materials["01_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Torus044"
                    position={[-65.937, -94.167, 0]}
                    rotation={[0, 0, 2.531]}
                  >
                    <group name="Object_135" rotation={[0, 1.571, 0]}>
                      <mesh
                        name="Torus044_01_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Torus044_01_-_Default_0"].geometry}
                        material={materials["01_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Torus045"
                    position={[-73.893, -88.062, 0]}
                    rotation={[0, 0, 2.443]}
                  >
                    <group name="Object_138" rotation={[0, 1.571, 0]}>
                      <mesh
                        name="Torus045_01_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Torus045_01_-_Default_0"].geometry}
                        material={materials["01_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Torus046"
                    position={[-81.287, -81.287, 0]}
                    rotation={[0, 0, 2.356]}
                  >
                    <group name="Object_141" rotation={[0, 1.571, 0]}>
                      <mesh
                        name="Torus046_01_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Torus046_01_-_Default_0"].geometry}
                        material={materials["01_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Torus047"
                    position={[-88.062, -73.893, 0]}
                    rotation={[0, 0, 2.269]}
                  >
                    <group name="Object_144" rotation={[0, 1.571, 0]}>
                      <mesh
                        name="Torus047_01_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Torus047_01_-_Default_0"].geometry}
                        material={materials["01_-_Default"]}
                      />
                    </group>
                    <group
                      name="Sphere001"
                      position={[-2.427, 39.48, 28.769]}
                      rotation={[Math.PI, 0, -0.873]}
                    />
                  </group>
                  <group
                    name="Torus048"
                    position={[-94.167, -65.937, 0]}
                    rotation={[0, 0, 2.182]}
                  >
                    <group name="Object_149" rotation={[0, 1.571, 0]}>
                      <mesh
                        name="Torus048_01_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Torus048_01_-_Default_0"].geometry}
                        material={materials["01_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Torus049"
                    position={[-99.556, -57.478, 0]}
                    rotation={[0, 0, 2.094]}
                  >
                    <group name="Object_152" rotation={[0, 1.571, 0]}>
                      <mesh
                        name="Torus049_01_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Torus049_01_-_Default_0"].geometry}
                        material={materials["01_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Torus050"
                    position={[-104.186, -48.583, 0]}
                    rotation={[0, 0, 2.007]}
                  >
                    <group name="Object_155" rotation={[0, 1.571, 0]}>
                      <mesh
                        name="Torus050_01_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Torus050_01_-_Default_0"].geometry}
                        material={materials["01_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Torus051"
                    position={[-108.024, -39.318, 0]}
                    rotation={[0, 0, 1.92]}
                  >
                    <group name="Object_158" rotation={[0, 1.571, 0]}>
                      <mesh
                        name="Torus051_01_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Torus051_01_-_Default_0"].geometry}
                        material={materials["01_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Torus052"
                    position={[-111.04, -29.753, 0]}
                    rotation={[0, 0, 1.833]}
                  >
                    <group name="Object_161" rotation={[0, 1.571, 0]}>
                      <mesh
                        name="Torus052_01_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Torus052_01_-_Default_0"].geometry}
                        material={materials["01_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Torus053"
                    position={[-113.21, -19.962, 0]}
                    rotation={[0, 0, 1.745]}
                  >
                    <group name="Object_164" rotation={[0, 1.571, 0]}>
                      <mesh
                        name="Torus053_01_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Torus053_01_-_Default_0"].geometry}
                        material={materials["01_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Torus054"
                    position={[-114.519, -10.019, 0]}
                    rotation={[0, 0, 1.658]}
                  >
                    <group name="Object_167" rotation={[0, 1.571, 0]}>
                      <mesh
                        name="Torus054_01_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Torus054_01_-_Default_0"].geometry}
                        material={materials["01_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Torus055"
                    position={[-114.957, 0, 0]}
                    rotation={[0, 0, Math.PI / 2]}
                  >
                    <group name="Object_170" rotation={[0, 1.571, 0]}>
                      <mesh
                        name="Torus055_01_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Torus055_01_-_Default_0"].geometry}
                        material={materials["01_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Torus056"
                    position={[-114.519, 10.019, 0]}
                    rotation={[0, 0, 1.484]}
                  >
                    <group name="Object_173" rotation={[0, 1.571, 0]}>
                      <mesh
                        name="Torus056_01_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Torus056_01_-_Default_0"].geometry}
                        material={materials["01_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Torus057"
                    position={[-113.21, 19.962, 0]}
                    rotation={[0, 0, 1.396]}
                  >
                    <group name="Object_176" rotation={[0, 1.571, 0]}>
                      <mesh
                        name="Torus057_01_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Torus057_01_-_Default_0"].geometry}
                        material={materials["01_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Torus058"
                    position={[-111.04, 29.753, 0]}
                    rotation={[0, 0, 1.309]}
                  >
                    <group name="Object_179" rotation={[0, 1.571, 0]}>
                      <mesh
                        name="Torus058_01_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Torus058_01_-_Default_0"].geometry}
                        material={materials["01_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Torus059"
                    position={[-108.024, 39.318, 0]}
                    rotation={[0, 0, 1.222]}
                  >
                    <group name="Object_182" rotation={[0, 1.571, 0]}>
                      <mesh
                        name="Torus059_01_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Torus059_01_-_Default_0"].geometry}
                        material={materials["01_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Torus060"
                    position={[-104.186, 48.583, 0]}
                    rotation={[0, 0, 1.134]}
                  >
                    <group name="Object_185" rotation={[0, 1.571, 0]}>
                      <mesh
                        name="Torus060_01_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Torus060_01_-_Default_0"].geometry}
                        material={materials["01_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Torus061"
                    position={[-99.556, 57.478, 0]}
                    rotation={[0, 0, Math.PI / 3]}
                  >
                    <group name="Object_188" rotation={[0, 1.571, 0]}>
                      <mesh
                        name="Torus061_01_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Torus061_01_-_Default_0"].geometry}
                        material={materials["01_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Torus062"
                    position={[-94.167, 65.937, 0]}
                    rotation={[0, 0, 0.96]}
                  >
                    <group name="Object_191" rotation={[0, 1.571, 0]}>
                      <mesh
                        name="Torus062_01_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Torus062_01_-_Default_0"].geometry}
                        material={materials["01_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Torus063"
                    position={[-88.062, 73.893, 0]}
                    rotation={[0, 0, 0.873]}
                  >
                    <group name="Object_194" rotation={[0, 1.571, 0]}>
                      <mesh
                        name="Torus063_01_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Torus063_01_-_Default_0"].geometry}
                        material={materials["01_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Torus064"
                    position={[-81.287, 81.287, 0]}
                    rotation={[0, 0, Math.PI / 4]}
                  >
                    <group name="Object_197" rotation={[0, 1.571, 0]}>
                      <mesh
                        name="Torus064_01_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Torus064_01_-_Default_0"].geometry}
                        material={materials["01_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Torus065"
                    position={[-73.893, 88.062, 0]}
                    rotation={[0, 0, 0.698]}
                  >
                    <group name="Object_200" rotation={[0, 1.571, 0]}>
                      <mesh
                        name="Torus065_01_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Torus065_01_-_Default_0"].geometry}
                        material={materials["01_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Torus066"
                    position={[-65.937, 94.167, 0]}
                    rotation={[0, 0, 0.611]}
                  >
                    <group name="Object_203" rotation={[0, 1.571, 0]}>
                      <mesh
                        name="Torus066_01_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Torus066_01_-_Default_0"].geometry}
                        material={materials["01_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Torus067"
                    position={[-57.479, 99.556, 0]}
                    rotation={[0, 0, Math.PI / 6]}
                  >
                    <group name="Object_206" rotation={[0, 1.571, 0]}>
                      <mesh
                        name="Torus067_01_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Torus067_01_-_Default_0"].geometry}
                        material={materials["01_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Torus068"
                    position={[-48.583, 104.186, 0]}
                    rotation={[0, 0, 0.436]}
                  >
                    <group name="Object_209" rotation={[0, 1.571, 0]}>
                      <mesh
                        name="Torus068_01_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Torus068_01_-_Default_0"].geometry}
                        material={materials["01_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Torus069"
                    position={[-39.318, 108.024, 0]}
                    rotation={[0, 0, Math.PI / 9]}
                  >
                    <group name="Object_212" rotation={[0, 1.571, 0]}>
                      <mesh
                        name="Torus069_01_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Torus069_01_-_Default_0"].geometry}
                        material={materials["01_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Torus070"
                    position={[-29.753, 111.04, 0]}
                    rotation={[0, 0, 0.262]}
                  >
                    <group name="Object_215" rotation={[0, 1.571, 0]}>
                      <mesh
                        name="Torus070_01_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Torus070_01_-_Default_0"].geometry}
                        material={materials["01_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Torus071"
                    position={[-19.962, 113.21, 0]}
                    rotation={[0, 0, 0.175]}
                  >
                    <group name="Object_218" rotation={[0, 1.571, 0]}>
                      <mesh
                        name="Torus071_01_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Torus071_01_-_Default_0"].geometry}
                        material={materials["01_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Torus072"
                    position={[-10.019, 114.519, 0]}
                    rotation={[0, 0, 0.087]}
                  >
                    <group name="Object_221" rotation={[0, 1.571, 0]}>
                      <mesh
                        name="Torus072_01_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Torus072_01_-_Default_0"].geometry}
                        material={materials["01_-_Default"]}
                      />
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
        <group>
          <mesh
            name="Object_3"
            castShadow
            receiveShadow
            geometry={nodes.Object_3.geometry}
            material={materials.Chrome}
            position={[1.5, 1.211, 0.8]}
            rotation={[-Math.PI / 2, 0, 0.291]}
            scale={0.003}
          >
            <meshBasicMaterial color="white" />
          </mesh>
        </group>
        <group>
          <mesh
            name="geo1__0"
            castShadow
            receiveShadow
            geometry={nodes.geo1__0.geometry}
            material={materials.Emission}
            position={[-1.647, 1.211, 0.528]}
            rotation={[0, -1.095, 0.603]}
            scale={0.01}
          />
          <mesh
            name="geo1__0001"
            castShadow
            receiveShadow
            geometry={nodes.geo1__0001.geometry}
            material={materials.Orange}
            position={[-1.647, 1.211, 0.528]}
            rotation={[0, -1.095, 0.603]}
            scale={0.01}
          />
          <mesh
            name="geo1__0002"
            castShadow
            receiveShadow
            geometry={nodes.geo1__0002.geometry}
            material={materials.Emission}
            position={[-1.647, 1.211, 0.528]}
            rotation={[0, -1.095, 0.603]}
            scale={0.01}
          />
          <mesh
            name="geo1__0003"
            castShadow
            receiveShadow
            geometry={nodes.geo1__0003.geometry}
            material={materials.Blue}
            position={[-1.647, 1.211, 0.528]}
            rotation={[0, -1.095, 0.603]}
            scale={0.01}
          />
          <mesh
            name="geo1__0004"
            castShadow
            receiveShadow
            geometry={nodes.geo1__0004.geometry}
            material={materials.Red}
            position={[-1.647, 1.211, 0.528]}
            rotation={[0, -1.095, 0.603]}
            scale={0.01}
          />
          <mesh
            name="geo1__0005"
            castShadow
            receiveShadow
            geometry={nodes.geo1__0005.geometry}
            material={materials.Red}
            position={[-1.647, 1.211, 0.528]}
            rotation={[0, -1.095, 0.603]}
            scale={0.01}
          />
          <mesh
            name="geo1__0006"
            castShadow
            receiveShadow
            geometry={nodes.geo1__0006.geometry}
            material={materials.Red}
            position={[-1.647, 1.211, 0.528]}
            rotation={[0, -1.095, 0.603]}
            scale={0.01}
          />
          <mesh
            name="geo1__0007"
            castShadow
            receiveShadow
            geometry={nodes.geo1__0007.geometry}
            material={materials.Red}
            position={[-1.647, 1.211, 0.528]}
            rotation={[0, -1.095, 0.603]}
            scale={0.01}
          />
          <mesh
            name="geo1__0008"
            castShadow
            receiveShadow
            geometry={nodes.geo1__0008.geometry}
            material={materials.Red}
            position={[-1.647, 1.211, 0.528]}
            rotation={[0, -1.095, 0.603]}
            scale={0.01}
          />
          <mesh
            name="geo1__0009"
            castShadow
            receiveShadow
            geometry={nodes.geo1__0009.geometry}
            material={materials.Red}
            position={[-1.647, 1.211, 0.528]}
            rotation={[0, -1.095, 0.603]}
            scale={0.01}
          />
          <mesh
            name="geo1__0010"
            castShadow
            receiveShadow
            geometry={nodes.geo1__0010.geometry}
            material={materials.Blue}
            position={[-1.647, 1.211, 0.528]}
            rotation={[0, -1.095, 0.603]}
            scale={0.01}
          />
          <mesh
            name="geo1__0011"
            castShadow
            receiveShadow
            geometry={nodes.geo1__0011.geometry}
            material={materials.Blue}
            position={[-1.647, 1.211, 0.528]}
            rotation={[0, -1.095, 0.603]}
            scale={0.01}
          />
        </group>
        <group name="Empty" position={[2.125, 1.211, 2.097]} />
      </group>
    </group>
  );
}
