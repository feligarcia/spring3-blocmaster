import React from "react";
import styled from "styled-components";
import Logo from "../data/images/logo.png";
import SearchLogo from "../data/images/search.png";
import { useNavigate } from "react-router-dom";
import { AvatarImg, LogoutIcon } from "../styleds/LoginGrid";
import { logoutAsincrono } from "../redux/actions/actionLogin";
import { useDispatch, useSelector } from "react-redux";
import Avatar from "../data/images/avatar.png";
import { ShowLogin } from "../redux/actions/showRegistro";

const NavDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: inherit;
  align-items: center;
  justify-content: space-between;
  /* padding: 24px 83px; //verificar al terminar */
`;
const LogoNav = styled.img`
  /* height: 84px; */
  max-height: 84px;
  height: 50%;
  width: auto;
  max-width: 125px;
  background-color: inherit;
`;
const LinkTitle = styled.h5`
  background-color: inherit;
  &:hover {
    color: var(--primary-color);
    text-decoration: underline;
    /* text-decoration-color: var(--primary-color); */
  }
`;
const DivSearch = styled.div`
  /* position:relative; */
  display: flex;
  flex-direction: row;
  background-color: var(--primary-color);
  border-radius: 8px;
  border: 1px solid #fed941;
  width: 20%;
  height: 44px;
  &:hover {
    color: var(--primary-color);
    /* text-decoration: underline; */
    /* text-decoration-color: var(--primary-color); */
  }
`;
const InputSearch = styled.input`
  width: 86%;
  color: black;
  background-color: white;
  border-style: none;
  border-radius: 8px 0px 0px 8px;
  border: 1px solid #fed941;
  font-size: 1.1rem;
`;

const DivLogoCont = styled.div`
  background-color: var(--primary-color);

  padding: 2% 4%;
  border-radius: 8px;
`;
const InputLogo = styled.img`
  margin: 0 auto;
  background-color: inherit;
  height: inherit;
  object-fit: cover;
  max-width: 100%;
  max-height: 100%;
`;

const Pubicacion = styled.p`
  position: absolute;
  font-size: 14px;
  top: 0;
  right: 0;
  color: var(--primary-color);
  text-align: justify;
`;
const Rowdiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items:center;
  /* border: 1px solid var(--primary-color); */
  /* border-radius: 10px; */
  /* background-color:black; */
`;
const NavBar = () => {
  const { user } = useSelector((store) => store.user);
  const location = useSelector((store) => store.user.location);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(ShowLogin())
    dispatch(logoutAsincrono());
  };

  return (
    <NavDiv>
      <LogoNav src={Logo} onClick={() => navigate("/")}></LogoNav>

      <LinkTitle onClick={() => navigate("/")}>Todas</LinkTitle>
      <LinkTitle onClick={() => navigate("/top")}>Más valoradas</LinkTitle>
      <LinkTitle>Menos valoradas</LinkTitle>
      <DivSearch>
        <InputSearch placeholder="Busca tu pelicula favorita"></InputSearch>
        <DivLogoCont>
          <InputLogo src={SearchLogo}></InputLogo>
        </DivLogoCont>
      </DivSearch>
      <Pubicacion>
        <b>{location ? "🏠" + location : null}</b>
      </Pubicacion>
      <Rowdiv>
        <AvatarImg
          src={user ? user[0]?.image:Avatar}
          onClick={() => navigate("/personal")}
        />
        <LogoutIcon onClick={() => handleLogout()} />
      </Rowdiv>
    </NavDiv>
  );
};

export default NavBar;
