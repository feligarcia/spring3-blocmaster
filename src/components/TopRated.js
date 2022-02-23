
import React, { useEffect, useState } from "react";
import Loader from "../components/Loader";
import noFoundMovieImg from "../data/images/noFoundMovie.png";
import { DivNoFoundMovie } from "../styleds/MoviesGrid";

import {
  DivMovies,
  DivCardMovie,
  RatingBox,
  ImgCard,
  StartImg,
  Hrating,
} from "../styleds/MoviesGrid";
import { ShowModal } from "../redux/actions/showModal";
import { useDispatch, useSelector } from "react-redux";
import { ImgMovienoFound } from "../styleds/MoviesGrid";

const TopRated = () => {
  const [itemsload, setitemsload] = useState(15);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [itemsload]);

  const { movies } = useSelector((store) => store.app);
  const { search } = useSelector((store) => store.app);
  const { filtroMovie } = useSelector((store) => store.app);

  const handleScroll= async ()=> {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    )
      return;
    console.log("Cargando mas items");
    console.log(itemsload)
    
    if (itemsload < movies?.length) {
      setitemsload(itemsload + 15);
      console.log('otros 15')
    }
  }

 

  const filterMovie = (name, movies) => {
    name = name?.toLocaleLowerCase();
    return movies.filter((movie) =>
      movie.titulo.toLocaleLowerCase().includes(name)
    );
  };

  let peliculasFiltradas = [];
  let movieswithFilter = []
  let hText = ''
 
  
switch (filtroMovie) {
  case 'Top':
    movieswithFilter = movies.sort(((a, b) => b.rating - a.rating))
    hText = 'Las mejor valoradas'
    break;

    case 'noTop':
      movieswithFilter = movies.sort(((a, b) => a.rating - b.rating))
      hText = 'Las menos valoradas'
    break;

    case 'All':
      hText = 'Todas las peliculas'
      movieswithFilter = movies?.sort()
    break;

  
}

  const moviesInitialZero = movieswithFilter.slice(0, itemsload);

  if (search === "") {
    peliculasFiltradas = moviesInitialZero;
  } else {
    hText = 'Todas las peliculas'
    peliculasFiltradas = filterMovie(search, movies);
  }

  const dispatch = useDispatch();
 
  if (peliculasFiltradas.length === 0 && search !== "") {
    return (
      <DivNoFoundMovie>
        <ImgMovienoFound src={noFoundMovieImg} alt="" />
        <h2>No se encontraron resultados para "{search}"</h2>
      </DivNoFoundMovie>
    );
  } else if (peliculasFiltradas.length === 0) {
    return <Loader />;
  }

  console.log(itemsload);
  return (
    <>
      <h1>{hText}</h1>
      <DivMovies>
        {peliculasFiltradas?.map((movie) => (
          <DivCardMovie
            key={movie.id}
            onClick={() => dispatch(ShowModal(movie))}
          >
            <RatingBox>
              <StartImg />
              <Hrating>{movie.rating}</Hrating>
            </RatingBox>
            <ImgCard src={movie.imagen} />
          </DivCardMovie>
        ))}
      </DivMovies>
    </>
  );
};

export default TopRated;
