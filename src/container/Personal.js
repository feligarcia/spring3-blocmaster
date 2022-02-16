import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import { AvatarImg } from '../styleds/LoginGrid';

 

const LayaoutHome = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 150px auto;
    margin: 0 4%;
`
const DivUser = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const DivList = styled.div`
 display: flex;
flex-direction: column;
`

const Personal = () => {
  const { user } = useSelector(store => store.user); 
    const navigate = useNavigate()
    // const userConnect = user[0].displayname
  return (
    <LayaoutHome>
        <NavBar />
        <br></br>
        <DivUser>
        <AvatarImg onClick={()=>navigate('/login')}/>
        <h4>Nombre: {user[0].displayname}</h4>
        <h5>Correo: {user[0].email}</h5>
        </DivUser>
        <br></br>
      <h1>Peliculas para ver mas tarde</h1>
      

      <ul>
        <li>Pelicula 1</li>
        <li>Pelicula 2</li>
        <li>Pelicula 3</li>
      </ul>
    </LayaoutHome>
  );
};

export default Personal;
