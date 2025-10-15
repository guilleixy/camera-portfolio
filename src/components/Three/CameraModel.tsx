"use client";
import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { Mesh } from "three";
import { useCameraModelStore } from "@/store/useCameraModelStore";
import { useFrame } from "@react-three/fiber";

const CameraModel: React.FC = () => {
  const { nodes, materials } = useGLTF("/models/canontestcajita2.glb");

  const lensVorhangRef = useRef<Mesh>(null);
  const lens3Ref = useRef<Mesh>(null);
  const lens2Ref = useRef<Mesh>(null);
  const lensFensterRef = useRef<Mesh>(null);
  const lensGlassRef = useRef<Mesh>(null);
  const tapaRef = useRef<Mesh>(null);
  const lensInnenHuleRef = useRef<Mesh>(null);

  useFrame(() => {
    if (lens3Ref.current) {
      lens3Ref.current.position.x += 0.1;
      console.log("animating lens3");
    } else {
      console.log("lens3Ref is null");
    }
  });

  const getRefForMesh = (meshName: string) => {
    switch (meshName) {
      case "Lens_Vorhang_1": // Cambiado de "Lens_Vorhang"
      case "Lens_Vorhang_2":
        return lensVorhangRef;
      case "Lens_3_1": // Cambiado de "Lens_3"
      case "Lens_3_2":
        return lens3Ref;
      case "Lens_2_1": // Cambiado de "Lens_2"
      case "Lens_2_2":
        return lens2Ref;
      case "Lens_Fenster":
        return lensFensterRef;
      case "Lens_Glass":
        return lensGlassRef;
      case "Tapa":
        return tapaRef;
      case "Lens_Innen_Hüle":
        return lensInnenHuleRef;
      default:
        return undefined;
    }
  };

  return (
    <group rotation={[0, 0, 0]} scale={0.5}>
      {Object.values(nodes)
        .filter((node: any) => node.type === "Mesh")
        .map((mesh: any) => {
          const meshName = mesh.name;
          const ref = getRefForMesh(meshName);

          console.log(
            `Rendering mesh: ${meshName}, has ref: ${ref !== undefined}`
          );

          return (
            <mesh
              key={mesh.uuid}
              ref={ref}
              geometry={mesh.geometry}
              material={
                mesh.material ||
                materials[mesh.name] ||
                Object.values(materials)[0]
              }
              castShadow
              position={mesh.position}
              rotation={mesh.rotation}
              scale={mesh.scale}
            />
          );
        })}
    </group>
  );
};

useGLTF.preload("/models/canontestcajita2.glb");
export default CameraModel;
