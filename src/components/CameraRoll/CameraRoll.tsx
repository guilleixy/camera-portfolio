"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import styles from "./CameraRoll.module.css";
import { useGSAP } from "@gsap/react";

const images = 90;
const columns = 4;

function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function CameraRoll() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    const cols = containerRef.current.querySelectorAll(`.${styles.column}`);

    cols.forEach((col) => {
      const totalHeight = col.scrollHeight / 2;
      const duration = gsap.utils.random(60, 110);

      gsap.to(col, {
        y: `-=${totalHeight}`,
        duration,
        ease: "none",
        repeat: -1,
        modifiers: {
          y: (y) => {
            const num = parseFloat(y);
            return (num % -totalHeight) + "px";
          },
        },
      });
    });
  }, []);

  return (
    <div className={styles.cameraRoll} ref={containerRef}>
      {[...Array(columns)].map((_, i) => (
        <div className={styles.column} key={i}>
          {[...Array(2)].map((_, j) => (
            <div key={j}>
              {[...Array(10)].map((_, k) => {
                const index = getRandomInt(1, images);
                return (
                  <div className={styles.imageWrapper} key={`${j}-${k}`}>
                    <Image
                      alt="Camera Roll"
                      src={`/images/camera_roll/${index}.jpg`}
                      width={258 / 1.3}
                      height={194 / 1.3}
                      priority={false}
                      style={{ marginTop: getRandomInt(160, 360) }}
                    />
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
