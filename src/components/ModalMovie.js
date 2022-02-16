import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import styled from "styled-components";
import {
  BtnViewNow,
  BtnViewLater,
  BtnViewLogo,
} from "../styleds/BtnView";
import PlayLogo from "../data/images/play.png";
import PlusLogo from "../data/images/plus.png";
import ImgPrueba from "../data/images/infamous.png";

const DivImg = styled.div`
  margin: 5%;
  background-color: transparent;
`

const ImgDes = styled.img`
  width: 220px;
  height: 200px;
  transform: skewX(25deg) rotate(330deg) translateX(-25px);
`
const Pdata = styled.p`
  color: #A7A9BE;
  font-size: 18px;
line-height: 27px;
`
const DivBtnModal = styled.div`
display: flex;
flex-direction:row;
max-height: 53px;
height:15%;
`
const DivDescription = styled.div`
  display: flex;
  flex-direction: column;
  background-color: transparent;
`
export const ModalMovie = () => {
  const [lgShow, setLgShow] = useState(false);
  const handleClose = () => setLgShow(false);
  const handleShow = () => setLgShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Lanzar modal desde modal
      </Button>

      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        className="modal"
      >
        <DivDescription>
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={handleClose}
          ></button>
          <h1>Infamous</h1>
          <p>
            Arielle nació en un pueblo pequeño, pero sueña con ser famosa. Tras
            conocer a Dean, un delincuente, la pareja empieza a asaltar negocios
            y presumir de sus fechorías en las redes sociales, en busca de una
            notoriedad manchada de sangre.
          </p>
          <br></br>
          <Pdata>2020 · Crimen/Suspenso · 1h 40m</Pdata>
          <br></br>
          <DivBtnModal>
            <BtnViewNow>
              <BtnViewLogo src={PlayLogo} />
              VER AHORA
            </BtnViewNow>
            <BtnViewLater>
              <BtnViewLogo src={PlusLogo} />
              VER DESPUÉS
            </BtnViewLater>
          </DivBtnModal>
        </DivDescription>
        <DivImg>
          <ImgDes src={ImgPrueba} />
        </DivImg>
        
      </Modal>
    </>
  );
};
