import styled from "@emotion/styled";
import { mainColor, subColor } from "./GlobalStyle";

export const NotFoundWrap = styled.div`
  position: relative;
  background: ${subColor.colorWhite};
  border-radius: 15px;
  height: 85vh;
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
      span:first-child {
      }
      span:last-child {
        margin-bottom: 20px;
      }
    }
  }
`;
