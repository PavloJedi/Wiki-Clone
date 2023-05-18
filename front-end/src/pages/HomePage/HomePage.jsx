import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Logo from "../../components/Logo/Logo";
import SearchBar from "../../components/SearchBar/SearchBar";
import Footer from "../../components/Footer/Footer";

import styles from "./HomePage.module.scss";

const HomePage = () => {
  return (
    <>
      <div className={styles.homePage}>
        <Navbar />
        <Logo />
        <SearchBar />
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
