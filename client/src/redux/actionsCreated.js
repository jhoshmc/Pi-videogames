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
export function getByName(name) {
  return async function (dispatch) {
    const response = await axios(
      `http://localhost:3001/videogames/name?name=${name}`
    );
    return dispatch({
      type: "GET_BY_NAME",
      payload: response.data,
    });
  };
}
export function getDetail(id) {
  return async function (dispatch) {
    const response = await axios(`http://localhost:3001/videogames/${id}`);
    return dispatch({
      type: "GET_BY_DETAIL",
      payload: response.data,
    });
  };
}

export function getGenres() {
  return async function (dispatch) {
    const response = await axios("http://localhost:3001/genres");
    return dispatch({
      type: "GET_Genres",
      dispatch: response.data,
    });
  };
}

export function cleardetail() {
  return {
    type: "CLEAR_DETAIL",
  };
}
