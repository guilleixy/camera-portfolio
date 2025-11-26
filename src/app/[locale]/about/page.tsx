import { useTranslations } from "next-intl";
import styles from "./about.module.css";
import LocaleSwitcher from "@/components/Locale/LocaleSwitcher";

export default function AboutPage() {
  const tGeneral = useTranslations("General");
  const tAbout = useTranslations("About");

  return (
    <section className={styles.root}>
      <article>
        {tAbout("textHTML")
          .split("\n\n")
          .map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
      </article>
      <a href="/">{tGeneral("backButton")}</a>
      <div className={styles.lang}>
        <LocaleSwitcher />
      </div>
    </section>
  );
}
