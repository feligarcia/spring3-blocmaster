import { typesFunction } from "../types/types";

const initialState = {
  lgShow: false,
  registroMostrar: false,
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case typesFunction.mostrarModal:
      return {
        ...state,
        lgShow: action.payload,
      };

    case typesFunction.mostrarRegistro:
      return {
        ...state,
        registroMostrar: action.payload,
      };

    default:
      return state;
  }
};
