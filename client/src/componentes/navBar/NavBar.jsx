import SearchBar from "./searchBar/SearchBar";
import { NavLink } from "react-router-dom";
import style from "./navbar.module.css";
const NavBar = ({ handleChange, handleSubmit }) => {
  return (
    <div>
      <div>
        <NavLink to="/created">
          <button>New videogame</button>
        </NavLink>
      </div>
      <div>
        <SearchBar handleChange={handleChange} handleSubmit={handleSubmit} />
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
