import SearchBar from "./searchBar/SearchBar";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getGenres } from "../../redux/actionsCreated";
import style from "./navbar.module.css";
const NavBar = ({
  handleChange,
  handleSubmit,
  handleOrder,
  filterGenres,
  tipoFuente,
}) => {
  const dispatch = useDispatch();
  const genres = useSelector((state) => state.genres);

  useEffect(() => {
    dispatch(getGenres());
  }, []);

  return (
    <div className={style.container}>
      <div>
        <label name="genres">Genres: </label>
        <select onChange={filterGenres} name="genres" id="">
          <option value=""> </option>
          {genres.map((gen) => (
            <option key={gen.id} value={gen.name}>
              {gen.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label>orden: </label>
        <select onChange={handleOrder}>
          <option value=""> </option>
          <option value="AZ">A-Z</option>
          <option value="ZA">Z-A</option>
          <option value="top">🔝</option>
          <option value="f">🥱</option>
        </select>
      </div>
      <div>
        <label>Fuente: </label>
        <select onChange={tipoFuente}>
          <option value=""> </option>
          <option value="all">All</option>
          <option value="api">Api</option>
          <option value="db">Db</option>
        </select>
      </div>

      <div>
        <SearchBar handleChange={handleChange} handleSubmit={handleSubmit} />
      </div>
      <div>
        <NavLink to="/created">
          <button>New videogame</button>
        </NavLink>
      </div>

      <div>
        <NavLink to="/">
          <button>salir</button>
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
