import React, { useState, useEffect, JSX } from "react";
import { useCameraModelStore } from "@/store/useCameraModelStore";
import styles from "./ScreenContent.module.css";

export function ScreenContent({
  card,
  slide,
  translations,
}: {
  card: number;
  slide: number;
  translations: any;
}) {
  const SCREEN_CONTENT: Record<number, Record<number, JSX.Element>> = {
    0: {
      0: (
        <div
          className={`${styles.basicSlide}`}
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/images/camera_roll/1.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h3 className={styles.textUpscaledY}>{translations.slide0Title}</h3>
          <p className={styles.textUpscaledY}>{translations.slide0Controls}</p>
        </div>
      ),
      1: (
        <div className={`${styles.basicSlide}`}>
          <p>{translations.slide1Controls}</p>
          <p>{translations.slide1IndexTitle}</p>
          <ul>
            <li>{translations.slide1Index0}</li>
            <li>{translations.slide1Index1}</li>
            <li>{translations.slide1Index2}</li>
            <li>{translations.slide1Index3}</li>
          </ul>
        </div>
      ),
      2: <div className={`${styles.basicSlide}`}></div>,
    },
    1: {
      0: (
        <>
          <h1>Proyecto: Naturaleza</h1>
          <img
            src="/images/nature.jpg"
            alt="Naturaleza"
            className={styles.image}
          />
          <p>Una colección de fotografías capturando la belleza natural</p>
        </>
      ),
      1: (
        <>
          <h2>Detalles del Proyecto</h2>
          <div className={styles.details}>
            <span>Año: 2024</span>
            <span>Ubicación: Patagonia</span>
            <span>Cámara: Canon EOS R5</span>
          </div>
        </>
      ),
    },
    2: {
      0: (
        <>
          <h1>Contacto</h1>
          <p>¿Interesado en trabajar juntos?</p>
          <div className={styles.contact}>
            <a href="mailto:contacto@ejemplo.com">contacto@ejemplo.com</a>
            <a href="tel:+123456789">+1 234 567 89</a>
          </div>
        </>
      ),
    },
  };
  const content = SCREEN_CONTENT[card]?.[slide];

  return (
    <div className={styles.root}>
      <svg style={{ position: "absolute", width: 0, height: 0 }}>
        <defs>
          <filter id="pixelate" x="0%" y="0%" width="100%" height="100%">
            <feFlood x="0.3" y="0.3" height="0.2" width="0.2" />
            <feComposite width="0.5" height="0.5" />
            <feTile result="a" />
            <feComposite in="SourceGraphic" in2="a" operator="in" />
            <feMorphology operator="dilate" radius="0.2" />
          </filter>
        </defs>
      </svg>
      {content || (
        <>
          <h2>Pantalla no disponible</h2>
          <p>
            Card: {card} | Slide: {slide}
          </p>
        </>
      )}
    </div>
  );
}
