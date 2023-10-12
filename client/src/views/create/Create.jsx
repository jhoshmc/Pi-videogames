import Form from "../../componentes/form/Form";
import { NavLink } from "react-router-dom";
import style from "./create.module.css";
const Created = () => {
  return (
    <div className={style.container}>
      <NavLink to="/home">
        <button>back</button>
      </NavLink>
      <Form />
    </div>
  );
};

export default Created;
