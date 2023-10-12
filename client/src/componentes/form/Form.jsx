import { useState, useEffect } from "react";
import { validation } from "../../helpers/validations";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import style from "./form.module.css";
import { useNavigate } from "react-router-dom";
const Form = () => {
  const navigate = useNavigate();

  const Allgenres = useSelector((state) => state.genres);

  const [input, setInput] = useState({
    name: "",
    background_image: "",
    description: "",
    platforms: "",
    released: "",
    rating: "",
    idGenre: [],
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    event.preventDefault();
    const property = event.target.name;
    const value = event.target.value;
    setInput({
      ...input,
      [property]: value,
    });

    setErrors(
      validation({
        ...input,
        [property]: value,
      })
    );
  };

  const handleGenresChange = (event) => {
    const genre = event.target.value;
    console.log(event.target.checked);
    if (event.target.checked) {
      setInput((prevState) => ({
        ...prevState,
        idGenre: [...prevState.idGenre, genre],
      }));
    } else {
      setInput((prevState) => ({
        ...prevState,
        idGenre: prevState.idGenre.filter((g) => g !== genre),
      }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      let err = Object.keys(validation(input));
      if (err.length !== 0) {
        alert("llene todos los datos");
        return;
      } else {
        const { data } = await axios.post(
          "http://localhost:3001/videogames",
          input
        );
        //console.log(response);
        alert("juego creado");
        navigate(`/home/${data.id}`);
      }
    } catch (error) {
      //console.log(error.response.data.error);
      alert(error.response.data.error);
    }
  };

  return (
    <div>
      <h2>Creacion de un juego</h2>
      <form onSubmit={handleSubmit} className={style.container}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            name="name"
            value={input.name}
            onChange={handleChange}
          />
        </div>
        {errors.name && <h4>{errors.name}</h4>}
        <div>
          <label>url imagen:</label>
          <input
            type="text"
            name="background_image"
            value={input.background_image}
            onChange={handleChange}
          />
        </div>
        {errors.background_image && <h4>{errors.background_image}</h4>}
        <div>
          <label>Description:</label>
          <input
            type="text"
            name="description"
            value={input.description}
            onChange={handleChange}
          />
        </div>
        {errors.description && <h4>{errors.description}</h4>}
        <div>
          <label>Platforms:</label>
          <input
            type="text"
            name="platforms"
            value={input.platforms}
            onChange={handleChange}
          />
        </div>
        {errors.platforms && <h4>{errors.platforms}</h4>}
        <div>
          <label>Released:</label>
          <input
            type="date"
            name="released"
            value={input.released}
            onChange={handleChange}
          />
        </div>
        {errors.released && <h4>{errors.released}</h4>}
        <div>
          <label>Rating:</label>
          <input
            type="number"
            name="rating"
            value={input.rating}
            onChange={handleChange}
          />
        </div>
        {errors.rating && <h4>{errors.rating}</h4>}
        <div className={style.genresContainer}>
          <label>Genres:</label>

          {Allgenres.map((gen) => {
            return (
              <div key={gen.id}>
                <input
                  type="checkbox"
                  value={gen.name}
                  onChange={handleGenresChange}
                />
                <label>{gen.name}</label>
              </div>
            );
          })}
        </div>
        {errors.idGenre && <h4>{errors.idGenre}</h4>}
        <div>
          <button type="submit">crear</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
