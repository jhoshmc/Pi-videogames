import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getByName, getVideogames } from "../../redux/actionsCreated";
//import { NavLink } from "react-router-dom";
import NavBar from "../../componentes/navBar/NavBar";
import Cards from "../../componentes/cards/Cards";
import style from "./home.module.css";
const Home = () => {
  const dispatch = useDispatch();
  const allVideogames = useSelector((state) => state.allVideogames);
  const [searchString, setSearchString] = useState("");
  // console.log(allVideogames);
  function handleChange(event) {
    event.preventDefault();
    setSearchString(event.target.value);
  }
  //* filtro con el backend
  function handleSubmit(event) {
    event.preventDefault();
    dispatch(getByName(searchString));
  }

  //* filtro sobre el estado
  // para hacer la copia y no se pierdan los datos a la hora de filtrar
  // const [filtered, setFiltered] = useState(allVideogames);
  // const [searchString, setSearchString] = useState("");

  // function handleChange(event) {
  //   event.preventDefault();
  //   setSearchString(event.target.value);
  // }

  // function handleSubmit(event) {
  //   event.preventDefault();
  //   const filtered = allVideogames.filter((game) =>
  //     game.name.includes(searchString)
  //   );

  //   setFiltered(filtered);
  // }

  useEffect(() => {
    // cuando la pagina se carge va a llegar al reducer el reducer va a definir que caso es , modifica el estado y lo devuelve
    dispatch(getVideogames());
  }, [dispatch]);
  return (
    <div className={style.container}>
      <h3 className={style.home_title}>Videogames</h3>
      <div>
        <NavBar handleChange={handleChange} handleSubmit={handleSubmit} />
      </div>
      <Cards allVideogames={allVideogames} />
    </div>
  );
};

export default Home;
