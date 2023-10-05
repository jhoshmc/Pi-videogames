import style from "./search.module.css";

const SearchBar = ({ handleChange, handleSubmit }) => {
  return (
    <div>
      <form onChange={handleChange}>
        <input type="search" placeholder="buscador de videojuegos" />
        <button type="submit" onClick={handleSubmit}>
          🔎
        </button>
      </form>
    </div>
  );
};
export default SearchBar;
