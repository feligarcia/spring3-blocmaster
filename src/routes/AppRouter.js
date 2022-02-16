import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Router } from "react-router-dom";
import AllMovies from "../components/AllMovies";
import { ModalMovie } from "../components/ModalMovie";
import TopRated from "../components/TopRated";
import Home from "../container/Home";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Login from "../components/Login";
import SingLogIn from "../container/SingLogIn";
import Personal from "../container/Personal";
import PublicRoutes from "./PublicRoutes";
import { ListRoutes } from "./ListRoutes";
import {PrivateRoute} from './PrivateRoutes'
import Loader from "../components/Loader";


function AppRouter() {
  const [checking, setChecking] = useState(true);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const auth = getAuth()
       onAuthStateChanged(auth,(user)=>{
         if(user?.uid){
           setIsLogin(true)
         }else{
           setIsLogin(false)
         }
         setChecking(false)
       })
  }, [setChecking, setIsLogin])

  if(checking){
    return (<Loader/>)
  }

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={
            <PublicRoutes isAuthenticated={isLogin}>
              <SingLogIn />
            </PublicRoutes>
          }/>

          <Route path="/registro" element={
            <PublicRoutes isAuthenticated={isLogin}>
              <SingLogIn />
            </PublicRoutes>
          }/>

              <Route path="/*" element={
                    <PrivateRoute isAuthenticated={isLogin}>
                        <ListRoutes/>
                    </PrivateRoute>
                }/>

            
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default AppRouter;
