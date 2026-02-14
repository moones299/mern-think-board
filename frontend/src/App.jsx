import NoteList from "./Component/NoteList";
import Create from "./Component/Create";
import Header from "./Component/Header";
import { useState, useEffect } from "react";

const App = () => {
  const [addNote, setAddNote] = useState(false);
  const [noteList, setNoteList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/notes")
      .then((res) => res.json())
      .then((data) => setNoteList(data.data))
      .catch((err) => console.log(err));
  }, []);

  const handleAddClick = () => {
    setAddNote(true); // وقتی دکمه زده شد، فرم باز بشه
  };

  const createNoteHandler = async (newNote) => {
    try {
      // POST به بک
      await fetch("http://localhost:3001/api/notes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newNote),
      }).catch((err) => console.log(err));

      // اضافه کردن note به لیست در فرانت
      setNoteList((prev) => [...prev, newNote]);

      setAddNote(false); // فرم بعد از ساخت note بسته شود
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Header onAddClick={handleAddClick} />
      <NoteList noteList={noteList} />

      {/* فرم فقط وقتی addNote=true نمایش داده میشه */}
      {addNote && <Create addNote={addNote} createNoteHandler={createNoteHandler}   onClose={() => setAddNote(false)} />}
    </>
  );
};

export default App;
