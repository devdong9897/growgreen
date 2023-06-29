import React from "react";
import { Select, Input, Checkbox, form } from "antd";
import { TodoWriteFir, TodoWriteTxt } from "../style/WriteLayout";
import { ConfigProvider } from "antd";
import { height, mainColor } from "../style/GlobalStyle";
import { PageBtnWrap } from "../style/Components";
import { Link } from "react-router-dom";
import { useState } from "react";
import { TimePicker } from "antd";

const TodoWrite = () => {
  // 할 일
  const [value, setValue] = useState("");
  const { TextArea } = Input;

  // check box
  const onChange = checkedValues => {
    console.log("checked = ", checkedValues);
  };
  const plainOptions = ["없음"];

  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: mainColor.colorGreenBold,
          },
        }}
      >
        <TodoWriteFir className="choise">
          <TodoWriteTxt>식물 선택</TodoWriteTxt>
          <Select
            placeholder="원하는 반려 식물을 선택해 주세요."
            allowClear
            style={{ width: "100%" }}
          ></Select>
        </TodoWriteFir>

        <TodoWriteFir className="time">
          <TodoWriteTxt>시간 선택</TodoWriteTxt>
          <TimePicker hourStep={1} />
        </TodoWriteFir>

        <TodoWriteFir className="todo">
          <TodoWriteTxt>할 일</TodoWriteTxt>
          <TextArea
            value={value}
            onChange={e => setValue(e.target.value)}
            autoSize={{
              minRows: 3,
              maxRows: 5,
            }}
            style={{ width: "100%", paddingBottom: "148px" }}
          />
        </TodoWriteFir>
      </ConfigProvider>

      <TodoWriteFir className="repeat">
        <TodoWriteTxt>반복여부</TodoWriteTxt>

        <ConfigProvider
          theme={{
            components: {
              Checkbox: {
                colorPrimary: mainColor.colorGreenLight,
                colorPrimaryHover: mainColor.colorGreenLight,
              },
            },
          }}
        >
          <Checkbox.Group
            options={plainOptions}
            defaultValue={["없음"]}
            onChange={onChange}
            style={{ marginTop: "13px", fontSize: "1.4rem", fontWeight: 700 }}
          />
          <br />
          <Checkbox onChange={onChange} style={{ marginTop: "10px" }}>
            월
          </Checkbox>
          <Checkbox onChange={onChange} style={{ margin: "10px 0 0 10px" }}>
            화
          </Checkbox>
          <Checkbox onChange={onChange} style={{ margin: "10px 0 0 10px" }}>
            수
          </Checkbox>
          <Checkbox onChange={onChange} style={{ margin: "10px 0 0 10px" }}>
            목
          </Checkbox>
          <Checkbox onChange={onChange} style={{ margin: "10px 0 0 10px" }}>
            금
          </Checkbox>
          <Checkbox onChange={onChange} style={{ margin: "10px 0 0 10px" }}>
            토
          </Checkbox>
          <Checkbox onChange={onChange} style={{ margin: "0 0 0 5px" }}>
            일
          </Checkbox>
        </ConfigProvider>
        <br />
      </TodoWriteFir>
      <PageBtnWrap>
        <li>
          <Link to="/">확인</Link>
        </li>
        <li>
          <button>삭제</button>
        </li>
      </PageBtnWrap>
    </>
  );
};

export default TodoWrite;
