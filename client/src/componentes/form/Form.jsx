import { useState } from "react";
import { validation } from "../../helpers/validations";
const Form = () => {
  const [input, setInput] = useState({
    name: "",
    background_image: "",
    description: "",
    platforms: "",
    releazed: "",
    rating: "",
    // genres: [],
  });

  const [errors, setErrors] = useState({
    name: "",
    background_image: "",
    description: "",
    platforms: "",
    releazed: "",
    rating: "",
    // genres: [],
  });

  const handleChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
    setErrors(
      validation({
        ...input,
        [event.target.name]: event.target.value,
      })
    );
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <h2>Creacion de un juego</h2>
      <form onSubmit={""}>
        <div>
          <label>Nombre: </label>
          <input
            type="text"
            name="name"
            value={input.name}
            onChange={handleChange}
          />
        </div>
        {errors.name && <span>{errors.name}</span>}
        <div>
          <label>url imagen: </label>
          <input
            type="text"
            name="background_image"
            value={input.background_image}
            onChange={handleChange}
          />
        </div>
        {/* {errors.background_image && <span>{errors.background_image}</span>} */}
        <div>
          <label>Description: </label>
          <input
            type="text"
            name="description"
            value={input.description}
            onChange={handleChange}
          />
        </div>
        {/* {errors.description && <span>{errors.description}</span>} */}
        <div>
          <label>Platforms: </label>
          <input
            type="text"
            name="platforms"
            value={input.platforms}
            onChange={handleChange}
          />
        </div>
        {/* {errors.platforms && <span>{errors.platforms}</span>} */}
        <div>
          <label>Released: </label>
          <input
            type="text"
            name="releazed"
            value={input.releazed}
            onChange={handleChange}
          />
        </div>
        {/* {errors.releazed && <span>{errors.releazed}</span>} */}
        <div>
          <label>Rating: </label>
          <input
            type="text"
            name="rating"
            value={input.rating}
            onChange={handleChange}
          />
        </div>
        {/*errors.rating && <span>{errors.rating}</span>*/}
        {/*
        <div>
          <label>Genres: </label>
          <div>
            <input type="checkbox" name="" id="" />
            <label>Action</label>
            <input type="checkbox" name="" id="" />
            <label>Indie</label>
            <input type="checkbox" name="" id="" />
            <label>Adventure</label>
            <input type="checkbox" name="" id="" />
            <label>RPG</label>
            <input type="checkbox" name="" id="" />
            <label>Strategy</label>
            <input type="checkbox" name="" id="" />
            <label>Shooter</label>
            <input type="checkbox" name="" id="" />
            <label>Casual</label>
            <input type="checkbox" name="" id="" />
            <label>Simulation</label>
            <input type="checkbox" name="" id="" />
            <label>Puzzle</label>
            <input type="checkbox" name="" id="" />
            <label>Arcade</label>
            <input type="checkbox" name="" id="" />
            <label>Plarformer</label>
            <input type="checkbox" name="" id="" />
            <label>Massively Multiplayer</label>
            <input type="checkbox" name="" id="" />
            <label>Racing</label>
            <input type="checkbox" name="" id="" />
            <label>Sports</label>
            <input type="checkbox" name="" id="" />
            <label>Fighting</label>
            <input type="checkbox" name="" id="" />
            <label>Family</label>
            <input type="checkbox" name="" id="" />
            <label>Board Games</label>
            <input type="checkbox" name="" id="" />
            <label>Educational</label>
            <input type="checkbox" name="" id="" />
            <label>Card</label>
          </div>
  </div>*/}
        <button type="submit">crear</button>
      </form>
    </div>
  );
};

export default Form;
