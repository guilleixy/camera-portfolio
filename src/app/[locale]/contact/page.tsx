import styles from "./contact.module.css";

export default function ContactPage() {
  return (
    <section className={styles.root}>
      <ul>
        <li>
          <div>e-mail:</div>
          <a href="">guillermobernallou@gmail.com</a>
        </li>
        <li>
          <div>linkedin</div>
          <a href="">linkedin.com/in/guillermo-bernal-lou/</a>
        </li>
        <li>
          <div>github</div>
          <a href="">github.com/guilleixy</a>
        </li>
      </ul>
      <a href="/">go back</a>
    </section>
  );
}
