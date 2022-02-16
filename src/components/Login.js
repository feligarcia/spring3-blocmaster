import React from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { createUserActionAsincrono } from "../redux/actions/createUserAction";
import { imgUpload } from "../functions/imgUpload";
import { useNavigate } from "react-router-dom";
import "../styleds/GoogleBtn.css";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      image: "",
    },
    onSubmit: (data) => {
      console.log(data); //no me manda URL de cloudinary
      dispatch(createUserActionAsincrono(data));
      // navigate("/");
    },
  });

  const handleFileChanged = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    imgUpload(file)
      .then((response) => {
        formik.initialValues.image = response;
        console.log(formik.initialValues);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <form className="form-group" onSubmit={formik.handleSubmit}>
        <label>Nombre</label>
        <input
          id="inputName"
          type="text"
          className="form-control mt-2"
          name="name"
          autoComplete="off"
          placeholder="Ingresa tu nombre"
          required
          onChange={formik.handleChange}
        />
        <label>Correo electrónico</label>
        <input
          id="inputEmail"
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
          id="inputpassword"
          type="password"
          className="form-control mt-2"
          name="password"
          autoComplete="off"
          placeholder="Configura una contraseña"
          required
          onChange={formik.handleChange}
        />
        <label>Imagen para tu perfil</label>
        <input
          id="inputImage"
          type="file"
          className="form-control "
          placeholder="Adjuntar una imagen"
          name="image"
          required
          onChange={handleFileChanged}
        />
        <br></br>
        <div className="d-grid gap-2 mx-auto mt-2">
          <button
            value="Save"
            type="submit"
            className="btn btn-warning"
            variant="warning"
          >
            Registrar
          </button>
        </div>
        <br></br>
        
      </form>
    </div>
  );
};

export default Login;
