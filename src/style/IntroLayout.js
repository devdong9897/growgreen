import styled from "@emotion/styled";
import { mainColor, subColor, borderColor, ellipsis } from "./GlobalStyle";

export const IntroWrap = styled.div`
  position: relative;
  background-color: ${subColor.colorWhite};
  height: 100vh;
  & div {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  & div:first-child {
    top: 32%;
    & > img {
      display: block;
      width: 100%;
    }
  }
  & div:last-child {
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
