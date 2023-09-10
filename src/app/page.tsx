import styles from "@/styles/page.module.css";
import ViewAccounts from "./view-accounts/view-accounts";
import NavBar from "@/components/nav-bar";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <ViewAccounts />
      </main>
      <NavBar />
    </>
  );
}
