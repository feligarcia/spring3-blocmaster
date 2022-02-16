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
// import { getMovie } from "../functions/getMovie";
import { urltrailer } from "../helpers/url";
import { Carousel } from "react-bootstrap";
import axios from "axios";

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
  const [trailer, setTrailer] = useState();
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const getMovie = (url) => {
    axios.get(url).then((response) => {
      const data = response.data.results.slice(0, 5);
      console.log(data);
      const t = data.map((e) =>
        axios
          .get(
            `https://api.themoviedb.org/3/movie/${e.id}?api_key=f3afe7eac782f9fdc4afe8c90ea75383&append_to_response=videos`
          )
          .then((resp) => {
            const vid = resp.data.videos.results;
            const v = vid.find(
              (e) => e.site === "YouTube" && e.type === "Trailer"
            );
            console.log(v.key);
            setTrailer({ id: e.id, url: v.key });
            // console.log(trailer)
          })
          
      );
      console.log(t)
    });
  };
  useEffect(() => {
    getMovie(urltrailer);
  }, []);

  // const getImg = (path) => {
  //   return path
  //     ? `https://image.tmdb.org/t/p/w342${path}`
  //     : console.log("no encuentro");
  // };
  console.log(trailer);
  return (
    <>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {/* {trailer?.map((e) => {
          <Carousel.Item key={e.id}>
            <DivSlider>
              <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${e.url}?controls=0`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
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
            </DivSlider>
          </Carousel.Item>;
        })} */}

          
          <Carousel.Item>
            <DivSlider>
              <VideoYT
                // width="720"
                // height="315"
                src='https://www.youtube.com/embed/pBvH8hvnJPk?controls=0'
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></VideoYT>
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
            </DivSlider>
          </Carousel.Item>;

          <Carousel.Item>
            <DivSlider>
              <VideoYT
                // width="720"
                // height="315"
                src='https://www.youtube.com/embed/SV0s2S9reT0?controls=0'
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></VideoYT>
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
            </DivSlider>
          </Carousel.Item>;
      
      </Carousel>

        
    </>
  );
};

export default SliderMovies;
