import axios from "axios";

export function getVideogames() {
  return async function (dispatch) {
    const response = await axios(`/videogames`);
    return dispatch({
      type: "GET_VIDEOGAMES",
      payload: response.data,
    });
  };
}
export function getByName(name) {
  return async function (dispatch) {
    try {
      const { data } = await axios(`/videogames/name?name=${name}`);
      // const response = await axios(
      //   `http://localhost:3001/videogames/name?name=${name}`
      // );
      return dispatch({
        type: "GET_BY_NAME",
        payload: data,
      });
    } catch (error) {
      alert(error.response.data.error);
    }
  };
}
export function getDetail(id) {
  return async function (dispatch) {
    const response = await axios(`/videogames/${id}`);
    return dispatch({
      type: "GET_BY_DETAIL",
      payload: response.data,
    });
  };
}

export function getGenres() {
  return async function (dispatch) {
    const response = await axios(`/genres`);

    return dispatch({
      type: "GET_GENRES",
      payload: response.data,
    });
  };
}
export function cleardetail() {
  return {
    type: "CLEAR_DETAIL",
  };
}
export function paginateGames(order) {
  return async function (dispatch) {
    try {
      dispatch({
        type: "PAGINATE",
        payload: order,
      });
    } catch (error) {}
  };
}
export function filterGen(genrer) {
  return async function (dispatch) {
    try {
      dispatch({
        type: "FILTER",
        payload: genrer,
      });
    } catch (error) {
      alert(error.message);
    }
  };
}
export function order(ordenGame) {
  return async function (dispatch) {
    try {
      dispatch({
        type: "ORDER",
        payload: ordenGame,
      });
    } catch (error) {
      alert(error.message);
    }
  };
}

export function fuenteGame(tipo) {
  return async function (dispatch) {
    try {
      dispatch({
        type: "FUENTE_GAME",
        payload: tipo,
      });
    } catch (error) {
      alert(error.message);
    }
  };
}

export function deleteGame(id) {
  return async function (dispatch) {
    try {
      const response = await axios.delete(`/videogames/${id}`);
      dispatch({
        type: "DELETE_GAME",
        payload: response.data,
      });
    } catch (error) {
      alert(error.message);
    }
  };
}
