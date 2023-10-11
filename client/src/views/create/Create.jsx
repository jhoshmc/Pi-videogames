import Form from "../../componentes/form/Form";
import { NavLink } from "react-router-dom";
const Created = () => {
  return (
    <>
      <NavLink to="/home">
        <button>back</button>
      </NavLink>
      <Form />
    </>
  );
};

export default Created;
