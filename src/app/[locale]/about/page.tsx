import { useTranslations } from "next-intl";
import styles from "./about.module.css";

export default function AboutPage() {
  const tGeneral = useTranslations("General");

  return (
    <section className={styles.root}>
      <article>
        <p>asdhakjsdhaksdhaksdagsdadsgakjsdgaksdjg</p>
        <p>asdhakjsdhaksdhaksdagsdadsgakjsdgaksdjg</p>
        <p>asdhakjsdhaksdhaksdagsdadsgakjsdgaksdjg</p>
      </article>
      <a href="/">{tGeneral("backButton")}</a>
    </section>
  );
}
