"use client";
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import CameraModel from "./CameraModel";
import styles from "./Scene.module.css";
import SDModel from "./SDModel";
import Camera from "./Camera";
import {
  ChromaticAberration,
  EffectComposer,
  Noise,
  Pixelation,
} from "@react-three/postprocessing";

export default function Scene() {
  return (
    <>
      <Canvas className={styles.canvas}>
        <Suspense fallback={null}>
          <Camera />
          <Environment preset="city" />
          {/* <OrbitControls minDistance={100} /> */}
          <CameraModel />
          <SDModel />
          {/* <EffectComposer>
            <Pixelation granularity={5} />
            <Noise opacity={0.1} />
            <ChromaticAberration offset={[0.002, 0.002]} />
          </EffectComposer> */}
        </Suspense>
      </Canvas>
    </>
  );
}
