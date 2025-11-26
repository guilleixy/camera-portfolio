import { useTranslations } from "next-intl";
import styles from "./contact.module.css";

export default function ContactPage() {
  const t = useTranslations("General");
  return (
    <section className={styles.root}>
      <ul>
        <li>
          <div>e-mail:</div>
          <a href="mailto:guillermobernallou@gmail.com">
            guillermobernallou@gmail.com
          </a>
        </li>
        <li>
          <div>linkedin:</div>
          <a
            href="https://linkedin.com/in/guillermo-bernal-lou/"
            target="_blank"
          >
            linkedin.com/in/guillermo-bernal-lou/
          </a>
        </li>
        <li>
          <div>github:</div>
          <a href="https://github.com/guilleixy" target="_blank">
            github.com/guilleixy
          </a>
        </li>
      </ul>
      <a href="/">{t("backButton")}</a>
    </section>
  );
}
