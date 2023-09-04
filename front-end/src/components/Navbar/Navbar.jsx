import React, { useState } from "react";
import styles from "./Navbar.module.scss";
import { FaMoon, FaBars, FaUser, FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { authService } from "../../services/authService";
import PopupMenu from "../PopupMenu/PopupMenu";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  const handleLogout = () => {
    authService.logout();
    window.location.reload();
  };

  const toggleMenu = () => {
    setShowMenu((prevShowMenu) => !prevShowMenu);
  };

  return (
    <nav className={styles.navbar}>
      <Link to="#" className={styles.navbar__link}>
        English
      </Link>
      <Link to="#" className={styles.navbar__link}>
        <FaMoon />
      </Link>
      <Link to="#" className={styles.navbar__link} onClick={toggleMenu}>
        <FaBars />
      </Link>
      {showMenu && <PopupMenu onClose={toggleMenu} />}
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
