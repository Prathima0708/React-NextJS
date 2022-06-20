const [notes, setNotes] = useState([
  {
    id: Math.floor(Math.random() * 10),
    text: "This is my first Note",
    date: "15/06/2022",
  },
  {
    id: Math.floor(Math.random() * 10),
    text: "This is my second Note",
    date: "15/06/2022",
  },
  {
    id: Math.floor(Math.random() * 10),
    text: "This is my third Note",
    date: "15/06/2022",
  },
]);
const [searchText, setSearchText] = useState("");
const [darkMode, setDarkMode] = useState(false);

useEffect(() => {
  const savedNotes = JSON.parse(localStorage.getItem("react-notes-app"));

  if (savedNotes) {
    setNotes(savedNotes);
  }
}, []);

useEffect(() => {
  localStorage.setItem("react-notes-app", JSON.stringify(notes));
}, [notes]);

const addNote = (text) => {
  const date = new Date();
  const newNote = {
    id: Math.floor(Math.random() * 10),
    text: text,
    date: date.toLocaleDateString(),
  };
  const newNotes = [...notes, newNote];
  setNotes(newNotes);
};

const deleteNote = (id) => {
  const newNotes = notes.filter((note) => note.id !== id);
  setNotes(newNotes);
};

<div className={`${darkMode && styles.dark_mode}`}>
  <div className={styles.contaimer}>
    <ToggleDarkMode handleDarkMode={setDarkMode} />
    <Search handleSearch={setSearchText} />
    <NotesList
      notes={notes.filter((note) =>
        note.text.toLowerCase().includes(searchText)
      )}
      onAddNote={addNote}
      onDeleteNote={deleteNote}
    />
  </div>
</div>;
