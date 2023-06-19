import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import styles from "./Layout.module.scss";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className={styles.contentWrapper}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
