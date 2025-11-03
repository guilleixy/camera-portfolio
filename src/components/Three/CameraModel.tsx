"use client";
import React, { useRef, useState } from "react";
import { Html, MeshTransmissionMaterial, useGLTF } from "@react-three/drei";
import { Group, Mesh } from "three";
import { useCameraModelStore } from "@/store/useCameraModelStore";
import { useFrame } from "@react-three/fiber";
import { ScreenContent } from "./ScreenContent/ScreenContent";
import { useSDCardModelStore } from "@/store/useSDCardModelStore";
import { useCameraStore } from "@/store/useCameraStore";
export const slidesLengths: Array<number> = [2, 2, 13, 6, 1];
const CameraModel: React.FC<{
  translations: any;
}> = ({ translations }) => {
  const { nodes, materials } = useGLTF("/models/canoncajita8.glb");

  const cameraToggle = useCameraStore((s) => s.toggle);
  const sdCardToggle = useSDCardModelStore((s) => s.toggle);
  const cameraModelToggle = useCameraModelStore((s) => s.toggle);

  const cameraRef = useRef<Group>(null);
  const cameraPivotRef = useRef<Group>(null); // Grupo para controlar el pivot de toda la cámara
  const lensVorhang_1Ref = useRef<Mesh>(null);
  const lensVorhang_2Ref = useRef<Mesh>(null);
  const lens3_1Ref = useRef<Mesh>(null);
  const lens3_2Ref = useRef<Mesh>(null);
  const lens2_1Ref = useRef<Mesh>(null);
  const lens2_2Ref = useRef<Mesh>(null);
  const lensFensterRef = useRef<Mesh>(null);
  const lensGlassRef = useRef<Mesh>(null);
  const tapaRef = useRef<Mesh>(null);
  const lensInnenHuleRef = useRef<Mesh>(null);
  const buttonLeftRef = useRef<Mesh>(null);
  const screenRef = useRef<Mesh>(null);

  const [card, setCard] = useState(0);
  const [slide, setSlide] = useState(0);

  const handleButton1Click = (event: any) => {
    event.stopPropagation();
    setCard(5);
    cameraToggle("backZoomIn");
    cameraModelToggle("openCase");
    setTimeout(() => {
      sdCardToggle("changeSD");
    }, 100);
    setTimeout(() => {
      sdCardToggle("changeSD");
    }, 600);
    setTimeout(() => {
      cameraModelToggle("openCase");
    }, 800);
    setTimeout(() => {
      cameraToggle("backZoomIn");
    }, 1000);
    setTimeout(() => {
      setCard(1);
      setSlide(0);
    }, 1200);
  };

  const handleButton2Click = (event: any) => {
    event.stopPropagation();
    setCard(5);
    cameraToggle("backZoomIn");
    cameraModelToggle("openCase");
    setTimeout(() => {
      sdCardToggle("changeSD");
    }, 100);
    setTimeout(() => {
      sdCardToggle("changeSD");
    }, 600);
    setTimeout(() => {
      cameraModelToggle("openCase");
    }, 680);
    setTimeout(() => {
      cameraToggle("backZoomIn");
    }, 800);
    setTimeout(() => {
      setCard(2);
      setSlide(0);
    }, 1200);
  };

  const handleButton3Click = (event: any) => {
    event.stopPropagation();
    setCard(5);
    cameraToggle("backZoomIn");
    cameraModelToggle("openCase");
    setTimeout(() => {
      sdCardToggle("changeSD");
    }, 100);
    setTimeout(() => {
      sdCardToggle("changeSD");
    }, 600);
    setTimeout(() => {
      cameraModelToggle("openCase");
    }, 800);
    setTimeout(() => {
      cameraToggle("backZoomIn");
    }, 1000);
    setTimeout(() => {
      setCard(3);
      setSlide(0);
    }, 1200);
  };

  const handleButton4Click = (event: any) => {
    event.stopPropagation();
    setCard(5);
    cameraToggle("backZoomIn");
    cameraModelToggle("openCase");
    setTimeout(() => {
      sdCardToggle("changeSD");
    }, 100);
    setTimeout(() => {
      sdCardToggle("changeSD");
    }, 600);
    setTimeout(() => {
      cameraModelToggle("openCase");
    }, 800);
    setTimeout(() => {
      cameraToggle("backZoomIn");
    }, 1000);
    setTimeout(() => {
      setCard(4);
      setSlide(0);
    }, 1200);
  };

  const handleButtonUpClick = (event: any) => {
    event.stopPropagation();
  };

  const handleLeftButtonClick = (event: any) => {
    event.stopPropagation();
    slide !== 0 && setSlide((prev) => prev - 1);
  };

  const handleButtonRightClick = (event: any) => {
    event.stopPropagation();
    slidesLengths[card] != slide + 1 && setSlide((prev) => prev + 1);
  };

  const handleButtonDownClick = (event: any) => {
    event.stopPropagation();
  };

  const animations = useCameraModelStore((s) => s.animations);

  const lens2RetraidoZ = 0;
  const lens2ExtendidoZ = -30;

  const lens3RetraidoZ = 0;
  const lens3ExtendidoZ = -60;

  const lensInnenHuleRetraidoZ = 0;
  const lensInnenHuleExtendidoZ = -60;
  const lensFensterRetraidoZ = -1;
  const lensFensterExtendidoZ = -61;

  const lensGlassRetraidoZ = 0;
  const lensGlassExtendidoZ = -60;

  const lensVorhangRetraidoZ = -40;
  const lensVorhangExtendidoZ = -60;

  const lensVorhangAbierto = 1;
  const lensVorhangCerrado = 0;

  const tapaAbiertaRotX = Math.PI / 2;
  const tapaCerradaRotX = 0;

  useFrame((state, delta) => {
    // if (buttonLeftRef.current) {
    //   buttonLeftRef.current.position.z += 1;
    // }
    const targetRotXTapa = animations.openCase
      ? tapaAbiertaRotX
      : tapaCerradaRotX;

    if (tapaRef.current) {
      const curRotXTapa = tapaRef.current.rotation.z;

      // Determinar si está cerrando (de Math.PI/2 a 0)
      const isClosing = !animations.openCase && curRotXTapa > tapaCerradaRotX;

      if (isClosing) {
        // Sin spring cuando se cierra - interpolación lineal
        tapaRef.current.rotation.z =
          curRotXTapa + (targetRotXTapa - curRotXTapa) * 0.48;
      } else {
        // Con spring cuando se abre
        const diff = targetRotXTapa - curRotXTapa;

        // Spring con overshoot exagerado
        const springForce = diff * 0.15; // Fuerza del spring
        const damping = 0.85; // Amortiguación (menos = más rebote)

        // Añadir velocidad si no existe
        if (!tapaRef.current.userData.velocity) {
          tapaRef.current.userData.velocity = 0;
        }

        tapaRef.current.userData.velocity += springForce;
        tapaRef.current.userData.velocity *= damping;

        tapaRef.current.rotation.z += tapaRef.current.userData.velocity;
      }
    }

    // Efecto de impulso en la cámara cuando la tapa llega a 0 (cerrada)
    if (cameraPivotRef.current && tapaRef.current) {
      // Inicializar userData para el impulso
      if (!cameraPivotRef.current.userData.impulse) {
        cameraPivotRef.current.userData.impulse = {
          velocityX: 0,
          velocityY: 0,
          velocityRotY: 0,
          lastTapaState: animations.openCase,
          hasTriggered: false,
        };
      }

      const impulseData = cameraPivotRef.current.userData.impulse;
      const currentTapaRotation = tapaRef.current.rotation.z;

      // Detectar cuando la tapa llega cerca de 0 (cerrada completamente)
      if (
        !animations.openCase &&
        Math.abs(currentTapaRotation - tapaCerradaRotX) < 0.1 && // Cuando está cerca de 0
        !impulseData.hasTriggered
      ) {
        // Aplicar impulso cuando la tapa está cerrada
        impulseData.velocityX = -0.03; // Impulso hacia la izquierda
        impulseData.velocityY = 0.01; // Pequeño impulso hacia arriba
        impulseData.velocityRotY = -0.02; // Rotación en Y
        impulseData.hasTriggered = true;
      }

      // Resetear el trigger cuando se abre la tapa
      if (animations.openCase) {
        impulseData.hasTriggered = false;
      }

      // Aplicar física del impulso con rebote
      const restoreForceX = -cameraPivotRef.current.position.x * 0.1; // Fuerza de restauración
      const restoreForceY = -cameraPivotRef.current.position.y * 0.1;
      const restoreForceRotY = -cameraPivotRef.current.rotation.z * 0.1;

      const dampingFactor = 0.9; // Factor de amortiguación

      impulseData.velocityRotY =
        (impulseData.velocityRotY + restoreForceRotY) * dampingFactor;

      cameraPivotRef.current.rotation.z += impulseData.velocityRotY;

      cameraPivotRef.current.rotation.z = Math.max(
        -0.5,
        Math.min(0.5, cameraPivotRef.current.rotation.z)
      );
    }

    const targetZlens2 = animations.extendLens
      ? lens2ExtendidoZ
      : lens2RetraidoZ;
    const targetZlens3 = animations.extendLens
      ? lens3ExtendidoZ
      : lens3RetraidoZ;
    const targetZlensInnenHule = animations.extendLens
      ? lensInnenHuleExtendidoZ
      : lensInnenHuleRetraidoZ;
    const targetZlensFenster = animations.extendLens
      ? lensFensterExtendidoZ
      : lensFensterRetraidoZ;
    const targetZlensGlass = animations.extendLens
      ? lensGlassExtendidoZ
      : lensGlassRetraidoZ;
    const targetZlensVorhang_1 = animations.extendLens
      ? lensVorhangExtendidoZ
      : lensVorhangRetraidoZ;
    const targetZlensVorhang_2 = animations.extendLens
      ? lensVorhangExtendidoZ
      : lensVorhangRetraidoZ;
    const targetScaleLensVorhang_1 = animations.extendLens
      ? lensVorhangAbierto
      : lensVorhangCerrado;
    const targetScaleLensVorhang_2 = animations.extendLens
      ? lensVorhangAbierto
      : lensVorhangCerrado;

    if (
      lens2_2Ref.current &&
      lens2_1Ref.current &&
      lens3_1Ref.current &&
      lens3_2Ref.current &&
      lensInnenHuleRef.current &&
      lensFensterRef.current &&
      lensGlassRef.current &&
      lensVorhang_1Ref.current &&
      lensVorhang_2Ref.current
    ) {
      const curZlens2_2 = lens2_2Ref.current.position.z;
      const curZlens2_1 = lens2_1Ref.current.position.z;
      const curZlens3_1 = lens3_1Ref.current.position.z;
      const curZlens3_2 = lens3_2Ref.current.position.z;
      const curZlensInnenHule = lensInnenHuleRef.current.position.z;
      const curZlensFenster = lensFensterRef.current.position.z;
      const curZlensGlass = lensGlassRef.current.position.z;
      const curZlensVorhang_1 = lensVorhang_1Ref.current.position.z;
      const curZlensVorhang_2 = lensVorhang_2Ref.current.position.z;
      lensInnenHuleRef.current.position.z =
        curZlensInnenHule + (targetZlensInnenHule - curZlensInnenHule) * 0.12;
      lens3_1Ref.current.position.z =
        curZlens3_1 + (targetZlens3 - curZlens3_1) * 0.12;
      lens3_2Ref.current.position.z =
        curZlens3_2 + (targetZlens3 - curZlens3_2) * 0.12;
      lens2_1Ref.current.position.z =
        curZlens2_1 + (targetZlens2 - curZlens2_1) * 0.12;
      lens2_2Ref.current.position.z =
        curZlens2_2 + (targetZlens2 - curZlens2_2) * 0.12;
      lensFensterRef.current.position.z =
        curZlensFenster + (targetZlensFenster - curZlensFenster) * 0.12;
      lensGlassRef.current.position.z =
        curZlensGlass +
        (targetZlensGlass - lensGlassRef.current.position.z) * 0.12;
      lensVorhang_1Ref.current.position.z =
        curZlensVorhang_1 +
        (targetZlensVorhang_1 - lensVorhang_1Ref.current.position.z) * 0.12;
      lensVorhang_2Ref.current.position.z =
        curZlensVorhang_2 +
        (targetZlensVorhang_2 - lensVorhang_2Ref.current.position.z) * 0.12;
    }
  });

  const getRefForMesh = (meshName: string) => {
    switch (meshName) {
      case "Lens_Vorhang_1":
        return lensVorhang_1Ref;
      case "Lens_Vorhang_2":
        return lensVorhang_2Ref;
      case "Lens_3_1":
        return lens3_1Ref;
      case "Lens_3_2":
        return lens3_2Ref;
      case "Lens_2_1":
        return lens2_1Ref;
      case "Lens_2_2":
        return lens2_2Ref;
      case "Lens_Fenster":
        return lensFensterRef;
      case "Lens_Glass":
        return lensGlassRef;
      case "Tapa":
        return tapaRef;
      case "Lens_Innen_Hüle":
        return lensInnenHuleRef;
      case "Korpus008":
        return buttonLeftRef;
      case "Korpus_7":
        return screenRef;
      default:
        return undefined;
    }
  };

  const getClickHandler = (meshName: string) => {
    switch (meshName) {
      case "Korpus001":
        return handleLeftButtonClick;
      case "Korpus002":
        return handleButtonDownClick;
      case "Korpus003":
        return handleButtonRightClick;
      case "Korpus004":
        return handleButtonUpClick;
      case "Korpus005":
        return handleButton4Click;
      case "Korpus006":
        return handleButton3Click;
      case "Korpus007":
        return handleButton2Click;
      case "Korpus008":
        return handleButton1Click;
      default:
        return null;
    }
  };

  return (
    // Grupo pivot - controla el punto de rotación de toda la cámara
    <group
      ref={cameraPivotRef}
      position={[100, 0, 0]} // Posición del pivot (ajusta según desde dónde quieres que rote)
    >
      {/* Grupo de la cámara - offset para compensar la posición del pivot */}
      <group
        rotation={[0, 0, 0]}
        scale={0.5}
        ref={cameraRef}
        position={[-100, 0, 0]} // Offset para compensar la posición del pivot
      >
        {Object.values(nodes)
          .filter((node: any) => node.type === "Mesh")
          .map((mesh: any) => {
            const meshName = mesh.name;
            const ref = getRefForMesh(meshName);
            const clickHandler = getClickHandler(meshName);
            console.log(meshName);
            // Caso especial para la pantalla
            if (meshName === "Korpus_7") {
              return (
                <group key={mesh.uuid}>
                  {/* Mesh original de la pantalla (opcional, puedes hacerla invisible) */}
                  <mesh
                    ref={ref}
                    geometry={mesh.geometry}
                    material={
                      mesh.material ||
                      materials[mesh.name] ||
                      Object.values(materials)[0]
                    }
                    castShadow
                    position={mesh.position}
                    rotation={mesh.rotation}
                    scale={mesh.scale}
                    visible={true}
                  />
                  {/* HTML Content en la posición de la pantalla */}
                  <Html
                    position={[
                      63,
                      85,
                      -42, // Más adelante para que sea visible
                    ]}
                    rotation={[0, Math.PI, 0]}
                    scale={[20, 20, 20]} // Escala más grande
                    transform
                    occlude={true} // Desactivar oclusión temporalmente
                    distanceFactor={0} // Menor factor de distancia
                    //zIndexRange={[100, 0]} // Asegurar que esté al frente
                    zIndexRange={[100, 0]}
                  >
                    <ScreenContent
                      slide={slide}
                      card={card}
                      translations={translations}
                    />
                  </Html>
                </group>
              );
            }
            if (clickHandler) {
              return (
                <mesh
                  key={mesh.uuid}
                  ref={ref}
                  geometry={mesh.geometry}
                  material={
                    mesh.material ||
                    materials[mesh.name] ||
                    Object.values(materials)[0]
                  }
                  castShadow
                  position={mesh.position}
                  rotation={mesh.rotation}
                  scale={mesh.scale}
                  onClick={clickHandler}
                  onPointerEnter={() => {
                    document.body.style.cursor = "pointer";
                  }}
                  onPointerLeave={() => {
                    document.body.style.cursor = "default";
                  }}
                />
              );
            }
            return (
              <mesh
                key={mesh.uuid}
                ref={ref}
                geometry={mesh.geometry}
                material={
                  mesh.material ||
                  materials[mesh.name] ||
                  Object.values(materials)[0]
                }
                castShadow
                position={mesh.position}
                rotation={mesh.rotation}
                scale={mesh.scale}
              />
            );
          })}
      </group>
    </group>
  );
};

useGLTF.preload("/models/canontestcajita6.glb");
export default CameraModel;
