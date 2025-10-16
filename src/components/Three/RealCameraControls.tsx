"use client";
import React from "react";
import { useCameraStore } from "@/store/useCameraStore";

export default function RealCameraControls() {
  const toggle = useCameraStore((s) => s.toggle);
  const play = useCameraStore((s) => s.play);
  const stop = useCameraStore((s) => s.stop);

  return (
    <div style={{ position: "absolute", top: 120, left: 20, zIndex: 10 }}>
      <button onClick={() => toggle("front")}>Front</button>
      <button onClick={() => toggle("backZoomIn")}>Back Zoom In</button>
      <button onClick={() => toggle("backZoomOut")}>Back Zoom Out</button>
    </div>
  );
}
