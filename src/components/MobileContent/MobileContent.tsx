import { useTranslations, useLocale } from "next-intl";
import LocaleSwitcher from "../Locale/LocaleSwitcher";
import styles from "./MobileContent.module.css";
import { useState, useEffect } from "react";

export default function MobileContent() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const t = useTranslations("General");
  const locale = useLocale();
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  const formatDate = () => {
    const date = currentDate.toLocaleDateString(locale, {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "Europe/Madrid",
    });
    return date.charAt(0).toUpperCase() + date.slice(1);
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
          <a
            href="/GuillermoBernalResume04122025.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("resume")}
          </a>
        </li>
      </ul>
      <div className={styles.lang}>
        <LocaleSwitcher />
      </div>
      {/* <h4>i make it happen</h4> */}
    </div>
  );
}
