import {
  GET_GENRES,
  GET_VIDEOGAMES,
  GET_BY_NAME,
  GET_BY_DETAIL,
  CLEAR_DETAIL,
} from "./actionsTypes";

const initialSate = {
  allVideogames: [],
  videogamesCopy: [],
  detail: [],
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
        detail: payload,
      };
    case GET_GENRES:
      return {
        ...state,
        genres: payload,
      };
    case CLEAR_DETAIL:
      return {
        ...state,
        detail: [],
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
