import "@testing-library/jest-dom";
import { userReducer } from "../../redux/reducers/userReducer";
import { types } from "../../redux/types/types";

describe("Validar redux de la app", () => {
  test("Validar types", () => {
    const typesPrueba = {
      register: "register User",
      login: "login User",
      logout: "logout User",
      location: "location User",
    };
    expect(typesPrueba).toEqual(types);
  });

  test("Validar userReducer", () => {
    const InitialState = {
      user: [],
    };

    const action = {
      type: types.register,
      payload: {
        id: 1,
        email: "prueba@gmail.com",
        displayname: "Juan Prueba",
      },
    };

    const state = userReducer(InitialState, action);
    expect(state).toEqual({
      user: [{ id: 1, email: "prueba@gmail.com", displayname: "Juan Prueba" }]
    });
  });
});
