import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import { ProfileImg } from "../styleds/LoginGrid";
import Avatar from "../data/images/avatar.png";
import { Button } from "react-bootstrap";
import { Rating } from "react-simple-star-rating";

import { borrarFavASincro, listFavASincrono } from "../redux/actions/favActions";
import Loader from "../components/Loader";

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
  align-items: center;
  /* background-color: black; */
  border: 2px solid white;
  border-radius: 6px;
  height: 100px;
  padding: 6px;
`;

const ImgList = styled.img`
  height: 100%;
  width: 66px;
  background-color: yellow;
`;

const StarRating = styled.div`
  display: flex;
  flex-direction: row;
  /* background-color: blue; */
`;

const DivCantMovies = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const DivBtns = styled.div`
  display: flex;
  flex-direction: row;
  height: 50%;
`;

const Personal = () => {
  const dispatch = useDispatch();
  const [rating, setRating] = useState(0);
  const { user } = useSelector((store) => store.user);
  const { favMovies } = useSelector((store) => store.favs);
  const location = useSelector((store) => store.user.location);


  console.log(favMovies);
  const handleRating = (rate) => {
    setRating(rate);
  };

  useEffect(() => {
    dispatch(listFavASincrono());
  }, []);

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
      <DivCantMovies>
        {" "}
        <h1>Ver después: </h1> <h5>Total: {favMovies?.length}</h5>
      </DivCantMovies>
      <DivList>
        {favMovies ? (
          favMovies.map((movie) => (
            <DivItem key={Math.random()}>
              <ImgList src={movie.imagen} />
              <h5>{movie.titulo}</h5>
              <p>{movie.fecha_lanzamiento.slice(0,4)}</p>
              <StarRating>
                <Rating
                  onClick={handleRating}
                  initialValue={Math.trunc(movie.rating / 2)}
                  size={18}
                  tooltipClassName={'tooltipstyle'}
                  showTooltip
                  tooltipArray={['Malisima', 'Mala', 'Normal', 'Buena', 'Perfecta']}
                  fillColorArray={[
                    "#f17a45",
                    "#f19745",
                    "#f1a545",
                    "#f1b345",
                    "#f1d045",
                  ]}
                />
              </StarRating>
              <DivBtns>
                <Button variant="warning">
                  <p>Modificar</p>
                </Button>
                <Button variant="danger" onClick={()=>dispatch(borrarFavASincro(movie.id))}>
                  <p>Eliminar</p>
                </Button>
              </DivBtns>
            </DivItem>
          ))
        ) : (
          <Loader />
        )}
      </DivList>
    </LayaoutHome>
  );
};

export default Personal;
