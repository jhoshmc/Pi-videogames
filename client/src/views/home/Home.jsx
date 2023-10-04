import { NavLink } from "react-router-dom";
import NavBar from "../../componentes/navBar/NavBar";
import Cards from "../../componentes/cards/Cards";
import style from "./home.module.css";
const Home = () => {
  return (
    <div className={style.container}>
      <h2 className={style.home_title}>Home</h2>
      <div>
        <NavBar />
      </div>
      <Cards />
    </div>
  );
};

export default Home;
