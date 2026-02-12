import Card from "./Card";
import "./AnimeList.css"
function AnimeList({cardList}){
   return (
    <div className="anime-list">  
      {cardList.map((anime, index) => (
        <Card key={index} anime={anime} />
      ))}
    </div>
  );
}
export default AnimeList;