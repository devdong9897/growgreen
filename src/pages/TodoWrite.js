import React, { useState } from "react";
import { Select, Input, Checkbox, ConfigProvider, DatePicker } from "antd";
import { TodoWriteFir, TodoWriteTxt } from "../style/WriteLayout";
import { mainColor } from "../style/GlobalStyle";
import { PageBtnWrap } from "../style/Components";
import { useNavigate } from "react-router-dom";
import "../style/select.css";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

const TodoWrite = () => {
  const { TextArea } = Input;

  // 데려온 날짜
  const dateFormat = "YYYY/MM/DD";

  // 화면이동
  const navigate = useNavigate();

  // checkbox
  const [value, setValue] = useState("");
  const [checkedValues, setCheckedValues] = useState([]);
  const [isNoneChecked, setIsNoneChecked] = useState(true);

  const handleChange = value => {
    console.log(value);
  };

  const handleConfirm = () => {
    navigate("/todolist");
  };

  const handleCheckboxChange = checkedValues => {
    setCheckedValues(checkedValues);
    setIsNoneChecked(false);
  };

  const handleNoneCheckboxChange = e => {
    const isChecked = e.target.checked;
    setIsNoneChecked(isChecked);
    setCheckedValues(isChecked ? [] : []);
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: mainColor.colorGreenRegular,
        },
      }}
    >
      <TodoWriteFir className="choise">
        <TodoWriteTxt>식물 선택</TodoWriteTxt>
        <Select
          className="plant-choise"
          placeholder="원하는 반려 식물을 선택해 주세요."
          allowClear
        />
      </TodoWriteFir>

      <TodoWriteTxt>날짜 선택</TodoWriteTxt>
      <div className="plant-dete">
        <div>
          {/* 날짜 선택 */}
          <div>
            <TodoWriteFir className="date">
              <DatePicker
                defaultValue={dayjs("2023-06-28", dateFormat)}
                style={{ padding: "13px 15px", borderRadius: "10px" }}
              />
            </TodoWriteFir>
          </div>
          {/* 시간 선택 */}
          <div className="time-choise">
            <TodoWriteFir className="time">
              <Select
                className="plant-time"
                labelInValue
                defaultValue={{
                  value: "00:00:00",
                  label: "00:00:00",
                }}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "10px",
                }}
                onChange={handleChange}
                options={[
                  {
                    value: "00:00:00",
                    label: "00:00:00",
                  },
                  {
                    value: "01:00:00",
                    label: "01:00:00",
                  },
                  {
                    value: "02:00:00",
                    label: "02:00:00",
                  },
                  {
                    value: "03:00:00",
                    label: "03:00:00",
                  },
                  {
                    value: "04:00:00",
                    label: "04:00:00",
                  },
                  {
                    value: "05:00:00",
                    label: "05:00:00",
                  },
                  {
                    value: "06:00:00",
                    label: "06:00:00",
                  },
                  {
                    value: "07:00:00",
                    label: "07:00:00",
                  },
                  {
                    value: "08:00:00",
                    label: "08:00:00",
                  },
                  {
                    value: "09:00:00",
                    label: "09:00:00",
                  },
                  {
                    value: "10:00:00",
                    label: "10:00:00",
                  },
                  {
                    value: "11:00:00",
                    label: "11:00:00",
                  },
                ]}
              />
            </TodoWriteFir>
          </div>
        </div>
      </div>
      <TodoWriteFir className="todo">
        <TodoWriteTxt>할 일</TodoWriteTxt>
        <TextArea
          value={value}
          onChange={e => setValue(e.target.value)}
          style={{ width: "100%", paddingBottom: "148px" }}
        />
      </TodoWriteFir>

      <TodoWriteFir className="repeat">
        <TodoWriteTxt>반복여부</TodoWriteTxt>

        <ConfigProvider
          theme={{
            components: {
              Checkbox: {
                colorPrimary: mainColor.colorGreenRegular,
                colorPrimaryHover: mainColor.colorGreenRegular,
              },
            },
          }}
        >
          <Checkbox checked={isNoneChecked} onChange={handleNoneCheckboxChange}>
            없음
          </Checkbox>
          <br />
          <Checkbox.Group value={checkedValues} onChange={handleCheckboxChange}>
            <Checkbox value="option1">월</Checkbox>
            <Checkbox value="option2">화</Checkbox>
            <Checkbox value="option3">수</Checkbox>
            <Checkbox value="option4">목</Checkbox>
            <Checkbox value="option5">금</Checkbox>
            <Checkbox value="option6">토</Checkbox>
            <Checkbox value="option7">일</Checkbox>
          </Checkbox.Group>
        </ConfigProvider>
        <br />
      </TodoWriteFir>

      <PageBtnWrap>
        <li>
          <button onClick={handleConfirm}>확인</button>
        </li>
        <li>
          <button onClick={() => navigate("/todolist")}>취소</button>
        </li>
      </PageBtnWrap>
    </ConfigProvider>
  );
};

export default TodoWrite;
