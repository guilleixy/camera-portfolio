import React, { useState, useEffect, JSX } from "react";
import { useCameraModelStore } from "@/store/useCameraModelStore";
import styles from "./ScreenContent.module.css";
import { slidesLengths } from "../CameraModel";
import LastPlayedSong from "@/components/Stats/SongStats/LastPlayedSong";
import MostPlayedSong from "@/components/Stats/SongStats/MostPlayedSong";
import TopArtists from "@/components/Stats/SongStats/TopArtists";
import LastPlayedGame from "@/components/Stats/GameStats/LastPlayedGame";

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
        <article
          className={`${styles.basicSlide}`}
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.40), rgba(0,0,0,0.40)), url('/images/camera_roll/93.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h3 className={styles.textUpscaledY}>
            {translations.introSlide0Title}
          </h3>
          <p className={styles.textUpscaledY}>
            {translations.introSlide0Controls}
          </p>
        </article>
      ),
      1: (
        <article
          className={`${styles.basicSlide}`}
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/images/camera_roll/9.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <p className={styles.textUpscaledY}>
            {translations.introSlide1Controls}
          </p>
        </article>
      ),
    },
    1: {
      0: (
        <article
          className={`${styles.basicSlide}`}
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url('/images/camera_roll/70.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <p className={styles.textUpscaledY}>{translations.card0Slide0Text}</p>
        </article>
      ),
      1: (
        <article
          className={`${styles.basicSlide}`}
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/images/camera_roll/55.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <p className={styles.textUpscaledY}>{translations.card0Slide1Text}</p>
        </article>
      ),
      2: (
        <article
          className={`${styles.basicSlide}`}
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/images/camera_roll/1.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <p className={styles.textUpscaledY}>{translations.card0Slide2Text}</p>
        </article>
      ),
      3: (
        <article
          className={`${styles.basicSlide}`}
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/images/camera_roll/58.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <p className={styles.textUpscaledY}>
            {translations.cards0Slide3Text}
          </p>
        </article>
      ),
      4: (
        <article className={`${styles.basicSlide}`}>
          <p className={styles.textUpscaledY}>
            {translations.cards0Slide4Text}
          </p>
          <p className={styles.textUpscaledY}>
            {translations.cards0Slide4lastSongText}
          </p>
          <LastPlayedSong />
          <p className={styles.textUpscaledY}>
            {translations.cards0Slide4obssessionText}
          </p>
          <MostPlayedSong />
        </article>
      ),
      5: (
        <article className={`${styles.basicSlide}`}>
          <p className={styles.textUpscaledY}>
            {translations.cards0Slide5Text}
          </p>
          <TopArtists />
        </article>
      ),
      6: (
        <article className={`${styles.basicSlide}`}>
          <p className={styles.textUpscaledY}>
            {translations.cards0Slide6Text}
          </p>
          <LastPlayedGame />
        </article>
      ),
    },
    2: {
      0: (
        <article
          className={`${styles.basicSlide}`}
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/images/camera_roll/27.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h3 className={styles.textUpscaledY}>
            {translations.cards1Slide0Title}
          </h3>
          <p className={styles.textUpscaledY}>
            {translations.cards1Slide0Text1}
          </p>
          <p className={styles.textUpscaledY}>
            {translations.cards1Slide0Text2}
          </p>
          <p className={styles.textUpscaledY}>
            {translations.cards1Slide0GithubCTA}
            <a href="https://github.com/guilleixy" target="_blank">
              Github
            </a>
            !
          </p>
        </article>
      ),
      1: (
        <article
          className={`${styles.basicSlide}`}
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url('/images/camera_roll/71.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <p className={styles.textUpscaledY}>
            {translations.cards1Slide1Text1}
          </p>
          <p className={styles.textUpscaledY}>
            {translations.cards1Slide1Text2}
          </p>
        </article>
      ),
      2: (
        <article
          className={`${styles.basicSlide}`}
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/images/camera_roll/45.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <p className={styles.textUpscaledY}>
            {translations.cards1Slide2Text1}
          </p>
          <p className={styles.textUpscaledY}>
            {translations.cards1Slide2Text2}
          </p>
        </article>
      ),
      3: (
        <article
          className={`${styles.basicSlide}`}
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/images/projects/notjustwater4.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <p className={styles.textUpscaledY}>
            {translations.cards1Slide3Text1}
          </p>
          <p className={styles.textUpscaledY}>
            {translations.cards1Slide3Text2}
          </p>
        </article>
      ),
      4: (
        <article
          className={`${styles.basicSlide}`}
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/images/projects/notjustwater1.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <p className={styles.textUpscaledY}>
            {translations.cards1Slide4Text1}
          </p>
          <p className={styles.textUpscaledY}>
            {translations.cards1Slide4Text2}
          </p>
        </article>
      ),
      5: (
        <article
          className={`${styles.basicSlide}`}
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/images/projects/notjustwater3.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <p className={styles.textUpscaledY}>
            {translations.cards1Slide5Text1}
          </p>
          <p className={styles.textUpscaledY}>
            {translations.cards1Slide5Text2}
          </p>
        </article>
      ),
      6: (
        <article className={`${styles.squareImageSlide}`}>
          <video src="/images/projects/notjustwaterdemo.mp4" autoPlay loop />
          <div className={`${styles.snapchatBar}`}>
            {translations.cards1Slide6Text}
          </div>
        </article>
      ),
      7: (
        <article
          className={`${styles.basicSlide}`}
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/images/projects/exoviewer3.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <p className={styles.textUpscaledY}>
            {translations.cards1Slide7Text1}
          </p>
        </article>
      ),
      8: (
        <article
          className={`${styles.basicSlide}`}
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/images/projects/exoviewer2.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <p className={styles.textUpscaledY}>
            {translations.cards1Slide8Text1}
          </p>
        </article>
      ),
      9: (
        <article
          className={`${styles.basicSlide}`}
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/images/projects/exoviewer1.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <p className={styles.textUpscaledY}>
            {translations.cards1Slide9Text1}
          </p>
        </article>
      ),
      10: (
        <article className={`${styles.squareImageSlide}`}>
          <video src="/images/projects/spacedemo.mp4" autoPlay loop />
          <div className={`${styles.snapchatBar}`}>
            {translations.cards1Slide10Text}
          </div>
        </article>
      ),
      11: (
        <article
          className={`${styles.basicSlide}`}
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/images/projects/saight1.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <p className={styles.textUpscaledY}>
            {translations.cards1Slide11Text1}
          </p>
          <p className={styles.textUpscaledY}>
            {translations.cards1Slide11Text2}
          </p>
        </article>
      ),
      12: (
        <article
          className={`${styles.basicSlide}`}
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/images/projects/saight2.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <p className={styles.textUpscaledY}>
            {translations.cards1Slide12Text}
          </p>
        </article>
      ),
    },
    3: {
      0: (
        <article
          className={`${styles.basicSlide}`}
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/images/camera_roll/2.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <p className={styles.textUpscaledY}>
            {translations.cards2Slide0Text1}
          </p>
          <p className={styles.textUpscaledY}>
            {translations.cards2Slide0Text2}
          </p>
        </article>
      ),
      1: (
        <article className={`${styles.squareImageSlide}`}>
          <img src="/images/design/cartel_lleida.png" alt="" />
          <div className={`${styles.snapchatBar}`}>
            {translations.cards2Slide1Text1}
          </div>
        </article>
      ),
      2: (
        <article className={`${styles.squareImageSlide}`}>
          <img src="/images/design/cartel_lleida2.png" alt="" />
          <div className={`${styles.snapchatBar}`}>
            {translations.cards2Slide2Text1}
          </div>
        </article>
      ),
      3: (
        <article className={`${styles.squareImageSlide}`}>
          <img src="/images/design/cartel_gira.png" alt="" />
          <div className={`${styles.snapchatBar}`}>
            {translations.cards2Slide3Text1}
          </div>
        </article>
      ),
      4: (
        <article className={`${styles.squareImageSlide}`}>
          <img src="/images/design/carretera_raw.png" alt="" />
          <div className={`${styles.snapchatBar}`}>
            {translations.cards2Slide4Text1}
          </div>
        </article>
      ),
      5: (
        <article className={`${styles.squareImageSlide}`}>
          <video src="/images/design/canvas_carretera.mp4" autoPlay loop />
          <div className={`${styles.snapchatBar}`}>
            {translations.cards2Slide5Text1}
          </div>
        </article>
      ),
    },
    4: {
      0: (
        <article className={styles.imageSlide}>
          <img src="/images/camera_roll/71.jpg" alt="" />
          <div className={`${styles.snapchatBar}`}>
            {translations.cards3Slide0Text1}
          </div>
        </article>
      ),
    },
  };
  const content = SCREEN_CONTENT[card]?.[slide];

  return (
    <section className={styles.root}>
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
      {content || <></>}
      <div className={styles.pagination}>
        {card !== 5 ? `${slide + 1}/${slidesLengths[card]}` : null}
      </div>
    </section>
  );
}
