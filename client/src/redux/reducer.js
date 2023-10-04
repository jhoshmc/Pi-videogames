import { GET_GENRES, GET_VIDEOGAMES } from "./actionsTypes";

const initialSate = {
  allVideogames: [],
  genres: [],
};

const rootReducer = (state = initialSate, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_VIDEOGAMES:
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
