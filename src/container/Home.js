import React from 'react';
import styled from 'styled-components';

import { Outlet, useNavigate} from 'react-router-dom'
import { ModalMovie } from '../components/ModalMovie';

import SliderMovies from '../components/SliderMovies';
import NavBar from '../components/NavBar';

const LayaoutHome = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 150px 350px auto;
    margin: 0 4%;
    
`
const MoviesSection = styled.div`
width: inherit;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
background-color: inherit;
`



const  Home =() => {
    const navigate = useNavigate()
  return (
    <LayaoutHome>
      <NavBar />
      <SliderMovies />
       
      <br></br>
      <MoviesSection>
        <Outlet />
      </MoviesSection>
      <ModalMovie />
    </LayaoutHome>
  );
}

export default Home;
