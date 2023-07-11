import React, { useState } from "react";

import {
  TodoMainUl,
  ListItem,
  ItemLeft,
  ItemRight,
  ItemTime,
  ItemName,
  ItemText,
} from "../style/ListLayout";

const TodoMainList = ({ selectTodoData }) => {
  // finishYn의 값이 0인 경우 close 클래스 적용
  return (
    <TodoMainUl>
      {selectTodoData.map((item, index) => (
        <ListItem key={index} className={item.finishYn === 0 ? "" : "close"}>
          <ItemLeft>
            <ItemTime>
              <span>{item.deadlineDate}</span>
              {item.deadlineTime}
            </ItemTime>
          </ItemLeft>
          <ItemRight>
            <ItemName>
              <span>{item.nickNm}</span>
              {item.nm}
            </ItemName>
            <ItemText>{item.ctnt}</ItemText>
          </ItemRight>
        </ListItem>
      ))}
      {/* todayListData 없을 때 아래 코드 출력 */}
      {selectTodoData.length === 0 && (
        <ListItem className="noTodayTodo">
          <img src="./images/logo.svg" alt="로고" />
          <p>
            <span>NO TODO</span>
            오늘은 할 일이 없어요.
          </p>
        </ListItem>
      )}
    </TodoMainUl>
  );
};

export default TodoMainList;
