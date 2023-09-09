import styles from "@/styles/page.module.css";
import ViewAccounts from "./view-accounts/view-accounts";

export default function Home() {
  return (
    <main className={styles.main}>
      <ViewAccounts />
    </main>
  );
}
