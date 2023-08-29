import React from "react";
import styles from "./Navbar.module.scss";
import { FaMoon, FaBars, FaUser, FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { authService } from "../../services/authService";

const Navbar = () => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  const handleLogout = () => {
    authService.logout();
    window.location.reload();
  };

  return (
    <nav className={styles.navbar}>
      <Link to="#" className={styles.navbar__link}>
        English
      </Link>
      <Link to="#" className={styles.navbar__link}>
        <FaMoon />
      </Link>
      <Link to="#" className={styles.navbar__link}>
        <FaBars />
      </Link>
      {isAuthenticated ? (
        <Link className={styles.navbar__link} onClick={handleLogout}>
          <FaSignOutAlt />
        </Link>
      ) : (
        <Link to="/login" className={styles.navbar__link}>
          <FaUser />
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
