import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetail, cleardetail } from "../../redux/actionsCreated";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Loading from "../../componentes/loading/Loading";
import style from "./detail.module.css";
const Detail = () => {
  const [carga, setCarga] = useState(true);
  const { id } = useParams();
  //console.log(id);
  const dispatch = useDispatch();
  const videogame = useSelector((state) => state.detail);

  console.log(videogame);
  // console.log(videogame.genres);
  // console.log(videogame.platforms);

  useEffect(() => {
    dispatch(getDetail(id)).then(() => setCarga(false));
    return () => dispatch(cleardetail());
  }, [id]);
  if (carga) {
    return <Loading />;
  }
  return (
    <div key={id} className={style.container}>
      <div>
        <NavLink to="/home">
          <button>back</button>
        </NavLink>
      </div>
      <div className={style.cocontainer}>
        <div className={style.divImagen}>
          <img
            className={style.imagen}
            src={videogame.background_image}
            alt={videogame.name}
          />
        </div>
        <div className={style.infoContend}>
          <h3>{videogame.id}</h3>
          <h2>{videogame.name}</h2>
          <div className={style.platformsContainer}>
            {videogame.platforms?.map((platfor) => (
              <h4>{platfor}</h4>
            ))}
          </div>
          <h2>{videogame.released}</h2>
          <h2>{videogame.rating}</h2>
          <div className={style.genresContainer}>
            {videogame.genres?.map((genre) => (
              <h3>{`${genre} `}</h3>
            ))}
          </div>
        </div>
      </div>
      <div className={style.description}>
        <h4>{videogame.description}</h4>
      </div>
    </div>
  );
};

export default Detail;
