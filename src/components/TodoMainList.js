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

const TodoMainList = ({ selectTodayList }) => {
  return (
    <TodoMainUl>
      {selectTodayList.map((item, index) => (
        <ListItem key={index}>
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
      {selectTodayList.length === 0 && (
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
