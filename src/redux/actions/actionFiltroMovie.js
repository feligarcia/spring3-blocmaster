
import { typesFunction } from "../types/types";

export const filtroMovieApp = (filtro) => {
  return {
    type: typesFunction.filtroMovie,
    payload: filtro,
  };
};