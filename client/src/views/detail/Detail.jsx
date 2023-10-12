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
    <div>
      <h1>Detail</h1>
      <NavLink to="/home">
        <button>back</button>
      </NavLink>
      <div key={id} className={style.container}>
        <h3>{videogame.id}</h3>
        <h2>{videogame.name}</h2>
        <img
          className={style.imagen}
          src={videogame.background_image}
          alt={videogame.name}
        />
        <div>
          {videogame.platforms?.map((platfor) => (
            <h3>{platfor}</h3>
          ))}
        </div>
        <h2>{videogame.description}</h2>
        <h2>{videogame.released}</h2>
        <h2>{videogame.rating}</h2>
        <h2>
          {videogame.genres?.map((genre) => (
            <samp>{`${genre} `}</samp>
          ))}
        </h2>
      </div>
    </div>
  );
};

export default Detail;
