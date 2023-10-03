import { NavLink } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <h1>Henry Videogames</h1>
      <h2>Bienvenido</h2>
      <NavLink to="/home">
        <button>Ingresar</button>
      </NavLink>
    </div>
  );
};

export default Landing;
