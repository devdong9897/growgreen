import styled from "@emotion/styled";
import { mainColor, subColor, borderColor, ellipsis } from "./GlobalStyle";

export const IntroWrap = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9999;
  background: ${subColor.colorWhite};
  max-width: 560px;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  transition: 0.8s ease-in-out;
  visibility: hidden;
  opacity: 0;
  &.active {
    visibility: visible;
    opacity: 1;
  }
  & div {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  & div:first-of-type {
    top: 32%;
    & > img {
      display: block;
      width: 100%;
    }
  }
  & div:last-of-type {
    bottom: 10%;
    p {
      font-size: 2rem;
    }
    & > span {
      text-align: center;
      margin-bottom: 20px;
      margin-left: -15px;
    }
  }
`;
