import React from "react";
import styles from "./SearchBar.module.scss";
import { FaSearch, FaKeyboard } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div className={styles.searchBar}>
      <div className={styles.searchBar__inputContainer}>
        <FaSearch className={styles.searchBar__icon} />
        <input
          type="text"
          className={styles.searchBar__input}
          placeholder="Search"
        />
        <FaKeyboard className={styles.searchBar__icon} />
      </div>
    </div>
  );
};

export default SearchBar;
