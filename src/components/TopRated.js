import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { endpoint } from '../helpers/url';
import styled from 'styled-components';
import {DivMovies, DivCardMovie, RatingBox, ImgCard, StartImg, Hrating} from '../styleds/MoviesGrid'



const TopRated =()=> {
    const [movie, setMovie] = useState();
    const getTop = () =>{
        axios.get(endpoint)
        .then((response)=>{
            setMovie(response.data.results)
            console.log(response.data.results)
        })

    }

  useEffect(() => {
    getTop()
  
  }, []);
  console.log(movie)
const getImg = (path) =>{
    return path ? `https://image.tmdb.org/t/p/w342${path}` : null
}
  return (
  <>
<h1>Las mejor valoradas</h1>
<DivMovies>
    {
        movie?.map(movie =>(
            <DivCardMovie key={movie.id} onClick={()=>movie={movie}}>
               
                <RatingBox><StartImg /><Hrating>{movie.vote_average}</Hrating></RatingBox>
                <ImgCard src={getImg(movie.poster_path)} />
            </DivCardMovie>
        ))
    }
                
</DivMovies>
  </>
  );
}

export default TopRated;
