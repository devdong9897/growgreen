import React from "react";
import { Select } from "antd";
import { TimePicker } from "antd";
import dayjs from "dayjs";
import { TodoWriteFir, TodoWriteTxt } from "../style/TodoWriteCss";
import { Input } from "antd";

const TodoWrite = () => {
  const format = "HH:mm";
  const { TextArea } = Input;
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

      <div className="time">
        <TodoWriteTxt>시간 선택</TodoWriteTxt>
        <TimePicker defaultValue={dayjs("00:00", format)} format={format}  />
      </div>

      <div className="todo">
        <TodoWriteTxt>할 일</TodoWriteTxt>
        <TextArea
          showCount
          maxLength={100}
          style={{
            width: 390,
            height: 210,
            resize: "none",
          }}
          placeholder="할 일을 입력해 주세요."
        />
      </div>

      <div className="repeat">
        <TodoWriteTxt>반복여부</TodoWriteTxt>
      </div>
    </>
  );
};

export default TodoWrite;
