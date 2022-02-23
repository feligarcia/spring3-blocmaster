import styled from 'styled-components';
import Star from '../data/images/star.png'
import DELicon from '../data/images/remove.png'

export const DivMovies = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-auto-rows: auto;
    grid-column-gap: 25px;
    grid-row-gap: 25px;
    background-color: inherit;
    margin-bottom: 20px;
`
export const DivCardMovie = styled.div`
    position:relative;
    max-width: 220px;
    max-height: 330px;
    /* height: calc(100-66%); */
    border-radius: 8px;
    background-color: orange;
    overflow: hidden;
`

export const DivNoFoundMovie = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 50px auto;
`
export const ImgMovienoFound = styled.img`
width: 500px;
height: 400px;
`
export const ImgCard = styled.img`
/* object-fit: fill; //hacer que funcione */
`

export const RatingBox = styled.div`
    display: flex;
    flex-direction:row;
    align-items: center;
    justify-content: space-evenly;
    position:absolute;
    top: 7%;
    background-color: #0000008f;
    width:51%;
    height:20%;
    border-radius: 0 32px 32px 0;
    border-style: solid solid solid none;
    border-color: var(--primary-color);
`
export const StartImg = styled.div`
   width: 22px;
   height: 21px;
   background-color: initial;
   background-image: url(${Star});
   background-repeat: no-repeat;
   background-size: cover;
`
export const Hrating = styled.h2`   
   background-color: initial;
`

export const ImgDelete = styled.div`   
    width: 26px;
   height: 26px;
   background-color: initial;
   background-image: url(${DELicon});
   background-repeat: no-repeat;
   background-size: cover;
   &:hover{
       opacity: 0.5;
   }
`