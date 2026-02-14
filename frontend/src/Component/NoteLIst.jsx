import Card from "./Card";
import "./NoteList.css";

function NoteList({ noteList }) {
  return (
    <div className="note-list">
      {noteList.map((note) => (
        <Card key={note._id} note={note} />
      ))}
    </div>
  );
}

export default NoteList;
