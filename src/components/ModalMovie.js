
import {  Modal } from "react-bootstrap";
import styled from "styled-components";
import {
  BtnViewNow,
  BtnViewLater,
  BtnViewLogo,
} from "../styleds/BtnView";
import PlayLogo from "../data/images/play.png";
import PlusLogo from "../data/images/plus.png";

import { useDispatch, useSelector } from "react-redux";
import { CloseModal } from "../redux/actions/showModal";
import { regisFavASincrono } from "../redux/actions/favActions";


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
export const ModalMovie =  () => {
  const dispatch = useDispatch();
  const { lgShow } = useSelector((store) => store.app);
   const { movie } =  useSelector((store) => store.app);
  
  return (
    <>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => dispatch(CloseModal())}
        aria-labelledby="example-modal-sizes-title-lg"
        className="modal"
      >
        <DivDescription>
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={() => dispatch(CloseModal())}
          ></button>
          <h1>{movie?.titulo}</h1>
          <p>
            {movie?.descripcion}
          </p>
          <br></br>
          <Pdata>{movie?.rating}   ·   {movie?.fecha_lanzamiento?.slice(0,4)}</Pdata>
          <br></br>
          <DivBtnModal>
            <BtnViewNow title={movie?.id} onClick={()=>window.open(movie?.trailer,'_blank')} >
              <BtnViewLogo src={PlayLogo} />
              VER TRAILER
            </BtnViewNow>
            <BtnViewLater title={movie?.id} onClick={() => dispatch(regisFavASincrono(movie))}>
              <BtnViewLogo src={PlusLogo} />
              VER DESPUÉS
            </BtnViewLater>
          </DivBtnModal>
        </DivDescription>
        <DivImg>
          <ImgDes src={movie?.imagen} />
        </DivImg>
        
      </Modal>
    </>
  );
};
