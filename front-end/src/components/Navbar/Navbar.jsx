import React from "react";
import { FaLanguage, FaMoon, FaBars, FaUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="/" className="navbar__link">
        English
        <FaLanguage />
      </a>
      <a href="/" className="navbar__link">
        <FaMoon />
      </a>
      <a href="/" className="navbar__link">
        <FaBars />
      </a>
      <a href="/" className="navbar__link">
        <FaUser />
      </a>
    </nav>
  );
};

export default Navbar;
