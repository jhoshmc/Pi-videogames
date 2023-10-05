import {
  GET_GENRES,
  GET_VIDEOGAMES,
  GET_BY_NAME,
  GET_BY_DETAIL,
} from "./actionsTypes";

const initialSate = {
  allVideogames: [],
  videogamesCopy: [],
  genres: [],
};

const rootReducer = (state = initialSate, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_VIDEOGAMES:
      return {
        ...state,
        allVideogames: payload,
        videogamesCopy: payload,
      };
    case GET_BY_NAME:
      return {
        ...state,
        allVideogames: payload,
      };
    case GET_BY_DETAIL:
      return {
        ...state,
        allVideogames: payload,
      };
    case GET_GENRES:
      return {
        ...state,
        genres: payload,
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
