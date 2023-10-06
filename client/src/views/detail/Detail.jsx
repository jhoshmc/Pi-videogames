import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetail, cleardetail } from "../../redux/actionsCreated";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  //console.log(id);
  const dispatch = useDispatch();
  const videogame = useSelector((state) => state.detail);

  //console.log(videogame);
  // console.log(videogame.genres);

  useEffect(() => {
    dispatch(getDetail(id));
    return () => dispatch(cleardetail());
  }, [id]);
  return (
    <div>
      <h1>Detail</h1>
      <div>
        <h3>{videogame.id}</h3>
        <h2>{videogame.name}</h2>
        <img src={videogame.image_background} alt={videogame.name} />
        <span>
          {videogame.platforms?.map((platfor) => (
            <span>{platfor}</span>
          ))}
        </span>
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
