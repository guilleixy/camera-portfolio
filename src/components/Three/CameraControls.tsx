"use client";
import React from "react";
import { useCameraModelStore } from "@/store/useCameraModelStore";
import { useSDCardModelStore } from "@/store/useSDCardModelStore";

export default function CameraControls() {
  const toggle = useCameraModelStore((s) => s.toggle);
  const play = useCameraModelStore((s) => s.play);
  const stop = useCameraModelStore((s) => s.stop);
  const toggleSDCard = useSDCardModelStore((s) => s.toggle);

  return (
    <div style={{ position: "absolute", top: 20, left: 20, zIndex: 10 }}>
      <button
        onClick={() => {
          toggle("openCase");
          toggleSDCard("changeSD");
        }}
      >
        Abrir carcasa
      </button>
      <button onClick={() => toggle("extendLens")}>
        Extender/Retraer lente
      </button>
    </div>
  );
}
