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
          <h3 className={styles.textUpscaledY}>{translations.slide0Title}</h3>
          <p className={styles.textUpscaledY}>{translations.slide0Controls}</p>
        </article>
      ),
      1: (
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
          <p className={styles.textUpscaledY}>{translations.slide1Controls}</p>
          <ul className={styles.textUpscaledY}>
            <li>{translations.slide1Index0}</li>
            <li>{translations.slide1Index1}</li>
            <li>{translations.slide1Index2}</li>
            <li>{translations.slide1Index3}</li>
          </ul>
        </article>
      ),
    },
    1: {
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
            I am a 23 year old developer from Zaragoza, Spain
          </p>
          <p className={styles.textUpscaledY}>
            I am currenly studying computer science while I work as a
            programmer.
          </p>
        </article>
      ),
      1: (
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
          <p className={styles.textUpscaledY}>I really like art!</p>
          <p className={styles.textUpscaledY}>
            I play bass and I like books and photography (obviously)
          </p>
          <p className={styles.textUpscaledY}>
            Music is a big part of my life, and my latest obsession has been:{" "}
          </p>
        </article>
      ),
    },
    2: {
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
          <h3 className={styles.textUpscaledY}>My web stack</h3>
          <p className={styles.textUpscaledY}>
            I have worked with a broad range of technologies, both front and
            backend.
          </p>
          <p className={styles.textUpscaledY}>
            But definitely my favourite ones are ThreeJS and NextJS
          </p>
          <p className={styles.textUpscaledY}>
            If you want to learn more, check out my <a href="">Github Page</a>
          </p>
        </article>
      ),
      1: (
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
            I am also really interested in ML and coding in general.
          </p>
          <p className={styles.textUpscaledY}>
            esto se puede reducir pq en el de arriba ya pondre un poco de cursos
            I have undergone several courses on machine learning and AI, and
            I've also participated in many hackathons and jams.
          </p>
          <p className={styles.textUpscaledY}>
            But all that it's too boring so if you're interested you can just
            just check my <a href="">LinkedIn profile</a>
          </p>
        </article>
      ),
      2: (
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
            In my last hackathon I worked on a smart watering system.
          </p>
          <p className={styles.textUpscaledY}>
            We trained a neural network to detect different kinds of plants.
          </p>
          <p className={styles.textUpscaledY}>
            And depending on the specific plant needs and current weather and
            humidity conditions, it was watered with just the right amount of
            water.
          </p>
          <p className={styles.textUpscaledY}>
            We also made like an evil version of Duolingo, where you had to
            anwser different questions right to water your plant.
          </p>
        </article>
      ),
      3: (
        <article className={`${styles.squareImageSlide}`}>
          <video src="/images/projects/notjustwaterdemo.mp4" autoPlay loop />
        </article>
      ),
      4: (
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
            I also worked on a exopanetary systems visualizer able to
            procedurally recreate faithful replicas of planets and stars
            discovered by the NASA
          </p>
          <p className={styles.textUpscaledY}>
            We also developed what we called the "music of the stars": a
            positional sound system where every stellar body emited a
            disctincive sound depending on its mass and temperature.
          </p>
          <p className={styles.textUpscaledY}>
            The coolest part of the project was implementing VR!
          </p>
        </article>
      ),
      5: (
        <article className={`${styles.squareImageSlide}`}>
          <video src="/images/projects/spacedemo.mp4" autoPlay loop />
        </article>
      ),
      6: (
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
            One of my first "big" projects was saight: an app to help people
            with visual impediments to interact with their surroundings
          </p>
          <p className={styles.textUpscaledY}>
            I used a computer vision model to detect objects in real time and
            inform the user throgh TTS
          </p>
          <p className={styles.textUpscaledY}>
            I also implemented voice control and other cool features like face
            detection and connection to an LLM with the environment as context
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
            Besides programming, I also like to design, animate or just create
            stuff
          </p>
          <p className={styles.textUpscaledY}>
            Check out some of the things I've made
          </p>
        </article>
      ),
      1: (
        <article className={`${styles.squareImageSlide}`}>
          <img src="/images/design/cartel_lleida.png" alt="" />
        </article>
      ),
      2: (
        <article className={`${styles.squareImageSlide}`}>
          <img src="/images/design/cartel_lleida2.png" alt="" />
        </article>
      ),
      3: (
        <article className={`${styles.squareImageSlide}`}>
          <img src="/images/design/cartel_gira.png" alt="" />
        </article>
      ),
      4: (
        <article className={`${styles.squareImageSlide}`}>
          <img src="/images/design/carretera_raw.png" alt="" />
        </article>
      ),
      5: (
        <article className={`${styles.squareImageSlide}`}>
          <video src="/images/design/canvas_carretera.mp4" autoPlay loop />
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
    </section>
  );
}
