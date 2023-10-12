import Card from "../card/Card";
import { useSelector, useDispatch } from "react-redux";
import { getVideogames } from "../../redux/actionsCreated";
import { useEffect, useState } from "react";
import Loading from "../loading/Loading";
import style from "./cards.module.css";

const Cards = () => {
  const dispatch = useDispatch();
  const [carga, setCarga] = useState(true);
  const allVideogames = useSelector((state) => state.allVideogames);
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
        <Card key={game.id} game={game} />
      ))}
    </div>
  );
};

export default Cards;
