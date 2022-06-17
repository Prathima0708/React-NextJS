import React from "react";
import { useState } from "react";
import styles from "./Notes.module.css";

const AddNote = ({ onAddNote }) => {
  const [noteText, setNoteText] = useState("");
  const characterLimit = 200;
  const handleChange = (e) => {
    if (characterLimit - e.target.value.length >= 0) {
      setNoteText(e.target.value);
    }
  };
  const handleSubmit = () => {
    if (noteText.trim().length > 0) {
      onAddNote(noteText);
      setNoteText("");
    }
  };
  return (
    <div className={styles.new}>
      <div className={(styles.note, styles.new)}>
        <textarea
          className={styles.textarea}
          rows="8"
          cols="10"
          placeholder="Type to add a new note"
          onChange={handleChange}
          value={noteText}
        ></textarea>
        <div className={styles.note_footer}>
          <small className="mb-1">
            {characterLimit - noteText.length} remaining
          </small>
          <button className={styles.save} onClick={handleSubmit}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddNote;
