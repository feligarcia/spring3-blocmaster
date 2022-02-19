import { typesFunction } from "../types/types";

const initialState = {
  lgShow: false,
  registroMostrar: false,
  movies:[],
  movie:[],
  search:''
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case typesFunction.mostrarModal:
      return {
        ...state,
        lgShow: action.payload,
        movie: action.movie
      };

    case typesFunction.mostrarRegistro:
      return {
        ...state,
        registroMostrar: action.payload,
      };

      case typesFunction.CargarMovies:
      return {
        ...state,
        movies: action.payload,
      };

      case typesFunction.search:
      return {
        ...state,
        search: action.payload,
      };

    default:
      return state;
  }
};
