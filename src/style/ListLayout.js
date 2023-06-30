import styled from "@emotion/styled";
import { mainColor, subColor, borderColor, ellipsis } from "./GlobalStyle";

// 글 작성 페이지 링크 버튼
export const WriteBtn = styled.div`
  position: fixed;
  left: 50%;
  bottom: 165px;
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
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
    border-radius: 100%;
    float: right;
    margin-right: 2%;
    &::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: url("/images/icon_write.svg") no-repeat center;
      background-size: contain;
      width: 22px;
      height: 22px;
    }
  }
`;
// TodoMainList 스타일
export const TodoMainUl = styled.ul`
  margin-top: 20px;
`;

// TodoList 스타일
export const ListItem = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  background-color: ${subColor.colorWhite};
  border-radius: 15px;
  padding: 20px 15px;
  margin-bottom: 15px;
  overflow: hidden;
  isolation: isolate;
  box-sizing: border-box;
  height: 115px;
  &:last-child {
    margin-bottom: 0;
  }
  & > a {
    position: absolute;
    top: 16px;
    right: 15px;
    z-index: 1;
    width: 9px;
    height: 20px;
    background: url("/images/icon_modify.svg") no-repeat center;
    background-size: contain;
  }
  &.noTodayTodo {
    display: block;
    height: auto;
    text-align: center;
    padding: 35px 15px;
    img {
      display: block;
      margin: 0 auto;
      width: 50px;
      height: auto;
    }
    p {
      font-size: 1.6rem;
      font-weight: 700;
      color: ${mainColor.colorGreenRegular};
      margin-top: 15px;
      span {
        display: block;
        font-size: 0.85em;
        margin-bottom: 3px;
        opacity: 0.7;
      }
    }
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
  &.close {
    color: #9d9d9d;
  }
`;
export const ItemTime = styled.div`
  font-size: 2.3rem;
  font-weight: 700;
  color: ${mainColor.colorGreenBold};
  margin-top: 5px;
  span {
    display: block;
    font-size: 0.7em;
  }
  &.close {
    color: #9d9d9d;
  }
`;
export const ItemName = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 1.3;
  ${ellipsis.ellipsisOne}
  span {
    display: block;
    font-size: 0.8em;
    line-height: 1.2;
    height: 1.7rem;
    opacity: 0.6;
    ${ellipsis.ellipsisOne}
  }
`;
export const ItemText = styled.div`
  font-size: 1.6rem;
  line-height: 1.6;
  height: 2.5rem;
  font-weight: 500;
  margin-top: 10px;
  ${ellipsis.ellipsisOne}
`;

// MyPlantList 스타일

export const MyPlantLiItem = styled.li`
  position: relative;
  margin-bottom: 15px;
  &:last-child {
    margin-bottom: 0;
  }
  & > a {
    display: flex;
    align-items: center;
    position: relative;
    background-color: ${subColor.colorWhite};
    border-radius: 15px;
    overflow: hidden;
    isolation: isolate;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 15px;
      overflow: hidden;
      isolation: isolate;
    }
    &:hover::after {
      box-shadow: 0 0 0 2px ${borderColor.borderGreen} inset;
    }
  }
`;
export const MyPlantLiItemLeft = styled.div`
  width: 115px;
  height: 115px;
  text-align: center;
  margin-right: 15px;
  box-sizing: border-box;
  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const MyPlantLiItemRight = styled.div`
  width: calc(100% - 150px);
`;
export const MyPlantLiItemName = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 1.3;
  ${ellipsis.ellipsisOne}
  span {
    display: block;
    font-size: 0.8em;
    line-height: 1.2;
    height: 1.7rem;
    opacity: 0.6;
    ${ellipsis.ellipsisOne}
  }
`;
export const MyPlantLiItemDate = styled.div`
  height: 1.5rem;
  font-size: 1.3rem;
  font-weight: 300;
  margin-top: 20px;
  opacity: 0.6;
`;

// DiaryList 스타일
export const DiaryLiItem = styled.li`
  position: relative;
  margin-bottom: 15px;
  &:last-child {
    margin-bottom: 0;
  }
  & > a {
    display: flex;
    align-items: center;
    position: relative;
    background-color: ${subColor.colorGray};
    border-radius: 15px;
    overflow: hidden;
    isolation: isolate;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 15px;
      overflow: hidden;
      isolation: isolate;
    }
    &:hover::after {
      box-shadow: 0 0 0 2px ${borderColor.borderGreen} inset;
    }
  }
`;
export const DiaryLiItemLeft = styled.div`
  width: 115px;
  height: 115px;
  text-align: center;
  margin-right: 15px;
  box-sizing: border-box;
  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const DiaryLiItemRight = styled.div`
  width: calc(100% - 150px);
`;
export const DiaryLiItemName = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 1.3;
  ${ellipsis.ellipsisOne}
  span {
    display: block;
    font-size: 0.8em;
    line-height: 1.2;
    height: 1.7rem;
    color: ${mainColor.colorGreenBold};
    ${ellipsis.ellipsisOne}
  }
  i {
    margin-right: 5px;
  }
`;
export const DiaryLiItemText = styled.div`
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 1.6;
  margin-top: 10px;
  ${ellipsis.ellipsisOne}
`;
