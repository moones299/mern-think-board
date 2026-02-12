import AnimeList from "./Component/AnimeLIst.jsx";
import Create from "./Component/Create.jsx";
import Header from "./Component/Header.jsx"
import { useState } from "react";
const App = () => {
  const [addAnime, setAddAnime] = useState(false);
  const [cardList, setCardList] = useState([]);
  const handleAddClick = () => {
    setAddAnime(true);
  };


  const createCardhandler = (newAnime) => {
  setCardList([...cardList, newAnime]);
  setAddAnime(false); // بستن فرم
};
  

  return( 
    <>
    <Header onAddClick={handleAddClick}/>
    <AnimeList  cardList={cardList}/>
   <div className="formWrapper">
        <Create addAnime={addAnime}  createCardhandler={createCardhandler} /> 
      </div>

    </>
  )
};

export default App;
