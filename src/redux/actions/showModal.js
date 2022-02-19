import { typesFunction } from "../types/types";

export const ShowModal = (movie) => {

  return {
    type: typesFunction.mostrarModal,
    payload: true,
    movie:movie,
  };
};

export const CloseModal = () => {
  return {
    type: typesFunction.mostrarModal,
    payload: false,
  };
};
