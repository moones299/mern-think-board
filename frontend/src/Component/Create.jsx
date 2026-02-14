import { useState, useEffect } from "react";
import "./Create.css";

function Create({
  createNoteHandler,
  updateNoteHandler,
  editingNote,
  onClose,
}) {
  // onClose اضافه شد
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // وقتی فرم باز میشه، اگه قراره ادیت کنیم، مقادیر قبلی رو جایگذاری کن
  useEffect(() => {
    if (editingNote) {
      setTitle(editingNote.title);
      setContent(editingNote.content);
    }
  }, [editingNote]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    if (editingNote) {
      updateNoteHandler(editingNote._id, { title, content });
    } else {
      createNoteHandler({ title, content });
    }
  };

  return (
    <div className="overlay">
      <div className="create-container">
        <form className="create-form" onSubmit={handleSubmit}>
          <h2>{editingNote ? "Edit Note" : "Add New Note"}</h2>

          <input
            type="text"
            placeholder="Note title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            placeholder="Write your note..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />

          <button type="submit">{editingNote ? "Update" : "Create"}</button>
          <button type="button" onClick={onClose}>
            Close
          </button>
        </form>
      </div>
    </div>
  );
}

export default Create;
