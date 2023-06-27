import React from "react";
import { Link } from "react-router-dom";
import { Switch } from "antd";
import { mainColor } from "../style/GlobalStyle";
import {
  ListItem,
  ItemLeft,
  ItemRight,
  ItemTime,
  ItemName,
  ItemText,
} from "../style/ListLayout";

const TodoListItem = () => {
  const onChange = checked => {
    console.log(`switch to ${checked}`);
  };
  return (
    <>
      <ListItem>
        <Link to="/" />
        <ItemLeft>
          <Switch
            defaultChecked
            onChange={onChange}
            size="small"
            style={{
              background: mainColor.colorGreenRegular,
            }}
          />
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
    </>
  );
};

export default TodoListItem;
