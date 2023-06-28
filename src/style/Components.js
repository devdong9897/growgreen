import styled from "@emotion/styled";
import { mainColor, subColor, borderColor, height } from "./GlobalStyle";

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
export const HeaderNavWrap = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  z-index: 999999;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  max-width: 560px;
  & > div {
    position: absolute;
    top: 0;
    right: 0;
    background-color: ${subColor.colorWhite};
    width: 65%;
    min-width: 200px;
    height: 100%;
  }
`;
// TodoMainHeader
export const TodoMainHeaderInner = styled.div`
  padding-top: 15px;
  h1 {
    text-align: center;
  }
  nav {
    display: flex;
    div {
      width: 50%;
      text-align: center;
      a {
        display: block;
        width: 100%;
        font-size: 1.6rem;
        padding: 15px 0;
      }
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
export const Contents = styled.div``;
// 퀵메뉴
export const QuickMenuWrap = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 50%;
  bottom: 0;
  z-index: 9999;
  transform: translateX(-50%);
  background: ${subColor.colorWhite};
  width: 100%;
  max-width: 560px;
  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 0.05rem;
    background: ${borderColor.borderGray};
  }
  li {
    width: 100%;
    text-align: center;
    a {
      display: block;
      width: 100%;
      font-size: 1.4rem;
      text-transform: uppercase;
      padding: 20px 10px;
      box-sizing: border-box;
      color: ${mainColor.colorGreenBold};
      i {
        display: block;
        font-size: 1.8em;
        margin-bottom: 5px;
      }
    }
  }
`;
// 버튼
export const PageBtnWrap = styled.ul`
  display: flex;
  align-items: center;
  margin-top: 50px;
  li {
    width: 100%;
    margin-right: 10px;
    &:last-child {
      margin-right: 0;
      a,
      button {
        background: ${subColor.colorWhite};
        color: ${mainColor.colorGreenRegular};
        border-color: ${mainColor.colorGreenRegular};
        &:hover {
          background: ${subColor.colorWhite};
          color: ${mainColor.colorGreenBold};
          border-color: ${mainColor.colorGreenBold};
        }
      }
    }
    a,
    button {
      display: block;
      width: 100%;
      font-family: "Noto Sans KR", sans-serif;
      font-size: 1.6rem;
      font-weight: 500;
      line-height: 1;
      text-align: center;
      border: 0.05rem solid ${mainColor.colorGreenBold};
      padding: 15px 0;
      border-radius: 5px;
      background: ${mainColor.colorGreenBold};
      color: ${subColor.colorWhite};
      &:hover {
        background: ${subColor.colorBlack};
        border-color: ${subColor.colorBlack};
      }
    }
  }
`;
