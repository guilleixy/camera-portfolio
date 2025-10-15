"use client";
import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { Mesh } from "three";
import { useCameraModelStore } from "@/store/useCameraModelStore";

const CameraModel: React.FC = () => {
  const { nodes, materials } = useGLTF("/models/canontestcajita2.glb");

  const lensVorhangRef = useRef<Mesh>(null);
  const lens3Ref = useRef<Mesh>(null);
  const lens2Ref = useRef<Mesh>(null);
  const lensFensterRef = useRef<Mesh>(null);
  const lensGlassRef = useRef<Mesh>(null);
  const tapaRef = useRef<Mesh>(null);
  const lensInnenHuleRef = useRef<Mesh>(null);

  const setRefs = useCameraModelStore((state) => state.setRefs);

  useEffect(() => {
    if (!nodes) return;

    if (nodes.Lens_Vorhang) lensVorhangRef.current = nodes.Lens_Vorhang as Mesh;
    if (nodes.Lens_3) lens3Ref.current = nodes.Lens_3 as Mesh;
    if (nodes.Lens_2) lens2Ref.current = nodes.Lens_2 as Mesh;
    if (nodes.Lens_Fenster) lensFensterRef.current = nodes.Lens_Fenster as Mesh;
    if (nodes.Lens_Glass) lensGlassRef.current = nodes.Lens_Glass as Mesh;
    if (nodes.Tapa) tapaRef.current = nodes.Tapa as Mesh;
    if (nodes["Lens_Innen_Hüle"])
      lensInnenHuleRef.current = nodes["Lens_Innen_Hüle"] as Mesh;
    setRefs({
      Lens_Vorhang: lensVorhangRef,
      Lens_3: lens3Ref,
      Lens_2: lens2Ref,
      Lens_Fenster: lensFensterRef,
      Lens_Glass: lensGlassRef,
      Tapa: tapaRef,
      Lens_Innen_Hüle: lensInnenHuleRef,
    });
  }, [nodes]);

  return (
    <group rotation={[0, 0, 0]} scale={0.5}>
      {Object.values(nodes)
        .filter((node: any) => node.type === "Mesh")
        .map((mesh: any) => {
          const meshName = mesh.name;
          let ref: React.Ref<Mesh> | undefined;
          switch (meshName) {
            case "Lens_Vorhang":
              ref = lensVorhangRef;
              break;
            case "Lens_3":
              ref = lens3Ref;
              break;
            case "Lens_2":
              ref = lens2Ref;
              break;
            case "Lens_Fenster":
              ref = lensFensterRef;
              break;
            case "Lens_Glass":
              ref = lensGlassRef;
              break;
            case "Tapa":
              ref = tapaRef;
              break;
            case "Lens_Innen_Hüle":
              ref = lensInnenHuleRef;
              break;
          }

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
              {...(mesh.position && { position: mesh.position })}
              {...(mesh.rotation && { rotation: mesh.rotation })}
              {...(mesh.scale && { scale: mesh.scale })}
            />
          );
        })}
    </group>
  );
};

useGLTF.preload("/models/canontestcajita2.glb");
export default CameraModel;
