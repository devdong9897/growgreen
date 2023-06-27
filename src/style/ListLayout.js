import styled from "@emotion/styled";
import { mainColor, subColor, borderColor, ellipsis } from "./GlobalStyle";

// 글 작성 페이지 링크 버튼
export const WriteBtn = styled.div`
  position: fixed;
  left: 50%;
  bottom: 90px;
  z-index: 99;
  transform: translateX(-50%);
  width: 100%;
  max-width: 560px;
  height: 0;
  a {
    display: block;
    position: relative;
    width: 60px;
    height: 60px;
    background: ${mainColor.colorGreenBold};
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.4);
    border-radius: 100%;
    float: right;
    &::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 30px;
      height: 30px;
      background: #fff;
    }
  }
`;

// ListItem 스타일
export const ListItem = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  background-color: ${subColor.colorWhite};
  border-radius: 15px;
  padding: 20px 15px;
  margin-bottom: 15px;
  &:last-child {
    margin-bottom: 0;
  }
  & > a {
    position: absolute;
    top: 20px;
    right: 15px;
    z-index: 1;
    width: 9px;
    height: 20px;
    background: url("https://via.placeholder.com/9x20") no-repeat center;
    background-size: contain;
  }
`;
export const ItemLeft = styled.div`
  width: 100px;
  text-align: center;
  border-right: 0.05rem solid ${borderColor.borderGreen};
  padding-right: 15px;
  margin-right: 15px;
  box-sizing: border-box;
`;
export const ItemRight = styled.div`
  width: calc(100% - 150px);
`;
export const ItemTime = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: ${mainColor.colorGreenBold};
  margin-top: 5px;
  span {
    display: block;
    font-size: 0.7em;
  }
`;
export const ItemName = styled.div`
  font-size: 2rem;
  font-weight: 700;
  ${ellipsis.ellipsisOne}
  span {
    display: block;
    font-size: 0.7em;
    opacity: 0.6;
    margin-bottom: 2px;
    ${ellipsis.ellipsisOne}
  }
`;
export const ItemText = styled.div`
  font-size: 1.6rem;
  font-weight: 500;
  margin-top: 10px;
  ${ellipsis.ellipsisOne}
`;
