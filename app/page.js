import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.main}>
      <h1>My Homepage</h1>
      <p>Welcome to my homepage!</p>
    </div>
  );
}
