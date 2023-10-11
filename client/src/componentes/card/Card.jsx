import style from "./card.module.css";
import { NavLink } from "react-router-dom";
const Card = ({ game }) => {
  // console.log(game);

  const { background_image, name, genres, id } = game;
  return (
    <div className={style.container}>
      <NavLink to={`/home/${id}`}>
        <div key={id}>
          <img src={background_image} alt={name} width="200px" height="200px" />
        </div>
        <h2>{id}</h2>
        <h2>{name}</h2>
        <div>
          {genres?.map((genre) => (
            <h5>{`${genre} `}</h5>
          ))}
        </div>
      </NavLink>
    </div>
  );
};

export default Card;
