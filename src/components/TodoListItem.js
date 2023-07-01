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

const TodoListItem = ({ todoListData, toggleItem }) => {
  return (
    <>
      {todoListData.map((item, idx) => (
        <ListItem key={item.id}>
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
                defaultChecked={item.isOpen}
                onChange={checked => toggleItem(item.id)}
                size="small"
              />
            </ConfigProvider>
            <ItemTime className={item.isOpen ? "" : "close"}>
              <span>{item.time}</span>
              {item.timeDetail}
            </ItemTime>
          </ItemLeft>
          <ItemRight className={item.isOpen ? "" : "close"}>
            <ItemName>
              <span>{item.plantName}</span>
              {item.plantAlias}
            </ItemName>
            <ItemText>{item.task}</ItemText>
          </ItemRight>
        </ListItem>
      ))}
    </>
  );
};

export default TodoListItem;
