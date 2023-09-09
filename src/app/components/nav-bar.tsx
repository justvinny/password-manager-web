"use client";

import styles from "@/styles/components/nav-bar.module.css";
import Link from "next/link";
import GroupIcon from "@mui/icons-material/Group";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { usePathname } from "next/navigation";

interface Path {
  name: string;
  href: string;
  icon: () => React.ReactElement<typeof PersonAddIcon | typeof GroupIcon>;
}

const paths: Array<Path> = [
  {
    name: "Save Account",
    href: "/save-account",
    icon: () => <PersonAddIcon fontSize="medium" />,
  },
  {
    name: "View Accounts",
    href: "/",
    icon: () => <GroupIcon fontSize="medium" />,
  },
];

const NavBar = () => {
  const path = usePathname();
  const isCurrentPath = (href: string) => href === path;

  return (
    <nav className={styles.navBar}>
      {paths.map((path, index) => (
        <Link
          href={path.href}
          className={`${styles.navItem} ${
            isCurrentPath(path.href) && styles.navItemActive
          }`}
          key={`${index}-${path.name}`}
        >
          {path.icon()}
          {path.name}
        </Link>
      ))}
    </nav>
  );
};

export default NavBar;
