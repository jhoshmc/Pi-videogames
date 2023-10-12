import {
  GET_GENRES,
  GET_VIDEOGAMES,
  GET_BY_NAME,
  GET_BY_DETAIL,
  CLEAR_DETAIL,
  ORDER,
  FILTER,
  PAGINATE,
  FUENTE_GAME,
} from "./actionsTypes";

const initialSate = {
  allVideogames: [],
  videogamesCopy: [],
  detail: [],
  genres: [],
  currentPage: 0,
  gamesFiltered: [],
  filter: false,
};

const rootReducer = (state = initialSate, action) => {
  const { type, payload } = action;
  const ITEMS_PER_PAGE = 15;
  switch (type) {
    case GET_VIDEOGAMES:
      return {
        ...state,
        allVideogames: [...payload].splice(0, ITEMS_PER_PAGE),
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
    case PAGINATE:
      const next_page = state.currentPage + 1;
      const prev_page = state.currentPage - 1;
      const firstIndex =
        payload === "next"
          ? next_page * ITEMS_PER_PAGE
          : prev_page * ITEMS_PER_PAGE;
      if (state.filter) {
        if (payload === "next" && firstIndex >= state.gamesFiltered.length) {
          return state;
        } else if (payload === "prev" && prev_page < 0) {
          return state;
        }
        return {
          ...state,
          allVideogames: [...state.gamesFiltered].splice(
            firstIndex,
            ITEMS_PER_PAGE
          ),
          currentPage: payload === "next" ? next_page : prev_page,
        };
      }
      if (payload === "next" && firstIndex >= state.videogamesCopy.length) {
        return state;
      } else if (payload === "prev" && prev_page < 0) {
        return state;
      }

      return {
        ...state,
        allVideogames: [...state.videogamesCopy].splice(
          firstIndex,
          ITEMS_PER_PAGE
        ),
        currentPage: payload === "next" ? next_page : prev_page,
      };
    case FILTER:
      const filterByGenrer = [...state.videogamesCopy].filter((game) =>
        game.genres.includes(payload)
      );
      return {
        ...state,
        allVideogames: filterByGenrer.splice(0, ITEMS_PER_PAGE),
        gamesFiltered: filterByGenrer,
        filter: true,
      };
    case ORDER:
      let orderByName = [];
      if (payload === "AZ") {
        orderByName = [...state.videogamesCopy].sort((prev, next) => {
          if (prev.name.toLowerCase() > next.name.toLowerCase()) return 1;
          if (prev.name.toLowerCase() < next.name.toLowerCase()) return -1;
          return 0;
        });
      }
      if (payload === "ZA") {
        orderByName = [...state.videogamesCopy].sort((prev, next) => {
          if (prev.name.toLowerCase() > next.name.toLowerCase()) return -1;
          if (prev.name.toLowerCase() < next.name.toLowerCase()) return 1;
          return 0;
        });
      }
      if (payload === "top") {
        orderByName = [...state.videogamesCopy].sort((prev, next) => {
          if (prev.rating > next.rating) return -1;
          if (prev.rating < next.rating) return 1;
        });
      }
      if (payload === "f") {
        orderByName = [...state.videogamesCopy].sort((prev, next) => {
          if (prev.rating > next.rating) return 1;
          if (prev.rating < next.rating) return -1;
        });
      }

      return {
        ...state,
        allVideogames: [...orderByName].splice(0, ITEMS_PER_PAGE),
        videogamesCopy: orderByName,
      };

    case FUENTE_GAME:
      let filterByTipo = [];
      if (payload === "all") {
        filterByTipo = state.videogamesCopy;
      }
      if (payload === "api") {
        filterByTipo = [...state.videogamesCopy].filter(
          (game) => game.created === false
        );
      }
      if (payload === "db") {
        filterByTipo = [...state.videogamesCopy].filter(
          (game) => game.created === true
        );
      }
      return {
        ...state,
        allVideogames: [...filterByTipo].splice(0, ITEMS_PER_PAGE),
        gamesFiltered: filterByTipo,
        filter: true,
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
