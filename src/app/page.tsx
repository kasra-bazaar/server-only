'use client'
import styles from "./index.module.css";
import SensetiveContent from "~/components/SensetiveContent";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <SensetiveContent />
      </div>
    </main>
  );
}
