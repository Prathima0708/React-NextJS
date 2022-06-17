import React from "react";
import styles from "./Notes.module.css";
import DeleteIcon from "@mui/icons-material/Delete";

const Note = ({ text, id, date }) => {
  return (
    <div className={styles.note}>
      <span>{text}</span>
      <div className={styles.note_footer}>
        <small>{date}</small>
        <DeleteIcon className={styles.delete_icon} />
      </div>
    </div>
  );
};

export default Note;
