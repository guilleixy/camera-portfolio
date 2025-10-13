"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import styles from "./CameraRoll.module.css";
import { useGSAP } from "@gsap/react";

const images = 90;
const columns = 4;

const usedIndexes: number[] = [];

function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getUniqueRandomInt(min: number, max: number, exclude: number[]) {
  let rand = getRandomInt(min, max);
  while (exclude.includes(rand)) {
    rand = getRandomInt(min, max);
  }
  exclude.push(rand);
  return rand;
}

type CameraRollProps = {
  containerRef: React.RefObject<HTMLDivElement | null>;
};

export default function CameraRoll({ containerRef }: CameraRollProps) {
  //const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef || !containerRef.current) return;

    const cols = containerRef.current.querySelectorAll(`.${styles.column}`);

    cols.forEach((col, i) => {
      const duration = gsap.utils.random(120, 220);
      //const distance = col.scrollHeight / 2;
      const distance = col.scrollHeight;
      gsap.to(col, {
        y: -distance,
        duration,
        ease: "none",
        repeat: -1,
        yoyo: false,
      });
    });
  }, []);

  return (
    <div className={styles.cameraRoll} ref={containerRef}>
      {[...Array(columns)].map((_, i) => (
        <div className={styles.column} key={i}>
          {[...Array(10)].map((_, k) => {
            const index = getUniqueRandomInt(1, images, usedIndexes);
            return (
              <div className={styles.imageWrapper} key={`${k}`}>
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
  );
}
