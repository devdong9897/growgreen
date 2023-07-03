import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import moment from "moment/moment";
import { Select, Input, Checkbox, ConfigProvider, DatePicker } from "antd";
import { TodoWriteFir, TodoWriteTxt } from "../style/WriteLayout";
import { mainColor } from "../style/GlobalStyle";
import { PageBtnWrap } from "../style/Components";

dayjs.extend(customParseFormat);

const TodoWrite = () => {
  const { TextArea } = Input;

  // 날짜 선택에 오늘 날짜 표시
  const [nowDate, setNowDate] = useState(new Date());
  const nowFormatDate = moment(nowDate).format("YYYY-MM-DD");

  // 데려온 날짜
  const dateFormat = "YYYY-MM-DD";

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
    navigate("/myplantlist");
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
          fontFamily:
            '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif',
        },
      }}
    >
      {/* 식물 선택 section */}
      <TodoWriteFir>
        <TodoWriteTxt>식물 선택</TodoWriteTxt>
        <Select placeholder="원하는 반려 식물을 선택해 주세요." allowClear />
      </TodoWriteFir>
      {/* 날짜 선택 section */}
      <TodoWriteFir>
        <TodoWriteTxt>날짜 선택</TodoWriteTxt>
        <ul className="plant-dete">
          {/* 날짜 선택 */}
          <li>
            <DatePicker defaultValue={dayjs(nowFormatDate, dateFormat)} />
          </li>
          {/* 시간 선택 */}
          <li>
            <Select
              labelInValue
              defaultValue={{
                value: "00:00:00",
                label: "00:00:00",
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
          </li>
        </ul>
      </TodoWriteFir>
      {/* 할 일 section */}
      <TodoWriteFir>
        <TodoWriteTxt>할 일</TodoWriteTxt>
        <TextArea
          value={value}
          onChange={e => setValue(e.target.value)}
          placeholder="할 일을 입력해주세요."
        />
      </TodoWriteFir>
      {/* 반복여부 section */}
      <TodoWriteFir>
        <TodoWriteTxt>반복여부</TodoWriteTxt>
        <Checkbox checked={isNoneChecked} onChange={handleNoneCheckboxChange}>
          없음
        </Checkbox>
        <Checkbox.Group value={checkedValues} onChange={handleCheckboxChange}>
          <Checkbox value="option1">월</Checkbox>
          <Checkbox value="option2">화</Checkbox>
          <Checkbox value="option3">수</Checkbox>
          <Checkbox value="option4">목</Checkbox>
          <Checkbox value="option5">금</Checkbox>
          <Checkbox value="option6">토</Checkbox>
          <Checkbox value="option7">일</Checkbox>
        </Checkbox.Group>
      </TodoWriteFir>
      {/* 확인, 취소 버튼 section */}
      <PageBtnWrap>
        <li>
          <button onClick={handleConfirm}>확인</button>
        </li>
        <li>
          <button onClick={handleConfirm}>취소</button>
        </li>
      </PageBtnWrap>
    </ConfigProvider>
  );
};

export default TodoWrite;
