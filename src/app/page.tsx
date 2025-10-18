"use client";
import styles from "./page.module.css";
import CameraRoll from "@/components/CameraRoll/CameraRoll";
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import Scene from "@/components/Three/Scene";
import CameraControls from "@/components/Three/CameraControls";
import RealCameraControls from "@/components/Three/RealCameraControls";

export default function Home() {
  const [isWebStarted, setIsWebStarted] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const cameraRollRef = useRef<HTMLDivElement>(null);
  const customCursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (headerRef.current) {
      headerRef.current.style.cursor = "none";
    }

    const move = (e: MouseEvent) => {
      if (!customCursorRef.current) return;
      gsap.to(customCursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.6,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
      if (headerRef.current) headerRef.current.style.cursor = "";
    };
  }, []);
  useEffect(() => {
    if (customCursorRef.current) {
      gsap.fromTo(
        customCursorRef.current,
        { scale: 0 },
        { scale: 1, duration: 0.4, ease: "back.out(1.7)" }
      );
    }
  }, []);
  const handleStart = () => {
    if (!headerRef.current || !cameraRollRef.current) return;
    gsap.to(headerRef.current, {
      opacity: 0,
      y: -headerRef.current?.offsetHeight,
      delay: 0.3,
      duration: 0.8,
      ease: "power2.out",
    });
    gsap.to(cameraRollRef.current, {
      y: -cameraRollRef.current?.scrollHeight,
      scaleX: 0,
      duration: 0.8,
      ease: "power2.out",
    });
    if (customCursorRef.current) {
      gsap.to(customCursorRef.current, { opacity: 0, duration: 0.4 });
    }
  };
  return (
    <div className={styles.page}>
      <div className={styles.header} ref={headerRef} onClick={handleStart}>
        <h1>guillermo bernal</h1>
      </div>
      <CameraRoll containerRef={cameraRollRef} />
      <div ref={customCursorRef} className={styles.cursor}>
        click to start!
      </div>
      {/* <Scene /> */}
      <CameraControls />
      <RealCameraControls />
    </div>
  );
}
