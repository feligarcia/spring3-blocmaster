import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { getAuth, onAuthStateChanged } from "firebase/auth";

import SingLogIn from "../container/SingLogIn";

import PublicRoutes from "./PublicRoutes";
import { ListRoutes } from "./ListRoutes";
import { PrivateRoute } from "./PrivateRoutes";
import Loader from "../components/Loader";
import { locationAsincrono } from "../redux/actions/userLocation";
import { useDispatch } from "react-redux";
import CargarMoviesAPI from "../components/CargarMoviesAPI";

function AppRouter() {
  const [checking, setChecking] = useState(true);
  const [isLogin, setIsLogin] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        setIsLogin(true);
      } else {
        setIsLogin(false);
      }
      setChecking(false);
    });

   
  }, [setChecking, setIsLogin]);

useEffect(() => {
  dispatch(locationAsincrono());
}, [])



  if (checking) {
    return <Loader />;
  }

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/login"
            element={
              <PublicRoutes isAuthenticated={isLogin}>
                {/* <CargarMoviesAPI /> */}
                <SingLogIn />
              </PublicRoutes>
            }
          />

          <Route
            path="/registro"
            element={
              <PublicRoutes isAuthenticated={isLogin}>
                <SingLogIn />
              </PublicRoutes>
            }
          />

          <Route
            path="/*"
            element={
              <PrivateRoute isAuthenticated={isLogin}>
                <ListRoutes />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default AppRouter;
