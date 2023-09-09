import styles from "@/styles/components/nav-bar.module.css";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <Link href="/save-account">Save Account</Link>
      <Link href="/">View Accounts</Link>
    </nav>
  );
};

export default NavBar;
