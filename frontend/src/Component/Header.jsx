

import "./HeaderCustom.css"
function Header({ onAddClick }){

   
    return(
        <>
        <div className="Headerbar">
             <h1>Top Anime</h1>
       <div className="searchbar ">
        <input type="search" placeholder="search" />
        <button  onClick={onAddClick}>Add Anime</button>
       </div>
        </div>
       
      
        </>
    )
}
export default Header;