"use client";
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import CameraModel from "./CameraModel";
import styles from "./Scene.module.css";
import SDModel from "./SDModel";
import { useFrame } from "@react-three/fiber";
import { gsap } from "gsap";

export function useGSAPFrame() {
  useFrame(() => {
    gsap.ticker.tick(); // 👈 sincroniza GSAP con el loop de R3F
  });
}

export default function Scene() {
  return (
    <>
      <Canvas className={styles.canvas}>
        <Suspense fallback={null}>
          {/* <PerspectiveCamera position={[0, -20, 0]} makeDefault /> */}
          <Environment preset="city" />
          <OrbitControls minDistance={300} />
          <CameraModel />
          <SDModel />
        </Suspense>
      </Canvas>
    </>
  );
}
