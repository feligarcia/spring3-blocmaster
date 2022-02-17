import { typesFunction } from "../types/types";

export const ShowModal = () => {
  return {
    type: typesFunction.mostrarModal,
    payload: true,
  };
};

export const CloseModal = () => {
  return {
    type: typesFunction.mostrarModal,
    payload: false,
  };
};
