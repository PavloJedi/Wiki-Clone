import React from "react";
import styles from "./Logo.module.scss";
import logo from "../../assets/wiki-logo.png";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <img src={logo} alt="Wikipedia Logo" className={styles.logo__image} />
    </div>
  );
};

export default Logo;
