import AnimeList from "./Component/AnimeLIst.jsx";
import Create from "./Component/Create.jsx";
import Header from "./Component/Header.jsx"
import { useState } from "react";
import { useEffect } from "react";

const App = () => {
  const [addAnime, setAddAnime] = useState(false);
  const [cardList, setCardList] = useState([]);
useEffect(() => {
  fetch("http://localhost:3001/api/notes")
    .then(res => res.json())
    .then(data => {
      setCardList(data.data);  // 👈 این خط اصلاح شد
    })
    .catch(err => console.log(err));
}, []);




 
  const handleAddClick = () => {
    setAddAnime(true);
  };

  


const createCardhandler = async (newAnime) => {
  try {
    // POST به بک (همینطور نگه دار)
    fetch("http://localhost:3001/api/notes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newAnime)
    }).catch(err => console.log(err));

    // اضافه کردن کارت به لیست از فرم
    setCardList(prev => [...prev, newAnime]);

    setAddAnime(false);

  } catch (err) {
    console.log(err);
  }
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
