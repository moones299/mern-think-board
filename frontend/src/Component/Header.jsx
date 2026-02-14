import "./HeaderCustom.css";
function Header({ onAddClick, setSearchTerm }) {
  return (
    <>
      <div className="Headerbar">
        <h1>Note</h1>
        <div className="searchbar ">
          <input
            type="search"
            placeholder="search"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={onAddClick}>Add</button>
        </div>
      </div>
    </>
  );
}
export default Header;
