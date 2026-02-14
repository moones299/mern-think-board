import "./Card.css";

function Card({ note, onDelete, onEdit }) {
  return (
    <div className="movie-card">
      <div className="card-actions">
        <button onClick={() => onEdit(note)}>✏️</button>
        <button onClick={() => onDelete(note)}>🗑️</button>
      </div>

      <div className="movie-info">
        <h3 className="movie-name">{note.title}</h3>
        <p className="movie-title">{note.content}</p>
      </div>
    </div>
  );
}

export default Card;
