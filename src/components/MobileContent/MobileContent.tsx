import LocaleSwitcher from "../Locale/LocaleSwitcher";
import styles from "./MobileContent.module.css";
import { useState, useEffect } from "react";

export default function MobileContent() {
  const [currentDate, setCurrentDate] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  const formatDate = () => {
    return currentDate.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "Europe/Madrid",
    });
  };

  const formatTime = () => {
    return currentDate.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZone: "Europe/Madrid",
    });
  };
  return (
    <div className={styles.page}>
      {/* <pre className={styles.ascii}>{frames}</pre> */}
      <h1>guillermo bernal</h1>
      <div className={styles.time}>
        <div>time in zaragoza:</div>
        <div>{formatDate()}</div>
        <div>{formatTime()}</div>
      </div>
      <ul className={styles.links}>
        <li>
          <a href="/about">about</a>
        </li>
        <li>
          <a href="/contact">contact</a>
        </li>
        <li>
          <a href="/contact">resume</a>
        </li>
      </ul>
      <div className={styles.lang}>
        <LocaleSwitcher />
      </div>
      {/* <h4>i make it happen</h4> */}
    </div>
  );
}
