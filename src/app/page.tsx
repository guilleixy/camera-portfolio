import Image from "next/image";
import styles from "./page.module.css";
import CameraRoll from "@/components/CameraRoll/CameraRoll";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1>guillermo bernal</h1>
      </div>
      <CameraRoll />
    </div>
  );
}
