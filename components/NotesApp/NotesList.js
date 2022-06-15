import React from "react";
import Note from "./Note";
import styles from "./Notes.module.css";

const NotesList = ({ notes }) => {
  return (
    <div className={styles.notes_list}>
      <Note />
      <Note />
      <Note />
    </div>
  );
};

export default NotesList;
