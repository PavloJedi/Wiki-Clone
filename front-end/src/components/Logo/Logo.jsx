import React from "react";
import logo from "../../assets/wiki-logo.png";

const Logo = () => {
  return (
    <div className="logo">
      <img src={logo} alt="Wikipedia Logo" className="logo__image" />
    </div>
  );
};

export default Logo;
