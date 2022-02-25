import "@testing-library/jest-dom";
import { loginSincronico, logoutSincrono } from "../../redux/actions/actionLogin";
import { types } from "../../redux/types/types";

describe("Verificar autenticacion", () => {
  test("Validacion de login", () => {
    const id = 1;
    const displayname = "Felipe";
    const email = "juf@gmail.com";
    const image = "http";

    const loginAction = loginSincronico(id, displayname, email, image);
    expect(loginAction).toEqual({
      type: types.login,
      payload: {
        id,
        displayname,
        email,
        image,
      },
    });
  });

  test("Validacion de loggout", () => {
    const actionLoggout = logoutSincrono();
    expect(actionLoggout).toEqual({
      type: types.logout,
      payload: {},
    });
  });
});
