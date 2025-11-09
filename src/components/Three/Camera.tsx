import { useCameraStore } from "@/store/useCameraStore";
import { PerspectiveCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
export default function Camera() {
  const animations = useCameraStore((s) => s.animations);
  const cameraRef = useRef<any>(null);
  const positionBackZoomOut = [0, 30, -200];
  const rotationBackZoomOut = [0, Math.PI, 0];
  const positionBackZoomIn = [30, 35, -80];
  const rotationBackZoomIn = [0, Math.PI, 0];
  const positionFront = [0, 30, 400];
  const rotationFront = [0, 0, 0];
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
        // backZoomIn(default)
        targetPosition = positionBackZoomOut;
        targetRotation = rotationBackZoomOut;
      }

      // Animación suave de posición
      const currentPosition = cameraRef.current.position;
      const currentRotation = cameraRef.current.rotation;

      // Interpolación de posición
      currentPosition.x =
        currentPosition.x + (targetPosition[0] - currentPosition.x) * 0.12;
      currentPosition.y =
        currentPosition.y + (targetPosition[1] - currentPosition.y) * 0.12;
      currentPosition.z =
        currentPosition.z + (targetPosition[2] - currentPosition.z) * 0.12;

      // Interpolación de rotación
      // currentRotation.x =
      //   currentRotation.x + (targetRotation[0] - currentRotation.x) * 0.12;
      currentRotation.y =
        currentRotation.y + (targetRotation[1] - currentRotation.y) * 0.12;
      // currentRotation.z =
      //   currentRotation.z + (targetRotation[2] - currentRotation.z) * 0.12;
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
