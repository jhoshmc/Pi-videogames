import axios from "axios";

export function getVideogames() {
  return async function (dispatch) {
    const response = await axios("http://localhost:3001/videogames");
    return dispatch({
      type: "GET_VIDEOGAMES",
      payload: response.data,
    });
  };
}

export function getGenres() {
  return async function (dispatch) {
    const response = await axios(
      "https://api.rawg.io/api/genres?key=c0793cbd9d2e46c49d2768571919f473"
    );
    return dispatch({
      type: "GET_Genres",
      dispatch: response.data,
    });
  };
}
