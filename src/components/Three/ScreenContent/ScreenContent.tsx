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
  translations: {
    title: string;
  };
}) {
  const SCREEN_CONTENT: Record<number, Record<number, JSX.Element>> = {
    0: {
      0: (
        <div className={`${styles.basicSlide}`}>
          <h1>{translations.title}</h1>
          <p>
            Explora mi trabajo fotográfico a través de esta experiencia
            interactiva
          </p>
          <button className={styles.cta}>Ver Proyectos</button>
        </div>
      ),
      1: (
        <>
          <h2>Sobre Mí</h2>
          <p>Fotógrafo profesional especializado en...</p>
          <ul>
            <li>Retratos</li>
            <li>Paisajes</li>
            <li>Eventos</li>
          </ul>
        </>
      ),
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
