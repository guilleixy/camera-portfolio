import React from "react";
import { useGLTF } from "@react-three/drei";

export default function SDModel() {
  const { nodes, materials } = useGLTF("/models/sdtest1.glb");
  return (
    <group rotation={[0, Math.PI / 2, 0]} scale={0.5} position={[0, -20, 0]}>
      {Object.values(nodes)
        .filter((node: any) => node.type === "Mesh")
        .map((mesh: any) => (
          <mesh
            key={mesh.uuid}
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
          ></mesh>
        ))}
    </group>
  );
}
