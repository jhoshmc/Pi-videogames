import Card from "../card/Card";
import { useSelector, useDispatch } from "react-redux";
import { getVideogames, deleteGame } from "../../redux/actionsCreated";
import { useEffect, useState } from "react";
import Loading from "../loading/Loading";
import style from "./cards.module.css";

const Cards = () => {
  const dispatch = useDispatch();
  const [carga, setCarga] = useState(true);
  const allVideogames = useSelector((state) => state.allVideogames);
  const deleteHandler = (event) => {
    console.log(event.target.value);
    dispatch(deleteGame(event.target.value));
  };
  useEffect(() => {
    dispatch(getVideogames()).then(() => setCarga(false));
  }, [dispatch]);
  //const videgamesList = allVideogames;
  //console.log(videgamesList.length);
  if (carga) {
    return <Loading />;
  }
  return (
    <div className={style.contenedor}>
      {allVideogames?.map((game) => (
        <Card key={game.id} game={game} deleteHandler={deleteHandler} />
      ))}
    </div>
  );
};

export default Cards;
