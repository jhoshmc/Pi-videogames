import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteGame } from "../../redux/actionsCreated";
import style from "./card.module.css";
const Card = ({ game, deleteHandler }) => {
  // console.log(game);
  // const dispatch = useDispatch();
  // const deleteHandler = (event) => {
  //   console.log(event.target.value);
  //   dispatch(deleteGame(event.target.value));
  // };

  const { background_image, name, genres, id, rating, created } = game;
  return (
    <div key={id} className={style.container}>
      {created ? (
        <div>
          <button value={id} onClick={deleteHandler}>
            X
          </button>
        </div>
      ) : (
        ""
      )}
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
