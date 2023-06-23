import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import { searchArticles } from "../../services/articlesService";

// Styles
import styles from "./SearchBar.module.scss";
import { FaSearch, FaKeyboard } from "react-icons/fa";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (searchQuery !== "") {
      searchArticles(searchQuery).then(
        (articles) => {
          setSuggestions(articles);
        },
        (error) => {
          console.error("Failed to search articles:", error);
        }
      );
    } else {
      setSuggestions([]);
    }
  }, [searchQuery]);

  const handleInputChange = (newValue) => {
    setSearchQuery(newValue);
  };

  const handleSelect = (selectedOption) => {
    if (selectedOption) {
      navigate(`/app/article/${selectedOption._id}`);
    }
  };

  const formatOptionLabel = ({ title }) => <div>{title}</div>;

  const customStyles = {
    option: (provided) => ({
      ...provided,
      backgroundColor: "transparent",
      color: "black",
    }),
    control: (provided) => ({
      ...provided,
      backgroundColor: "transparent",
      border: "none",
      boxShadow: "none",
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: "black",
      backgroundColor: "transparent",
    }),
    input: (provided) => ({
      ...provided,
      color: "white",
    }),
  };

  return (
    <div className={styles.searchBar}>
      <div className={styles.searchBar__inputContainer}>
        <FaSearch className={styles.searchBar__icon} />
        <Select
          options={suggestions}
          inputValue={searchQuery}
          onInputChange={handleInputChange}
          onChange={handleSelect}
          getOptionLabel={(option) => option.title}
          getOptionValue={(option) => option._id}
          formatOptionLabel={formatOptionLabel}
          placeholder="Search"
          isClearable
          isSearchable
          className={styles.searchBar__input}
          styles={customStyles}
        />
        <FaKeyboard className={styles.searchBar__icon} />
      </div>
    </div>
  );
};

export default SearchBar;
