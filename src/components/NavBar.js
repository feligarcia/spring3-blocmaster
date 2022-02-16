import React from 'react'
import styled from 'styled-components'
import Logo from '../data/images/logo.png'
import SearchLogo from '../data/images/search.png'
import {useNavigate} from 'react-router-dom'
import { AvatarImg } from '../styleds/LoginGrid';
import { logoutAsincrono } from '../redux/actions/actionLogin'
import { useDispatch } from 'react-redux'

const NavDiv = styled.div`
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
const LinkTitle = styled.h5`
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

`
const NavBar = () => {
  const dispatch = useDispatch();
    const navigate = useNavigate()
    const handleLogout = () => {
      dispatch(logoutAsincrono())
  }
    return (
    <NavDiv>
        <LogoNav src={Logo} onClick={()=>navigate('/')}></LogoNav>
        
        <LinkTitle onClick={()=>navigate('/')}>Todas</LinkTitle>
        <LinkTitle onClick={()=>navigate('/top')}>Más valoradas</LinkTitle>
        <LinkTitle>Menos valoradas</LinkTitle>
        <DivSearch>
          <InputSearch placeholder="Busca tu pelicula favorita"></InputSearch>
          <DivLogoCont>
            <InputLogo src={SearchLogo}></InputLogo>
          </DivLogoCont>
        </DivSearch>
        <AvatarImg onClick={()=>navigate('/personal')}/>
        <AvatarImg onClick={()=>handleLogout()}/>
      </NavDiv>
  )
}

export default NavBar