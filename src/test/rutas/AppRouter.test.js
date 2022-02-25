import React from "react";
import "@testing-library/jest-dom";
import "../../setupTest";
import { shallow } from "enzyme";
import { PrivateRoute } from "../../routes/PrivateRoutes";
import  PublicRoutes  from "../../routes/PublicRoutes";
import { ListRoutes } from "../../routes/ListRoutes";
import SingLogIn from "../../container/SingLogIn";

describe("Validar Rutas Publicas y Privadas", () => {
  test("Validar render de <PrivateRoute />", () => {
    const isLogin = false;
    const wrapper = shallow(
      <PrivateRoute isAuthenticated={isLogin} children={<ListRoutes />} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  test("Validar render de <PublicRoutes />", () => {
    const isLogin = false;
    const wrapper = shallow(
        <PublicRoutes isAuthenticated={isLogin} children={<SingLogIn />} />
      );
    expect(wrapper).toMatchSnapshot();
  });
});
