import React from "react";
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

const TodoListItem = ({ todoSwitch, todoToggle }) => {
  const onChange = checked => {
    todoToggle();
    console.log(`switch to ${checked}`);
  };
  return (
    <>
      <ListItem>
        <Link to="/" />
        <ItemLeft>
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: mainColor.colorGreenRegular,
              },
            }}
          >
            <Switch defaultChecked onChange={onChange} size="small" />
          </ConfigProvider>
          <ItemTime className={todoSwitch ? "close" : ""}>
            <span>06-21</span>
            12:00
          </ItemTime>
        </ItemLeft>
        <ItemRight className={todoSwitch ? "close" : ""}>
          <ItemName>
            <span>식물 종류 이름</span>
            식물 별명
          </ItemName>
          <ItemText>오늘의 할 일</ItemText>
        </ItemRight>
      </ListItem>
    </>
  );
};

export default TodoListItem;
