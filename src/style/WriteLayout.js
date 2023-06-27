import styled from "@emotion/styled";
import { subColor, borderColor, height, mainColor } from "./GlobalStyle";

export const TodoWriteFir = styled.div`
  margin: 15 0 0 22px;
`;
export const TodoWriteTxt = styled.p`
  margin-bottom: 10px;
  font-weight: 700;
  font-size: 1.6rem;
  margin-top: 25px;
`;

export const TodoWriteBtnR = styled.button`
  width: 150px;
  height: 50px;
  border-radius: 5px;
  margin: 135px 10px 0 20px;
  color: #fff;
  background: ${mainColor.colorGreenBold};
  font-size: 1.4rem;
`;

export const TodoWriteBtnL = styled.button`
  width: 150px;
  height: 50px;
  border: 1px solid red;
  border-radius: 5px; 
  margin: 135px 20px 0 10px;
  border: 1px solid ${mainColor.colorGreenRegular};
  color: ${mainColor.colorGreenRegular};
  font-size: 1.4rem;
`;
