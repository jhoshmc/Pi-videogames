import { NavLink } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <NavLink to="/">
        <button>salir</button>
      </NavLink>
      <h2>Aqui van las cartas y todo eso</h2>
    </div>
  );
};

export default Home;
