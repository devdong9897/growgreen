import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Switch, ConfigProvider } from "antd";
import { mainColor } from "../style/GlobalStyle";
import {
  ListItem,
  ItemLeft,
  ItemRight,
  ItemTime,
  ItemName,
  ItemText,
} from "../style/ListLayout";

const TodoListItem = ({ item, toggleItem }) => {
  // finishYn의 값이 0인 경우 close 클래스 적용
  const [isClose, setIsClose] = useState(item.finishYn === 0);
  const handleToggle = () => {
    setIsClose(!isClose);
    toggleItem(item.id);
  };
  return (
    <>
      <ListItem>
        {/* Todo 수정 버튼 */}
        {/*
				 문제 : 
				 1. todolist에서 edit 페이지에 접근하기 위해서는 itodo와 repeatYn 값이 필요함 
				 2. todolist에서 출력되는 데이터에는 repeatYn이 없기 때문에 undefinded가 나옴
				 3. App.js의 라우터에는 path="/todoedit/:itodo"로 작성되어있음.
				 */}
        <Link to={`/todoedit/${item.itodo}?repeatYn=${item.repeatYn}`} />
        <ItemLeft>
          {/* switch */}
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: mainColor.colorGreenRegular,
              },
            }}
          >
            <Switch
              defaultChecked={isClose}
              onChange={handleToggle}
              size="small"
            />
          </ConfigProvider>
          <ItemTime className={isClose ? "" : "close"}>
            <span>{item.deadlineDate}</span>
            {item.deadlineTime}
          </ItemTime>
        </ItemLeft>
        <ItemRight className={isClose ? "" : "close"}>
          <ItemName>
            <span>{item.nm}</span>
            {item.nickNm}
          </ItemName>
          <ItemText>{item.ctnt}</ItemText>
        </ItemRight>
      </ListItem>
    </>
  );
};

export default TodoListItem;
