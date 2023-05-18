import React from "react";
import styles from "./Footer.module.scss";
import appStoreIcon from "../../assets/appStore.svg";
import googlePlayIcon from "../../assets/googlePlay.svg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footer__left}>
          <span className={styles.footer__textFirstPart}>
            This page is available under the
          </span>
          <span className={styles.footer__text}>
            Creative Commons Attribution-ShareAlike License
          </span>
          <span className={styles.footer__text}>Terms of use</span>
          <span className={styles.footer__text}>Privacy Policy</span>
        </div>
        <div className={styles.footer__right}>
          <span className={styles.footer__text}>In development</span>
          <img
            src={appStoreIcon}
            alt="Download on App Store"
            className={styles.footer__icon}
          />
          <img
            src={googlePlayIcon}
            alt="Get it on Google Play"
            className={styles.footer__icon}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
