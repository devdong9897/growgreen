import React from "react";
import { Select, Input, Checkbox, ConfigProvider, Space } from "antd";
import { TodoWriteFir, TodoWriteTxt } from "../style/WriteLayout";
import { mainColor } from "../style/GlobalStyle";
import { PageBtnWrap } from "../style/Components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

const onChange = (time, timeString) => {
  console.log(time, timeString);
};

const TodoWrite = () => {
  // 할 일
  const [value, setValue] = useState("");
  const { TextArea } = Input;

  const navigate = useNavigate();

  const [checkedValues, setCheckedValues] = useState(["없음"]);
  const [isNoneChecked, setIsNoneChecked] = useState(true);

  // check box

  const plainOptions = ["없음"];

  const handleCheckboxChange = e => {
    const { value } = e.target;
    setCheckedValues(value);
  };

  const handleDayCheckboxChange = e => {
    const { checked, value: day } = e.target;
    if (day === "없음") {
      setIsNoneChecked(checked);
      setCheckedValues(checked ? ["없음"] : []);
    } else {
      setIsNoneChecked(false);
      let updatedCheckedValues = [];

      if (checkedValues.includes("없음")) {
        updatedCheckedValues = [day];
      } else {
        if (checked) {
          updatedCheckedValues = [...checkedValues, day];
        } else {
          updatedCheckedValues = checkedValues.filter(value => value !== day);
        }
      }

      if (updatedCheckedValues.length === 0) {
        setIsNoneChecked(true);
        setCheckedValues(["없음"]);
      } else {
        setIsNoneChecked(false);
        setCheckedValues(updatedCheckedValues);
      }
    }
  };

  const handleNoneCheckboxChange = e => {
    const { checked } = e.target;
    if (checked) {
      setIsNoneChecked(true);
      setCheckedValues(["없음"]);
    } else {
      setIsNoneChecked(false);
      setCheckedValues([]);
    }
  };

  // 페이지 이동
  const handleConfirm = () => {
    navigate("/myplantlist");
  };

  // 시간선택 select
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <>
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
            placeholder="원하는 반려 식물을 선택해 주세요."
            allowClear
            style={{ width: "100%" }}
          ></Select>
        </TodoWriteFir>

        <TodoWriteFir className="time">
          <TodoWriteTxt>시간 선택</TodoWriteTxt>
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
                colorPrimary: mainColor.colorGreenRegular,
                colorPrimaryHover: mainColor.colorGreenRegular,
              },
            },
          }}
        >
          <Checkbox.Group
            options={plainOptions}
            value={checkedValues}
            onChange={handleCheckboxChange}
            style={{ marginTop: "13px", fontSize: "1.4rem", fontWeight: 700 }}
          />
          <br />
          <Checkbox
            checked={isNoneChecked}
            onChange={handleNoneCheckboxChange}
            style={{ marginTop: "10px" }}
          >
            월
          </Checkbox>
          <Checkbox
            checked={checkedValues.includes("화")}
            onChange={handleDayCheckboxChange}
            style={{ margin: "10px 0 0 10px" }}
          >
            화
          </Checkbox>
          <Checkbox
            checked={checkedValues.includes("수")}
            onChange={handleDayCheckboxChange}
            style={{ margin: "10px 0 0 10px" }}
          >
            수
          </Checkbox>
          <Checkbox
            checked={checkedValues.includes("목")}
            onChange={handleDayCheckboxChange}
            style={{ margin: "10px 0 0 10px" }}
          >
            목
          </Checkbox>
          <Checkbox
            checked={checkedValues.includes("금")}
            onChange={handleDayCheckboxChange}
            style={{ margin: "10px 0 0 10px" }}
          >
            금
          </Checkbox>
          <Checkbox
            checked={checkedValues.includes("토")}
            onChange={handleDayCheckboxChange}
            style={{ margin: "10px 0 0 10px" }}
          >
            토
          </Checkbox>
          <Checkbox
            checked={checkedValues.includes("일")}
            onChange={handleDayCheckboxChange}
            style={{ margin: "10px 0 0 10px" }}
          >
            일
          </Checkbox>
        </ConfigProvider>
        <br />
      </TodoWriteFir>
      <PageBtnWrap>
        <li>
          <button onClick={handleConfirm}>확인</button>
        </li>
        <li>
          <button onClick={handleConfirm}>취소</button>
        </li>
      </PageBtnWrap>
    </>
  );
};

export default TodoWrite;
