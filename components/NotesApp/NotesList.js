import React from "react";
import AddNote from "./AddNote";
import Note from "./Note";
import styles from "./Notes.module.css";

const NotesList = ({ notes, onAddNote }) => {
  return (
    <div className={styles.notes_list}>
      {notes.map((note) => (
        <Note id={note.id} text={note.text} date={note.date} />
      ))}
      <AddNote onAddNote={onAddNote} />
    </div>
  );
};

export default NotesList;
