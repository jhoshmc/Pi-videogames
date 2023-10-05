import style from "./card.module.css";
import { NavLink } from "react-router-dom";
const Card = ({ game }) => {
  // console.log(game);
  const { name, genres, id } = game;
  return (
    <div className={style.container}>
      <NavLink to={`/home/${id}`}>
        <h2>imagen</h2>
        <h2>{name}</h2>
        {genres?.map((genre) => (
          <h3>{genre}</h3>
        ))}
      </NavLink>
    </div>
  );
};

export default Card;
