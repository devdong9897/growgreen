import styled from "@emotion/styled";
import { subColor, borderColor, height } from "./GlobalStyle";

// 여백 설정
export const Inner = styled.div`
  padding: 0 2%;
`;
// 헤더
export const HeaderWrap = styled.header`
  position: fixed;
  top: 0;
  left: 50%;
  z-index: 9999;
  transform: translateX(-50%);
  background: ${subColor.colorWhite};
  width: 100%;
  max-width: 560px;
  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 0.05rem;
    background: ${borderColor.borderGray};
  }
`;
export const HeaderInnerWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${height.headerHeight};
  h1 {
    img {
      width: 53px;
      height: auto;
    }
  }
  button {
    img {
      width: 30px;
      height: auto;
    }
  }
`;
// 컨텐츠
export const Wrap = styled.div`
  position: relative;
  max-width: 560px;
  margin: 0 auto;
  /* 임의의 높이값 지정 : 추후 삭제 필요 */
  min-height: 100vh;
  /* 배경 색 동적으로 변경 */
  background: ${({ theme }) => theme.backgroundColor};
`;
export const Contents = styled.div`
  /* background: ${subColor.colorGray}; */
  margin-top: ${height.headerHeight};
  padding: 2.5rem 0;
`;
