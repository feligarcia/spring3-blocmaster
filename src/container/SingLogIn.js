import React from "react";
import Login from "../components/Login";
import styled from "styled-components";
import Logo from "../data/images/logo.png";
import { useNavigate } from "react-router-dom";
import SignIn from "../components/SignIn";
import { useSelector } from "react-redux";

const DivSingLogin = styled.section`
  margin: 5% auto;
  padding: 0 5%;
  display: flex;
  flex-direction: column;
  min-width: 425px;
  max-width: 500px;
`;

const LogoNav = styled.img`
  height: 84px;
  width: fit-content;
  background-color: inherit;
  align-self: center;
`;

const SingLogIn = () => {
  const { registroMostrar } = useSelector((store) => store.app);
  const navigate = useNavigate();
  return (
    <DivSingLogin>
      <LogoNav src={Logo} onClick={() => navigate("/")}></LogoNav>
      <br></br>
      <h2>Registrar nuevo usuario</h2>
      {registroMostrar ? (
        <Login />
      ) : (
        
        <SignIn />
      )}
    </DivSingLogin>
  );
};

export default SingLogIn;
