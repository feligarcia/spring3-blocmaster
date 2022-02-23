import React, { useEffect, useState } from "react";
import { Route, Routes, HashRouter } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import SingLogIn from "../container/SingLogIn";
import PublicRoutes from "./PublicRoutes";
import { ListRoutes } from "./ListRoutes";
import { PrivateRoute } from "./PrivateRoutes";
import Loader from "../components/Loader";

// import CargarMoviesAPI from "../components/CargarMoviesAPI";

function AppRouter() {
  const [checking, setChecking] = useState(true);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        setIsLogin(true);
        const {displayName, email, photoURL} = user
        const sesion = {displayName,email,photoURL}
        localStorage.setItem('userBMApp', JSON.stringify(sesion))
      } else {
        setIsLogin(false);
        localStorage.removeItem('userBMApp')
      }
      setChecking(false);
    });
  }, [setChecking, setIsLogin]);

  if (checking) {
    return <Loader />;
  }

  return (
    <div>
      <HashRouter>
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
      </HashRouter>
    </div>
  );
}

export default AppRouter;
