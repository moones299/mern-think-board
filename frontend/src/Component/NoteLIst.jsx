import Card from "./Card";
import "./NoteList.css";

function NoteList({ noteList, onDelete, onEdit, isLoading }) {
  if (isLoading) {
    return (
      <div className="note-list">
        {[1, 2, 3].map((n) => (
          <div key={n} className="movie-card skeleton-card">
            <div className="skeleton-line"></div>
            <div className="skeleton-line short"></div>
          </div>
        ))}
      </div>
    );
  }

  // Empty State
  if (noteList.length === 0) {
    return <div className="empty-state">No notes found. Create your note!</div>;
  }

  return (
    <div className="note-list">
      {noteList.map((note) => (
        <Card key={note._id} note={note} onDelete={onDelete} onEdit={onEdit} />
      ))}
    </div>
  );
}

export default NoteList;
