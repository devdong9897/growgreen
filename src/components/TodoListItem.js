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
        <Link to="/todoedit" />
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
              defaultChecked={!isClose}
              onChange={handleToggle}
              size="small"
            />
          </ConfigProvider>
          <ItemTime className={isClose ? "close" : ""}>
            <span>{item.month}</span>
            {item.time}
          </ItemTime>
        </ItemLeft>
        <ItemRight className={isClose ? "close" : ""}>
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
