import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";

export const Modal = styled.div`
  background-color: rgba(90, 86, 86, 0.5);
  position: absolute;
  height: 93.2vh;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
  height: 90%;
  width: 90%;
  background-color: rgb(63, 58, 58);
`;

export const Close_icon = styled(CloseIcon)`
  float: right;
  color: rgb(248, 44, 44);
  background-color: rgba(240, 240, 240, 0.9);
  width: 40px !important;
`;

export const LogoAndImg = styled.img`
  display: block;
  max-width: 20%;
  max-height: 20%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 25%;
`;
