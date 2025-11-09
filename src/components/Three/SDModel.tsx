import React, { use, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { Group, Mesh } from "three";
import { useFrame } from "@react-three/fiber";
import { useSDCardModelStore } from "../../store/useSDCardModelStore";

export default function SDModel() {
  const { nodes, materials } = useGLTF("/models/sdtest1.glb");
  const sdCardBodyRef = useRef<Group>(null);
  const animations = useSDCardModelStore((state) => state.animations);
  const sdCardInY = 40;
  const sdCardOutY = -80;
  useFrame(() => {
    let targetY;
    if (animations.intro) {
      targetY = sdCardInY + 20;
    } else {
      targetY = animations.changeSD ? sdCardOutY : sdCardInY;
    }
    if (sdCardBodyRef.current) {
      const curlYsdCard = sdCardBodyRef.current.position.y;
      const curlXsdCard = sdCardBodyRef.current.position.x;
      sdCardBodyRef.current.position.y += (targetY - curlYsdCard) * 0.2;
    }
  });
  return (
    <group
      rotation={[Math.PI / 2, 0, Math.PI]}
      scale={0.4}
      position={[-38, 200, 0]}
      ref={sdCardBodyRef}
    >
      {Object.values(nodes)
        .filter((node: any) => node.type === "Mesh")
        .map((mesh: any) => {
          return (
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
          );
        })}
    </group>
  );
}
