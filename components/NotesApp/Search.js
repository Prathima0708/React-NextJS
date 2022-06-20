import React from "react";
import styles from "./Notes.module.css";
import SearchIcon from "@mui/icons-material/Search";

const Search = ({ handleSearch }) => {
  return (
    <div className={styles.search}>
      <SearchIcon style={{ fontSize: "1.3em" }} />
      <input
        onChange={(e) => handleSearch(e.target.value)}
        type="text"
        placeholder="type to search..."
      />
    </div>
  );
};

export default Search;
