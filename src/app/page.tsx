"use client";
import styles from "./page.module.css";
import CameraRoll from "@/components/CameraRoll/CameraRoll";
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import Scene from "@/components/Three/Scene";
import { useCameraModelStore } from "@/store/useCameraModelStore";
import { useCameraStore } from "@/store/useCameraStore";
import { useSDCardModelStore } from "@/store/useSDCardModelStore";
import MobileContent from "@/components/MobileContent/MobileContent";
import { useIsMobile } from "@/hooks/useIsMobile";

export default function Home() {
  const [isWebStarted, setIsWebStarted] = useState(false);
  const [mounted, setMounted] = useState(false);

  const headerRef = useRef<HTMLDivElement>(null);
  const cameraRollRef = useRef<HTMLDivElement>(null);
  const customCursorRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<number | null>(null);
  const sceneRef = useRef<HTMLDivElement>(null);
  const cameraModelToggle = useCameraModelStore((s) => s.toggle);
  const cameraToggle = useCameraStore((s) => s.toggle);
  const sdCardModelToggle = useSDCardModelStore((s) => s.toggle);
  const isMobile = useIsMobile();

  useEffect(() => {
    setMounted(true);
  }, []);
  useEffect(() => {
    if (!mounted || isMobile) return;
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
  }, [mounted, isMobile]);
  useEffect(() => {
    if (customCursorRef.current) {
      gsap.fromTo(
        customCursorRef.current,
        { scale: 0 },
        { scale: 1, duration: 0.4, ease: "back.out(1.7)" }
      );
    }
  }, []);
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
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
    // setTimeout(() => {
    //   cameraModelToggle("introPosition");
    // }, 2000);
    // setTimeout(() => {
    //   cameraModelToggle("openCase");
    // }, 2500);
    // setTimeout(() => {
    //   cameraModelToggle("openCase");
    // }, 300);
    if (sceneRef.current) {
      sceneRef.current.style.top = "0";
    }
    setTimeout(() => {
      cameraModelToggle("introRotation");
      cameraToggle("backZoomIn");
    }, 1400);
    setTimeout(() => {
      sdCardModelToggle("intro");
    }, 2000);

    timeoutRef.current = window.setTimeout(() => setIsWebStarted(true), 1200);
  };
  if (isMobile === null) {
    return null;
  }
  return (
    <div className={styles.page}>
      {!isMobile ? (
        <>
          <div className={styles.header} ref={headerRef} onClick={handleStart}>
            <h1>guillermo bernal</h1>
          </div>
          {!isWebStarted && <CameraRoll containerRef={cameraRollRef} />}
          <div ref={customCursorRef} className={styles.cursor}>
            click to start!
          </div>
          <Scene ref={sceneRef} />
          <div className={styles.links}>
            <a href="">cv</a>
            <a href="">linkedin</a>
            <a href="">blog</a>
          </div>
        </>
      ) : (
        <MobileContent />
      )}
    </div>
  );
}
