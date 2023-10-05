import Card from "../card/Card";

import style from "./cards.module.css";
const Cards = ({ allVideogames }) => {
  const videgamesList = allVideogames;
  console.log(videgamesList.length);
  return (
    <div className={style.contenedor}>
      {videgamesList?.map((game) => (
        <Card game={game} />
      ))}
    </div>
  );
};

export default Cards;
