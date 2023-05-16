import React from "react";
import appStoreIcon from "../../assets/appStore.png";
import googlePlayIcon from "../../assets/googlePlay.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__left">
        <span className="footer__text">
          This page is available under the CCASL
        </span>
        <span className="footer__text">Terms of use</span>
        <span className="footer__text">Privacy Policy</span>
      </div>
      <div className="footer__right">
        <span className="footer__text">In development</span>
        <img
          src={appStoreIcon}
          alt="Download on App Store"
          className="footer__icon"
        />
        <img
          src={googlePlayIcon}
          alt="Get it on Google Play"
          className="footer__icon"
        />
      </div>
    </footer>
  );
};

export default Footer;
