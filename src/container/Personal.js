import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import { ProfileImg } from "../styleds/LoginGrid";
import Avatar from "../data/images/avatar.png";
import { Button } from "react-bootstrap";
import { Rating } from 'react-simple-star-rating'

const LayaoutHome = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 150px auto;
  margin: 0 4%;
`;
const DivUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const DivList = styled.div`
  display: flex;
  flex-direction: column;
`;
const DivItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  background-color: black;
  border: 2px solid white;
  border-radius: 6px;
  height: 100px;
  padding: 6px;
`;

const ImgList = styled.img`
  height: 100%;
  width: 100px;
  background-color: yellow;
`;

const StarRating = styled.div`
  display: flex;
  flex-direction: row;
  /* background-color: blue; */
`;



const Personal = () => {
  const [rating, setRating] = useState(0)
  const { user } = useSelector((store) => store.user);
  const location = useSelector((store) => store.user.location);
  
  console.log(user);
  const handleRating = (rate) => {
    setRating(rate)
    
  }

  return (
    <LayaoutHome>
      <NavBar />
      <br></br>
      <DivUser>
        <ProfileImg src={user ? user[0]?.image : Avatar} />
        <h4>Nombre: {user ? user[0]?.displayname : "Prueba"}</h4>
        <h5>Correo: {user ? user[0]?.email : "Prueba"}</h5>
        <h5>Ubicacion: {location ? location : "Ubicacion no encontrada"}</h5>
      </DivUser>
      <br></br>
      <h1>Ver después</h1>

      <DivList>
        <DivItem>
          <ImgList src="" />
          <h5>Pelicula 1</h5>
          <StarRating>
          <Rating onClick={handleRating} ratingValue={rating} fillColorArray={['#f17a45', '#f19745', '#f1a545', '#f1b345', '#f1d045']} />
          </StarRating>
          <Button variant="warning">
            <p>Modificar</p>
          </Button>
          <Button variant="danger">
            <p>Eliminar</p>
          </Button>
        </DivItem>
        <DivItem>Pelicula 2</DivItem>
        <DivItem>Pelicula 3</DivItem>
      </DivList>
    </LayaoutHome>
  );
};

export default Personal;
