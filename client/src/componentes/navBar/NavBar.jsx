import SearchBar from "./searchBar/SearchBar";
import { NavLink } from "react-router-dom";
import style from "./navbar.module.css";
const NavBar = () => {
  return (
    <div>
      <div>
        <NavLink to="/home/:id">
          <button>Detail</button>
        </NavLink>
        <NavLink to="/form">
          <button>New videogame</button>
        </NavLink>
      </div>
      <div>
        <SearchBar />
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
