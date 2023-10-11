import { useState, useEffect } from "react";
import { validation } from "../../helpers/validations";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { getGenres } from "../../redux/actionsCreated";
import { useNavigate } from "react-router-dom";
const Form = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const Allgenres = useSelector((state) => state.genres);

  useEffect(() => {
    dispatch(getGenres());
  }, []);
  const [input, setInput] = useState({
    name: "",
    background_image: "",
    description: "",
    platforms: "",
    released: "",
    rating: "",
    idGenre: [],
  });

  const [errors, setErrors] = useState({
    name: "",
    background_image: "",
    description: "",
    platforms: "",
    released: "",
    rating: "",
    idGenre: [],
  });

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    /*
    if (property === "idGenre") {
      const selectedGenres = Array.from(
        event.target.selectedOptions,
        (option) => option.value
      );

      // Filtrar los géneros seleccionados para eliminar duplicados
      const uniqueGenres = Array.from(new Set(selectedGenres));

      setInput({
        ...input,
        [property]: uniqueGenres,
      });
    }*/
    /*
    if (property === "idGenre") {
      const selectedGenres = Array.from(
        event.target.selectedOptions,
        (option) => option.value
      );

      setInput({
        ...input,
        [property]: selectedGenres,
      });
    } else {
      setInput({
        ...input,
        [property]: value,
      });
    }*/
    /*
    if (property === "gernes") {
      const gen = Array.from(
        event.target.selectedOptions,
        (option) => option.value
      );
      if (!input.idGenre.includes(gen)) {
        setInput({
          ...input,
          idGenre: [...input.idGenre, gen],
        });
      }
    }*/

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
  //m
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
  //m

  const handleSubmit = async (event) => {
    event.preventDefault();
    // axios
    //   .post("http://localhost:3001/videogames", input)
    //   .then((response) => {
    //     if (!response.ok) {
    //       throw new Error("error en la solicitud");
    //     }
    //     return response.json();
    //   })
    //   .then((data) => console.log(data))
    //   .catch((error) => {
    //     console.log(error.message);
    //   });
    try {
      const { data } = await axios.post(
        "http://localhost:3001/videogames",
        input
      );
      //console.log(response);
      alert("juego creado");
      navigate(`/home/${data.id}`);
    } catch (error) {
      //console.log(error.response.data.error);
      alert(error.response.data.error);
    }
  };

  return (
    <div>
      <h2>Creacion de un juego</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            name="name"
            value={input.name}
            onChange={handleChange}
          />
        </div>
        {errors.name && <span>{errors.name}</span>}
        <div>
          <label>url imagen:</label>
          <input
            type="text"
            name="background_image"
            value={input.background_image}
            onChange={handleChange}
          />
        </div>
        {errors.background_image && <span>{errors.background_image}</span>}
        <div>
          <label>Description:</label>
          <input
            type="text"
            name="description"
            value={input.description}
            onChange={handleChange}
          />
        </div>
        {errors.description && <span>{errors.description}</span>}
        <div>
          <label>Platforms:</label>
          <input
            type="text"
            name="platforms"
            value={input.platforms}
            onChange={handleChange}
          />
        </div>
        {errors.platforms && <span>{errors.platforms}</span>}
        <div>
          <label>Released:</label>
          <input
            type="date"
            name="released"
            value={input.released}
            onChange={handleChange}
          />
        </div>
        {errors.released && <span>{errors.released}</span>}
        <div>
          <label>Rating:</label>
          <input
            type="number"
            name="rating"
            value={input.rating}
            onChange={handleChange}
          />
        </div>
        {errors.rating && <span>{errors.rating}</span>}
        <div>
          <label>Genres:</label>
          <br />
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

          {/* <select
            multiple
            name="idGenre"
            onChange={handleChange}
            value={input.idGenre}
          >
            <option> </option>
            {idGenre.map((genre) => (
              <option type="input" key={genre.id} value={genre.name}>
                {genre.name}
              </option>
            ))}
          </select> */}
        </div>
        {errors.idGenre && <span>{errors.idGenre}</span>}

        <button type="submit">crear</button>
      </form>
    </div>
  );
};

export default Form;
