import './Card.css'

function Card({ anime }){
    return(
       <div className="movie-card">
        <div className="card-actions">
        <button >✏️</button>
        <button >🗑️</button>
      </div>
     
      <div className="movie-info">
        <h3 className="movie-name">
        {anime.name}
        </h3>
        <p className="movie-title">{anime.title}</p>
        <p className="movie-rating">⭐{anime.rating} </p>
      </div>
    </div>
    )
}
export default Card