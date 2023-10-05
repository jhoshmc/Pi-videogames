import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../../redux/actionsCreated";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  console.log(id);
  // const dispatch = useDispatch();
  // const videogame= useSelector((state)=>state.allVideogames)

  //  useEffect(() => {
  //    dispatch(getDetail(id));
  //  }, [dispatch]);
  return (
    <div>
      <h2>Detalles de las cartas</h2>
    </div>
  );
};

export default Detail;
