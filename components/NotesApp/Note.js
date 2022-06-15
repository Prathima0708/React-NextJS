import React from "react";
import styles from "./Notes.module.css";
import DeleteIcon from "@mui/icons-material/Delete";

const Note = () => {
  return (
    <div className={styles.note}>
      <span>Hello !This is our first note</span>
      <div className={styles.note_footer}>
        <small>15/06/2022</small>
        <DeleteIcon className={styles.delete_icon} />
      </div>
    </div>
  );
};

export default Note;
