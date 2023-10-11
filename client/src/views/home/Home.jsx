import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterGen,
  fuenteGame,
  getByName,
  // getGenres,
  getVideogames,
  order,
  paginateGames,
} from "../../redux/actionsCreated";
//import { NavLink } from "react-router-dom";
import NavBar from "../../componentes/navBar/NavBar";
import Cards from "../../componentes/cards/Cards";
import style from "./home.module.css";
import Paginate from "../../componentes/paginate/Paginate";
const Home = () => {
  const dispatch = useDispatch();
  const allVideogames = useSelector((state) => state.allVideogames);
  // const genres= useSelector((state)=state.genres)

  const [searchString, setSearchString] = useState("");

  function handleChange(event) {
    event.preventDefault();
    setSearchString(event.target.value);
  }
  //* filtro con el backend
  function handleSubmit(event) {
    event.preventDefault();
    dispatch(getByName(searchString));
  }
  //* paginado
  const paginate = (event) => {
    dispatch(paginateGames(event.target.name));
  };
  //*fil
  const filterGenres = (event) => {
    dispatch(filterGen(event.target.value));
  };
  //* orden
  function handleOrder(event) {
    console.log(event.target.value);
    dispatch(order(event.target.value));
  }
  //* tipo de fuente
  function tipoFuente(event) {
    console.log(event.target.value);
    dispatch(fuenteGame(event.target.value));
  }

  useEffect(() => {
    // cuando la pagina se carge va a llegar al reducer el reducer va a definir que caso es , modifica el estado y lo devuelve
    dispatch(getVideogames());
    // dispatch(getGenres())
  }, [dispatch]);
  console.log(allVideogames);
  return (
    <div className={style.container}>
      <h3 className={style.home_title}>Videogames</h3>
      <div>
        <NavBar
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          handleOrder={handleOrder}
          filterGenres={filterGenres}
          tipoFuente={tipoFuente}
        />
      </div>
      <Paginate paginate={paginate} />

      <Cards allVideogames={allVideogames} />

      <Paginate paginate={paginate} />
    </div>
  );
};

export default Home;
