import { useCameraStore } from "@/store/useCameraStore";
import { PerspectiveCamera } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import React, { useRef, useState } from "react";
import * as THREE from "three";

export default function Camera() {
  const animations = useCameraStore((s) => s.animations);
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { viewport } = useThree();

  const positionBackZoomOut = [0, 30, -200];
  const rotationBackZoomOut = [0, Math.PI, 0];
  const positionBackZoomIn = [30, 35, -80];
  const rotationBackZoomIn = [0, Math.PI, 0];
  const positionFront = [0, 30, 400];
  const rotationFront = [0, 0, 0];

  // Mouse movement handler
  React.useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      // Normalize mouse position to -1 to 1 range
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame(() => {
    if (cameraRef.current) {
      // Determinar posición y rotación objetivo basada en las animaciones
      let targetPosition, targetRotation;

      if (animations.front) {
        targetPosition = positionFront;
        targetRotation = rotationFront;
      } else if (animations.backZoomIn) {
        targetPosition = positionBackZoomIn;
        targetRotation = rotationBackZoomIn;
      } else {
        // backZoomOut (default)
        targetPosition = positionBackZoomOut;
        targetRotation = rotationBackZoomOut;
      }

      // Mouse parallax offset (adjust multiplier for more/less movement)
      const mouseInfluence = 0.3; // Adjust this value to control intensity
      const mouseOffsetX = -mousePosition.x * mouseInfluence;
      const mouseOffsetY = mousePosition.y * mouseInfluence;

      // Animación suave de posición
      const currentPosition = cameraRef.current.position;
      const currentRotation = cameraRef.current.rotation;

      // Interpolación de posición con mouse offset
      currentPosition.x =
        currentPosition.x +
        (targetPosition[0] + mouseOffsetX - currentPosition.x) * 0.12;
      currentPosition.y =
        currentPosition.y +
        (targetPosition[1] + mouseOffsetY - currentPosition.y) * 0.12;
      currentPosition.z =
        currentPosition.z + (targetPosition[2] - currentPosition.z) * 0.12;

      // Interpolación de rotación
      currentRotation.y =
        currentRotation.y + (targetRotation[1] - currentRotation.y) * 0.12;
    }
  });

  return (
    <PerspectiveCamera
      position={[30, 35, -80]}
      rotation={[0, Math.PI, 0]}
      makeDefault
      ref={cameraRef}
    />
  );
}
