import { useSelector } from "react-redux";
import style from "./paginate.module.css";
const Paginate = ({ paginate }) => {
  const cont = useSelector((state) => state.currentPage);

  return (
    <div className={style.container}>
      <button name="prev" onClick={paginate}>
        prev
      </button>

      <span>-</span>
      <div>
        <span>{cont}</span>
      </div>
      <span>-</span>

      <button name="next" onClick={paginate}>
        next
      </button>
    </div>
  );
};

export default Paginate;
