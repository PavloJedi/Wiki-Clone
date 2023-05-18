import React from "react";
import styles from "./Navbar.module.scss";
import { FaMoon, FaBars, FaUser,  } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <a href="/" className={styles.navbar__link}>
        English
      </a>
      <a href="/" className={styles.navbar__link}>
        <FaMoon />
      </a>
      <a href="/" className={styles.navbar__link}>
        <FaBars />
      </a>
      <a href="/" className={styles.navbar__link}>
        <FaUser />
      </a>
    </nav>
  );
};

export default Navbar;
