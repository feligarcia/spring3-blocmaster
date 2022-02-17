import { typesFunction } from "../types/types";

export const ShowRegistro = () => {
  return {
    type: typesFunction.mostrarRegistro,
    payload: true,
  };
};

export const ShowLogin = () => {
  return {
    type: typesFunction.mostrarRegistro,
    payload: false,
  };
};