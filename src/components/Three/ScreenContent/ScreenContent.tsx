"use client";
import React, { useState, useEffect } from "react";
import { useCameraModelStore } from "@/store/useCameraModelStore";

export const ScreenContent: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [noiseOffset, setNoiseOffset] = useState(0);
  const animations = useCameraModelStore((s) => s.animations);

  const images = [
    "/images/camera_roll/1.jpg",
    "/images/camera_roll/2.jpg",
    "/images/camera_roll/3.jpg",
  ];

  // Animación del ruido
  useEffect(() => {
    const noiseInterval = setInterval(() => {
      setNoiseOffset(Math.random() * 100);
    }, 50);

    return () => clearInterval(noiseInterval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  // Generar efectos dinámicos basados en las animaciones
  const getScreenEffects = () => {
    let filters = [];

    // Pixelado cuando se extiende el lens
    if (animations.extendLens) {
      filters.push("contrast(1.5)");
      // Simulamos pixelado con CSS
      filters.push("blur(0.5px)");
    }

    // Ruido cuando la tapa está abierta
    if (animations.openCase) {
      filters.push("brightness(0.9)");
      filters.push("saturate(1.2)");
    }

    // Aberración cromática cuando hay movimiento
    filters.push("hue-rotate(2deg)");

    return filters.join(" ");
  };

  return (
    <div
      className="screen-container"
      style={{
        width: "200px",
        height: "150px",
        background: "#000",
        border: "2px solid #333",
        borderRadius: "8px",
        overflow: "hidden",
        position: "relative",
        // Efectos aplicados solo a este contenedor
        filter: getScreenEffects(),
      }}
    >
      {/* Imagen principal con efectos específicos */}
      <img
        src={images[currentImage]}
        alt="Camera Display"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          // Pixelado CSS
          imageRendering: animations.extendLens ? "pixelated" : "auto",
          // Aberración cromática simulada
          textShadow: animations.openCase ? "2px 0 red, -2px 0 cyan" : "none",
        }}
      />

      {/* Layer de ruido animado */}
      <div
        className="noise-layer"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: animations.openCase
            ? `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='${
                0.9 + noiseOffset * 0.01
              }' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.1'/%3E%3C/svg%3E")`
            : "none",
          mixBlendMode: "multiply",
          pointerEvents: "none",
        }}
      />

      {/* Overlay con información */}
      <div
        style={{
          position: "absolute",
          top: "10px",
          left: "10px",
          color: "white",
          fontSize: "12px",
          textShadow: "1px 1px 2px black",
          fontFamily: "monospace",
        }}
      >
        <div>📸 Canon EOS</div>
        <div>ISO: {animations.extendLens ? "800" : "400"}</div>
        <div>F/{animations.openCase ? "1.4" : "2.8"}</div>
        <div>{new Date().toLocaleTimeString()}</div>
      </div>

      {/* Efectos de aberración cromática */}
      {animations.openCase && (
        <div
          className="chromatic-aberration"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "linear-gradient(45deg, rgba(255,0,0,0.05) 0%, transparent 25%, rgba(0,255,255,0.05) 75%, transparent 100%)",
            pointerEvents: "none",
            animation: "chromaticShift 2s ease-in-out infinite",
          }}
        />
      )}

      {/* Scanlines effect */}
      <div
        className="scanlines"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,0,0.03) 2px, rgba(0,255,0,0.03) 4px)",
          pointerEvents: "none",
          opacity: animations.extendLens ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      />
    </div>
  );
};
