"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import styles from "./CameraRoll.module.css";
import { useGSAP } from "@gsap/react";

const images = 90;
const columns = 4;
const rowsPerColumn = 10;

function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getUniqueRandomIntWithUsed(min: number, max: number, used: number[]) {
  let rand = getRandomInt(min, max);
  while (used.includes(rand)) {
    rand = getRandomInt(min, max);
  }
  used.push(rand);
  return rand;
}

type CameraRollProps = {
  containerRef: React.RefObject<HTMLDivElement | null>;
};

type ImageItem = {
  index: number;
  marginTop: number;
};

export default function CameraRoll({ containerRef }: CameraRollProps) {
  // Generate deterministic/server-safe markup: don't run random during render.
  // Build the grid only after mount on the client to avoid hydration mismatches.
  const [grid, setGrid] = useState<ImageItem[][] | null>(null);

  useEffect(() => {
    const used: number[] = [];
    const newGrid: ImageItem[][] = Array.from({ length: columns }, () =>
      Array.from({ length: rowsPerColumn }, () => {
        const idx = getUniqueRandomIntWithUsed(1, images, used);
        return { index: idx, marginTop: getRandomInt(160, 360) };
      })
    );
    setGrid(newGrid);
  }, []);

  useGSAP(
    () => {
      if (!containerRef || !containerRef.current) return;
      if (!grid) return;

      const cols = containerRef.current.querySelectorAll(`.${styles.column}`);

      cols.forEach((col) => {
        const duration = gsap.utils.random(120, 220);
        const distance = col.scrollHeight;
        gsap.to(col, {
          y: -distance,
          duration,
          ease: "none",
          repeat: -1,
          yoyo: false,
        });
      });
    },
    // re-run when grid is ready so animations target rendered elements
    [grid]
  );

  return (
    <div className={styles.cameraRoll} ref={containerRef}>
      {grid
        ? grid.map((colItems, i) => (
            <div className={styles.column} key={i}>
              {colItems.map((item, k) => (
                <div className={styles.imageWrapper} key={k}>
                  <img
                    alt="Camera Roll"
                    src={`/images/camera_roll/optimized/${item.index}.jpg`}
                    width={258 / 1.3}
                    height={194 / 1.3}
                    style={{
                      marginTop: item.marginTop,
                      opacity: 0,
                      transition: `opacity ${item.index * 0.01 + 0.7}s ease-in`,
                    }}
                    onLoad={(e) => {
                      e.currentTarget.style.opacity = "1";
                    }}
                  />
                </div>
              ))}
            </div>
          ))
        : // server/client-safe placeholder until grid is ready
          Array.from({ length: columns }).map((_, i) => (
            <div className={styles.column} key={`ph-${i}`} />
          ))}
    </div>
  );
}
