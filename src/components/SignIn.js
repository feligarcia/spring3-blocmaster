import React from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";

import { loginGoogle, loginEmailPassword } from "../redux/actions/actionLogin";
import { LinkIngreso } from "./Login";
import { ShowRegistro } from "../redux/actions/showRegistro";

const Sigin = (logsig, setLogsig) => {
 
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (data) => {
      console.log(data);
      dispatch(loginEmailPassword(data));
      // navigate('/')
    },
  });

  const handleGoogle = () => {
    dispatch(loginGoogle());
    // navigate('/')
  };

  return (
    <div>
      <form className="form-group" onSubmit={formik.handleSubmit}>
        <label>Correo electrónico</label>
        <input
          id="inputEmailSignIn"
          type="email"
          className="form-control mt-2"
          name="email"
          autoComplete="off"
          placeholder="Tu correo"
          required
          onChange={formik.handleChange}
        />
        <label>Contraseña</label>
        <input
          id="inputpasswordSignIn"
          type="password"
          className="form-control mt-2"
          name="password"
          autoComplete="off"
          placeholder="Ingresa tu contraseña"
          required
          onChange={formik.handleChange}
        />

        <br></br>
        <div className="d-grid gap-2 mx-auto mt-2">
          <button
            value="Save"
            type="submit"
            className="btn btn-warning"
            variant="warning"
          >
            Ingresar
          </button>
        </div>
        <br></br>
        <div className="google-btn" onClick={handleGoogle}>
          <div className="google-icon-wrapper">
            <img
              className="google-icon"
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              alt=""
            />
          </div>
          <p className="btn-text">
            <b>Entrar con google</b>
          </p>
        </div>
        <br></br>
        <LinkIngreso onClick={() => dispatch(ShowRegistro())}> ¿Deseas crear una cuenta? Haz click aqui</LinkIngreso>
      </form>
    </div>
  );
};

export default Sigin;
