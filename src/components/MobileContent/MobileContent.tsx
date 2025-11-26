import { useTranslations } from "next-intl";
import LocaleSwitcher from "../Locale/LocaleSwitcher";
import styles from "./MobileContent.module.css";
import { useState, useEffect } from "react";

export default function MobileContent() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const t = useTranslations("General");
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
        <div>{t("timeIn")}</div>
        <div>{formatDate()}</div>
        <div>{formatTime()}</div>
      </div>
      <ul className={styles.links}>
        <li>
          <a href="/about">{t("about")}</a>
        </li>
        <li>
          <a href="/contact">{t("contact")}</a>
        </li>
        <li>
          <a href="/contact">{t("resume")}</a>
        </li>
      </ul>
      <div className={styles.lang}>
        <LocaleSwitcher />
      </div>
      {/* <h4>i make it happen</h4> */}
    </div>
  );
}
