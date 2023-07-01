import styled from "@emotion/styled";
import { mainColor, subColor } from "./GlobalStyle";

export const NotFoundWrap = styled.div`
  position: relative;
  background: ${subColor.colorWhite};
  border-radius: 15px;
  height: 82vh;
  & > div {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    img {
      display: block;
      opacity: 0.5;
      margin: 0 auto;
    }
    p {
      margin-top: 25px;
      text-align: center;
      font-size: 1.8rem;
      color: ${mainColor.colorGreenRegular};
      span {
        display: block;
        font-weight: 900;
        font-size: 2em;
      }
      span:last-of-type {
        margin-bottom: 20px;
      }
    }
  }
`;
