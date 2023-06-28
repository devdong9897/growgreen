import React from "react";
import {
  TodoMainUl,
  ListItem,
  ItemLeft,
  ItemRight,
  ItemTime,
  ItemName,
  ItemText,
} from "../style/ListLayout";

const TodoMainList = () => {
  return (
    <TodoMainUl>
      <ListItem>
        <ItemLeft>
          <ItemTime>
            <span>06-21</span>
            12:00
          </ItemTime>
        </ItemLeft>
        <ItemRight>
          <ItemName>
            <span>식물 종류 이름</span>
            식물 별명
          </ItemName>
          <ItemText>오늘의 할 일</ItemText>
        </ItemRight>
      </ListItem>
    </TodoMainUl>
  );
};

export default TodoMainList;
