import { NavLink } from "react-router-dom";

import style from "./landing.module.css";
const Landing = () => {
  return (
    <div className={style.contenedor}>
      <h1 className={style.letras}>Henry Videogames</h1>
      <h2 className={style.letras}>Bienvenido</h2>
      <NavLink to="/home">
        <button>Ingresar</button>
      </NavLink>
    </div>
  );
};

export default Landing;
