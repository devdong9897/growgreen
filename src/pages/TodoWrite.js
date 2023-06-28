import React from "react";
import { Select, Input, Checkbox } from "antd";
import { TodoWriteFir, TodoWriteTxt } from "../style/WriteLayout";
import { ConfigProvider } from "antd";
import { mainColor } from "../style/GlobalStyle";
import { PageBtnWrap } from "../style/Components";
import { Link } from 'react-router-dom'

const TodoWrite = () => {
  const { TextArea } = Input;

  const onChange = checkedValues => {
    console.log("checked = ", checkedValues);
  };
  const plainOptions = ["없음"];

  const onSearch = value => {
    console.log("search:", value);
  };

  return (
    <>
      {/* <div className="wrap">
        
      </div> */}
      <TodoWriteFir className="choise">
        <TodoWriteTxt>식물 선택</TodoWriteTxt>
        <Select
          placeholder="원하는 반려 식물을 선택해 주세요."
          allowClear
          style={{
            width: "100%",
            height: "45px",
            marginLeft: "5px",
            borderRadius: "20px",
          }}
        ></Select>
      </TodoWriteFir>

      <TodoWriteFir className="time">
        <TodoWriteTxt>시간 선택</TodoWriteTxt>
        <Select
          showSearch
          placeholder="00:00"
          optionFilterProp="children"
          onChange={onChange}
          onSearch={onSearch}
          filterOption={(input, option) =>
            (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
          }
          options={[
            {
              value: "01:00",
              label: "01:00",
            },
            {
              value: "02:00",
              label: "02:00",
            },
            {
              value: "03:00",
              label: "03:00",
            },
            {
              value: "04:00",
              label: "04:00",
            },
            {
              value: "05:00",
              label: "05:00",
            },
            {
              value: "06:00",
              label: "06:00",
            },
            {
              value: "07:00",
              label: "07:00",
            },
            {
              value: "08:00",
              label: "08:00",
            },
            {
              value: "09:00",
              label: "09:00",
            },
            {
              value: "10:00",
              label: "10:00",
            },
            {
              value: "11:00",
              label: "11:00",
            },
            {
              value: "12:00",
              label: "12:00",
            },
          ]}
        />
      </TodoWriteFir>

      <TodoWriteFir className="todo">
        <TodoWriteTxt>할 일</TodoWriteTxt>
        <TextArea
          showCount
          maxLength={100}
          style={{
            width: "100%",
            height: "210px",
            resize: "none",
          }}
          placeholder="할 일을 입력해 주세요."
        />
      </TodoWriteFir>

      <TodoWriteFir className="repeat">
        <TodoWriteTxt>반복여부</TodoWriteTxt>

        <ConfigProvider
          theme={{
            components: {
              Checkbox: {
                colorPrimary: mainColor.colorGreenLight,
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
