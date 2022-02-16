import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { endpoint } from "../helpers/url";
import styled from "styled-components";
import {
  DivMovies,
  DivCardMovie,
  RatingBox,
  ImgCard,
  StartImg,
  Hrating,
} from "../styleds/MoviesGrid";
// import { ViewDescription } from "../functions/ViewDescription";

const TopRated = () => {
  const navigate = useNavigate()
  const [movies, setMovies] = useState();
  const getTop = () => {
    axios.get(endpoint + `&page=3`).then((response) => {
      setMovies(response.data.results);
      console.log(response.data.results);
      console.log(response.data);
    });
  };

  useEffect(() => {
    getTop();
  }, []);
  console.log(movies);
  const getImg = (path) => {
    return path ? `https://image.tmdb.org/t/p/w342${path}` : null;
  };

  const ViewDescription= (id)=>{
    console.log(id)
  navigate(`/modal/${id}`)

  }
  return (
    <>
      <h1>Las mejor valoradas</h1>
      <DivMovies>
        {movies?.map((movie) => (
          <DivCardMovie key={movie.id} onClick={()=>ViewDescription(movie.id)}>
            <RatingBox>
              <StartImg />
              <Hrating>{movie.vote_average}</Hrating>
            </RatingBox>
            <ImgCard src={getImg(movie.poster_path)} />
          </DivCardMovie>
        ))}
      </DivMovies>
    </>
  );
};

export default TopRated;
