import { useState } from "react";
import "./Create.css";

function Create({ createNoteHandler, onClose }) { // onClose اضافه شد
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    createNoteHandler({ title, content });

    setTitle("");
    setContent("");
  };

  return (
    <div className="overlay">
      <div className="create-container">
      

        <form className="create-form" onSubmit={handleSubmit}>
          <h2>Add New Note</h2>

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

          <button type="submit">Create</button>
           <button type="button" onClick={onClose}>
              Close
            </button>
        </form>
      </div>
    </div>
  );
}

export default Create;
