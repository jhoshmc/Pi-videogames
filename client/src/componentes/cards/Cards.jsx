import Card from "../card/Card";

import style from "./cards.module.css";
const Cards = () => {
  return (
    <div className={style.contenedor}>
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default Cards;
