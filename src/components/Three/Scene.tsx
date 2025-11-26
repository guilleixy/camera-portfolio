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
    introSlide0Title: t("Intro.Slides.0.presentation"),
    introSlide0Controls: t("Intro.Slides.0.controls"),
    introSlide1Controls: t("Intro.Slides.1.controls"),
    card0Slide0Text: t("0.Slides.0.text"),
    card0Slide1Text: t("0.Slides.1.text"),
    card0Slide2Text: t("0.Slides.2.text"),
    cards0Slide3Text: t("0.Slides.3.text"),
    cards0Slide4Text: t("0.Slides.4.text"),
    cards0Slide4lastSongText: t("0.Slides.4.lastPlayed"),
    cards0Slide4obssessionText: t("0.Slides.4.obsession"),
    cards0Slide5Text: t("0.Slides.5.text"),
    cards0Slide6Text: t("0.Slides.6.text"),
    cards1Slide0Title: t("1.Slides.0.title"),
    cards1Slide0Text1: t("1.Slides.0.text1"),
    cards1Slide0Text2: t("1.Slides.0.text2"),
    cards1Slide0GithubCTA: t("1.Slides.0.githubCTA"),
    cards1Slide1Text1: t("1.Slides.1.text1"),
    cards1Slide1Text2: t("1.Slides.1.text2"),
    cards1Slide2Text1: t("1.Slides.2.text1"),
    cards1Slide2Text2: t("1.Slides.2.text2"),
    cards1Slide3Text1: t("1.Slides.3.text1"),
    cards1Slide3Text2: t("1.Slides.3.text2"),
    cards1Slide4Text1: t("1.Slides.4.text1"),
    cards1Slide4Text2: t("1.Slides.4.text2"),
    cards1Slide5Text1: t("1.Slides.5.text1"),
    cards1Slide5Text2: t("1.Slides.5.text2"),
    cards1Slide6Text: t("1.Slides.6.text"),
    cards1Slide7Text1: t("1.Slides.7.text"),
    cards1Slide8Text1: t("1.Slides.8.text"),
    cards1Slide9Text1: t("1.Slides.9.text"),
    cards1Slide10Text: t("1.Slides.10.text"),
    cards1Slide11Text1: t("1.Slides.11.text1"),
    cards1Slide11Text2: t("1.Slides.11.text2"),
    cards1Slide12Text: t("1.Slides.12.text"),
    cards2Slide0Text1: t("2.Slides.0.text1"),
    cards2Slide0Text2: t("2.Slides.0.text2"),
    cards2Slide1Text1: t("2.Slides.1.text"),
    cards2Slide2Text1: t("2.Slides.2.text"),
    cards2Slide3Text1: t("2.Slides.3.text"),
    cards2Slide4Text1: t("2.Slides.4.text"),
    cards2Slide5Text1: t("2.Slides.5.text"),
    cards3Madrid2024: t("3.Slides.madrid2024.text"),
    cards3ACoruña2025: t("3.Slides.aCoruña2025.text"),
    cards3Barcelona2025: t("3.Slides.barcelona2025.text"),
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
