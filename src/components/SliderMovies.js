import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PlayLogo from "../data/images/play.png";
import PlusLogo from "../data/images/plus.png";
import {
  DivBtn,
  BtnViewNow,
  BtnViewLater,
  BtnViewLogo,
} from "../styleds/BtnView";
import { Carousel } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Loader";
import { regisFavASincrono } from "../redux/actions/favActions";

const DivSlider = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;

  overflow-x: hidden; //arreglar para que se adapte al objet fit de la img
`;

const VideoYT = styled.iframe`
  /* position: absolute; */
  background-color: inherit;
  height: 100%;
  width: 100%;
  min-height: 360px;
  border-radius: 8px;
`;

const SliderMovies = () => {
  const movies = useSelector((store) => store.app.movies);
  const [trailers, settrailers] = useState([]);
  const [index, setIndex] = useState(0);
  const dispatch = useDispatch();
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  useEffect(() => {    
    const gettrailers = async () =>{
      await movies
      settrailers(movies.slice(0, 4))
    }
    gettrailers()   
  }, [movies]);
  const getUserLocalST = JSON.parse(localStorage.getItem("userBMApp"));

  return (
    <>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {trailers ? (
          trailers?.map((trailer) => (
            <Carousel.Item key={trailer?.id}>
              <DivSlider>
                <VideoYT
                  src={trailer?.trailer}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></VideoYT>
                <DivBtn>
                  <BtnViewNow
                    title={trailer?.id}
                    onClick={() => window.open(trailer?.trailer, "_blank")}
                  >
                    <BtnViewLogo src={PlayLogo} />
                    VER TRAILER
                  </BtnViewNow>
                  <BtnViewLater
                    onClick={() =>
                      dispatch(regisFavASincrono(trailer, getUserLocalST.email))
                    }
                  >
                    <BtnViewLogo src={PlusLogo} />
                    VER DESPUÉS
                  </BtnViewLater>
                </DivBtn>
              </DivSlider>
            </Carousel.Item>
          ))
        ) : (
          <Loader />
        )}
      </Carousel>
    </>
  );
};

export default SliderMovies;
