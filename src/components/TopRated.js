import axios from "axios";
import React, { useEffect, useState } from "react";

import { endpoint } from "../helpers/url";

import {
  DivMovies,
  DivCardMovie,
  RatingBox,
  ImgCard,
  StartImg,
  Hrating,
} from "../styleds/MoviesGrid";
import { ShowModal } from "../redux/actions/showModal";
import { useDispatch } from "react-redux";


const TopRated = () => {
 
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

  const dispatch = useDispatch();


  return (
    <>
      <h1>Las mejor valoradas</h1>
      <DivMovies>
        {movies?.map((movie) => (
          <DivCardMovie key={movie.id} onClick={()=>dispatch(ShowModal())}>
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
