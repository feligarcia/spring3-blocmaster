import React, { useEffect } from "react";
import styled from "styled-components";
import { locationAsincrono } from "../redux/actions/userLocation";
import { ModalMovie } from "../components/ModalMovie";
import TopRated from "../components/TopRated";
import SliderMovies from "../components/SliderMovies";
import NavBar from "../components/NavBar";
import { useDispatch } from "react-redux";
import { LoadMoviesAsincrono } from "../redux/actions/CargarMovies";

const LayaoutHome = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 150px 350px auto;
  margin: 0 4%;
`;
const MoviesSection = styled.div`
  width: inherit;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: inherit;
`;

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(LoadMoviesAsincrono());
    dispatch(locationAsincrono());
  }, []);



  return (
    <LayaoutHome>
      <NavBar />
      <SliderMovies />

      <br></br>
      <MoviesSection>
        <TopRated />
      </MoviesSection>
      <ModalMovie />
    </LayaoutHome>
  );
};

export default Home;
