"use client";
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { forwardRef, Suspense } from "react";
import CameraModel from "./CameraModel";
import styles from "./Scene.module.css";
import SDModel from "./SDModel";
import Camera from "./Camera";
import { useTranslations } from "next-intl";

import {
  ChromaticAberration,
  EffectComposer,
  Noise,
  Pixelation,
} from "@react-three/postprocessing";

const Scene = forwardRef<HTMLDivElement, {}>((props, ref) => {
  const t = useTranslations("Cards");
  const translations = {
    slide0Title: t("0.Slides.0.presentation"),
    slide0Controls: t("0.Slides.0.controls"),
    slide1Controls: t("0.Slides.1.controls"),
    slide1Index0: t("0.Slides.1.index.0"),
    slide1Index1: t("0.Slides.1.index.1"),
    slide1Index2: t("0.Slides.1.index.2"),
    slide1Index3: t("0.Slides.1.index.3"),
  };
  return (
    <div className={styles.canvas} ref={ref}>
      <Canvas gl={{ alpha: true }}>
        <Suspense fallback={null}>
          <Camera />
          <Environment
            preset="city"
            backgroundIntensity={0}
            environmentIntensity={0.7}
          />
          <CameraModel translations={translations} />
          <SDModel />
        </Suspense>
      </Canvas>
    </div>
  );
});

export default Scene;
