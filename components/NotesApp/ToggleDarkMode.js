import React from "react";
import styles from "./Notes.module.css";

const ToggleDarkMode = ({ handleDarkMode }) => {
  return (
    <div className={styles.header}>
      <h1>Notes App</h1>
      <button
        onClick={() => handleDarkMode((prev) => !prev)}
        className={styles.save}
      >
        Toggle Mode
      </button>
    </div>
  );
};

export default ToggleDarkMode;
