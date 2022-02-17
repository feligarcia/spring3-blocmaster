import React, { useEffect, useState } from "react";

import {
  DivMovies,
  DivCardMovie,
  RatingBox,
  ImgCard,
  StartImg,
  Hrating,
} from "../styleds/MoviesGrid";
import { urlpopular } from "../helpers/url";
import axios from "axios";


const AllMovies = () => {
  const [movies, setMovies] = useState();
  const getTop = () => {
    axios.get(urlpopular).then((response) => {
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
  return (
    <>
      <h1>Todas las peliculas</h1>
      <DivMovies>
        {movies?.map((movie) => (
          <DivCardMovie key={movie.id} >
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

export default AllMovies;
