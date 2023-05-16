import React from "react";
import { FaSearch, FaKeyboard } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" className="search-bar__input" placeholder="Search" />
      <button className="search-bar__button">
        <FaSearch />
      </button>
      <button className="search-bar__button">
        <FaKeyboard />
      </button>
    </div>
  );
};

export default SearchBar;
