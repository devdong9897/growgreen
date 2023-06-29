import styled from "@emotion/styled";
import { mainColor, subColor } from "./GlobalStyle";

export const TodoCalendarWrap = styled.div`
  background: ${subColor.colorWhite};
  border-radius: 15px;
  overflow: hidden;
  isolation: isolate;
  padding: 10px 10px 15px;
`;
export const CalendarActiveBtn = styled.button`
  background: ${subColor.colorWhite};
  width: 100%;
  height: 40px;
  font-size: 2rem;
  margin-top: 10px;
  color: ${mainColor.colorGreenBold};
  &.active {
    svg {
      transform: rotate(180deg);
    }
  }
`;
