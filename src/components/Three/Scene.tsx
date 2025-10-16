"use client";
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import CameraModel from "./CameraModel";
import styles from "./Scene.module.css";
import SDModel from "./SDModel";
import Camera from "./Camera";

export default function Scene() {
  return (
    <>
      <Canvas className={styles.canvas}>
        <Suspense fallback={null}>
          <Camera />
          <Environment preset="city" />
          {/* <OrbitControls minDistance={300} /> */}
          <CameraModel />
          <SDModel />
        </Suspense>
      </Canvas>
    </>
  );
}
