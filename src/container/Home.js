import React from 'react';
import styled from 'styled-components';
import Logo from '../data/images/logo.png'
import SearchLogo from '../data/images/search.png'
import PlayLogo from '../data/images/play.png'
import PlusLogo from '../data/images/plus.png'
import CoverPrueba from '../data/images/covers.png'
import {Link, Outlet, useNavigate} from 'react-router-dom'


const LayaoutHome = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 150px 350px auto;
    margin: 0 4%;
    
`
const NavBar = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
background-color: inherit;
align-items:center;
justify-content: space-between;
/* padding: 24px 83px; //verificar al terminar */
`
const LogoNav = styled.img`
height:84px;
width:fit-content;
background-color: inherit;
`
const LinkTitle = styled.h3`
background-color:inherit;
&:hover{
    color:var(--primary-color);
    text-decoration: underline;
    /* text-decoration-color: var(--primary-color); */
}
`
const DivSearch = styled.div`
/* position:relative; */
display: flex;
flex-direction: row;
background-color:var(--primary-color);
border-radius: 8px;
border: 1px solid #FED941;
width:40%;
height: 44px;
&:hover{
    color:var(--primary-color);
    /* text-decoration: underline; */
    /* text-decoration-color: var(--primary-color); */
}
`
const InputSearch = styled.input`
width: 86%;
color: black;
background-color: white;
border-style: none;
border-radius: 8px 0px 0px 8px;
border: 1px solid #FED941;
font-size: 1.1rem;
}
`
const DivLogoCont = styled.div`
background-color:var(--primary-color);

padding: 2% 4%;
border-radius: 8px;
`
const InputLogo = styled.img`
margin: 0 auto;
background-color: inherit;
height:inherit;
object-fit:cover;
max-width: 100%;
max-height: 100%;
}
`

const SliderMovies = styled.div`
position:relative;  
display: flex;
flex-direction: row;
background-color: red;
overflow-x: hidden; //arreglar para que se adapte al objet fit de la img
`
const ImgSlider = styled.img`
position:relative;
/* max-height: 100%; */
/* object-fit: cover; */
border-radius: 8px;
`
const DivBtn = styled.div`
display:flex;
flex-direction:row;
flex-wrap: wrap;
align-items:center;
justify-content: space-between;
position:absolute;
bottom: 10%;
margin-left:1%;
width:40%;
min-width:360px;
max-height: 53px;
height:15%;
background-color:initial;
`

const BtnViewNow = styled.button`
display: flex;
align-items:center;
justify-content: space-evenly;
border-style:none;
border-radius: 5px;
background-color:var(--primary-color);
width:47%;
margin: 0 1%;
height:100%;
font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 28px;
&:hover{
    color:var(--primary-color);
    background-color:var(--background-principal);
}
`
const BtnViewLater = styled.button`
display: flex;
align-items:center;
justify-content: space-evenly;
border-radius: 5px;
color:var(--primary-color);
width:47%;
margin: 0 1%;
height:100%;
border: 1px solid #FED941;
font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 28px;
&:hover{
    background-color:var(--primary-color);
    color:var(--background-principal);
}
`
const B = styled.b`
background-color: inherit;
`
const BtnViewLogo = styled.img`
/* margin: 0 auto; */
background-color: inherit;
height:inherit;
object-fit:cover;
max-width: 50%;
max-height: 50%;
}
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
      <NavBar>
        <LogoNav src={Logo} onClick={()=>navigate('/')}></LogoNav>
        
        <LinkTitle >Todas</LinkTitle>
        <LinkTitle onClick={()=>navigate('/top')}>Más valoradas</LinkTitle>
        <LinkTitle>Menos valoradas</LinkTitle>
        <DivSearch>
          <InputSearch placeholder="Busca tu pelicula favorita"></InputSearch>
          <DivLogoCont>
            <InputLogo src={SearchLogo}></InputLogo>
          </DivLogoCont>
        </DivSearch>
      </NavBar>
      <SliderMovies>
        <ImgSlider src={CoverPrueba} />
        <DivBtn>
          <BtnViewNow>
            <BtnViewLogo src={PlayLogo} />
            VER AHORA
          </BtnViewNow>
          <BtnViewLater>
            <BtnViewLogo src={PlusLogo} />
            VER DESPUÉS
          </BtnViewLater>
        </DivBtn>
      </SliderMovies>
      <MoviesSection>
        <Outlet />
      </MoviesSection>
    </LayaoutHome>
  );
}

export default Home;
