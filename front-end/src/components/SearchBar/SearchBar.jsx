import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Autosuggest from "react-autosuggest";
import { searchArticles } from "../../services/articlesService";

//styles
import styles from "./SearchBar.module.scss";
import { FaSearch, FaKeyboard } from "react-icons/fa";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (searchQuery !== "") {
      searchArticles(searchQuery).then(
        setSuggestions,
        console.log(suggestions),

        (error) => {
          console.error("Failed to search articles:", error);
        }
      );
    }
  }, [searchQuery]);

  const inputProps = {
    placeholder: "Search",
    value: searchQuery,
    onChange: (_, { newValue }) => {
      setSearchQuery(newValue);
    },
  };

  const onSuggestionSelected = (_, { suggestion }) => {
    navigate(`/app/article/${suggestion._id}`);
  };

  const getSuggestionValue = (suggestion) => suggestion.title;

  const renderSuggestion = (suggestion) => <div>{suggestion.title}</div>;

  return (
    <div className={styles.searchBar}>
      <div className={styles.searchBar__inputContainer}>
        <FaSearch className={styles.searchBar__icon} />
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={({ value }) => setSearchQuery(value)}
          onSuggestionsClearRequested={() => setSuggestions([])}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
          onSuggestionSelected={onSuggestionSelected}
        />
        <FaKeyboard className={styles.searchBar__icon} />
      </div>
    </div>
  );
};

export default SearchBar;
