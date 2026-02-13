import "./Create.css"
import { useState } from "react";
import aotPoster from "./images/atack.png";
import  deathNotePoster from "./images/note.png";
function Create({ addAnime , createCardhandler  }) {
   
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");


 
  
  const handleAdd = () => {
   
    const newAnime = {
      name,
      title,
      rating
    };

    createCardhandler(newAnime);

    setImage("");
    setName("");
    setTitle("");
    setRating("");
  };

  return (
    <>
    {addAnime &&
  <div className="overlay">
 <div className="formContainer">
       
        <input type="text" className="name" placeholder="Anime Name" 
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
        <input type="text" className="title" placeholder="Title"   
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        />
        <input type="number" className="rating" placeholder="Rating (1-10)"
        value={rating}
        onChange={(e)=> setRating(e.target.value)}
        />
        <button onClick={handleAdd} className="addAnimeBtn">Add</button>
      </div>

  </div>
  
    }
     
    
   
     
    </>
  );
}

export default Create;
