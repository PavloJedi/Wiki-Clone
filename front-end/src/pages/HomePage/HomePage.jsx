import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Logo from "../../components/Logo/Logo";
import SearchBar from "../../components/SearchBar/SearchBar";
import Footer from "../../components/Footer/Footer";

const HomePage = () => {
  return (
    <div className="home-page">
      <Navbar />
      <Logo />
      <SearchBar />
      <Footer />
    </div>
  );
};

export default HomePage;
