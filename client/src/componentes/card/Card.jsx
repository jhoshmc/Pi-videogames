import style from "./card.module.css";
import { NavLink } from "react-router-dom";
const Card = ({ game }) => {
  // console.log(game);

  const { background_image, name, genres, id, rating } = game;
  return (
    <div key={id} className={style.container}>
      <div>
        <img className={style.imagen} src={background_image} alt={name} />
      </div>
      <div>
        <h2>{name}</h2>
        <div className={style.genresContainer}>
          {genres?.map((genre) => (
            <h5>{`${genre} `}</h5>
          ))}
        </div>
        <div>
          <span>⭐{rating}</span>
        </div>
      </div>
      <NavLink to={`/home/${id}`}>
        <div>View more</div>
      </NavLink>
    </div>
  );
};

export default Card;
