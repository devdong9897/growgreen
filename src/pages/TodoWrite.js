import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postTodo } from "../api/patchtodo";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import moment from "moment/moment";
import {
  Form,
  Select,
  Input,
  Checkbox,
  ConfigProvider,
  DatePicker,
} from "antd";
import { TodoWriteFir, TodoWriteTxt } from "../style/WriteLayout";
import { mainColor } from "../style/GlobalStyle";
import { PageBtnWrap } from "../style/Components";

dayjs.extend(customParseFormat);

const TodoWrite = () => {
  const { TextArea } = Input;
  // 화면이동
  const navigate = useNavigate();
  // 날짜 선택에 오늘 날짜 표시
  // const [nowDate, setNowDate] = useState(new Date());
  // 오늘 날짜를 YYYY-MM-DD로 변환
  // const nowFormatDate = moment(nowDate).format("YYYY-MM-DD");

  // 투두 전송데이터 기본값
  const todoForm = {
    iplant: 0,
    ctnt: "",
    deadlineTime: "",
    deadlineDate: "",
    repeatYn: 0,
    repeatDay: [0],
  };
  // 투두 정보 state로 관리
  const [postTodoData, setPostTodoData] = useState(todoForm);
  // 현재 postTodoData를 새로운 객체로 생성
  const updatedPostTodoData = { ...postTodoData };
  // 식물 선택 state
  const plantList = [
    { value: "테스트1value", label: "테스트1label" },
    { value: "테스트2value", label: "테스트2label" },
    { value: "테스트3value", label: "테스트3label" },
  ];
  const [selectPlant, setSelectPlant] = useState(plantList);
  // 날짜 선택 state
  // 날짜 선택(날짜 포맷을 dateFormat 형식으로 변환)
  const handleDateChange = (value, dateString) => {
    // console.log("Formatted Selected Time: ", dateString);
    const selectedDate = moment(dateString).format("MM-DD");
    const updateDate = { ...updatedPostTodoData, deadlineDate: selectedDate };
    setPostTodoData(updateDate);
  };
  // 시간 선택 state
  const deadlineTimeList = [
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
    {
      value: "12:00:00",
      label: "12:00:00",
    },
    {
      value: "13:00:00",
      label: "13:00:00",
    },
    {
      value: "14:00:00",
      label: "14:00:00",
    },
    {
      value: "15:00:00",
      label: "15:00:00",
    },
    {
      value: "16:00:00",
      label: "16:00:00",
    },
    {
      value: "17:00:00",
      label: "17:00:00",
    },
    {
      value: "18:00:00",
      label: "18:00:00",
    },
    {
      value: "19:00:00",
      label: "19:00:00",
    },
    {
      value: "20:00:00",
      label: "20:00:00",
    },
    {
      value: "21:00:00",
      label: "21:00:00",
    },
    {
      value: "22:00:00",
      label: "22:00:00",
    },
    {
      value: "23:00:00",
      label: "23:00:00",
    },
  ];
  const [postDeadlineTime, setPostDeadlineTime] = useState(deadlineTimeList);
  const handleChange = value => {
    const selectTime = value.value;
    // console.log("시간 선택", selectTime);
    const updateTime = { ...updatedPostTodoData, deadlineTime: selectTime };
    setPostTodoData(updateTime);
  };
  // 할 일 state
  const [value, setValue] = useState("");
  updatedPostTodoData.ctnt = value;
  // 반복여부(checkbox) state
  const [checkedValues, setCheckedValues] = useState([]);
  const [isNoneChecked, setIsNoneChecked] = useState(true);

  const handleCheckboxChange = checkedValues => {
    setCheckedValues(checkedValues);
    setIsNoneChecked(false);
  };
  const handleNoneCheckboxChange = e => {
    const isChecked = e.target.checked;
    setIsNoneChecked(isChecked);
    setCheckedValues(isChecked ? [] : []);
  };
  // checkbox에 따라 repeatYn, repeatDay값 변화
  // 없음에 체크되어 있을 때 반복 여부 0, 반복 날짜 null
  if (isNoneChecked) {
    updatedPostTodoData.repeatYn = 0;
    updatedPostTodoData.repeatDay = null;
  } else {
    // 아니면 반복 여부 1, 선택된 체크박스 value값 전달
    updatedPostTodoData.repeatYn = 1;
    updatedPostTodoData.repeatDay = checkedValues.map(Number);
  }
  // 내용 미입력시 출력되는 문장 state
  const [dateError, setDateError] = useState("");
  const [ctntError, setCtntError] = useState("");
  // 글 작성 후 확인 버튼 클릭(todo POST)
  const handleConfirm = () => {
    if (
      !updatedPostTodoData.deadlineDate ||
      !updatedPostTodoData.deadlineTime
    ) {
      setDateError("* 날짜와 시간을 선택해주세요.");
      return;
    }
    if (!updatedPostTodoData.ctnt) {
      setCtntError("* 할일을 입력해주세요.");
      return;
    }
    console.log("updatedPostTodoData", updatedPostTodoData);
    // postTodo(updatedPostTodoData);
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
      <Form>
        <Form.Item>
          {/* 식물 선택 section */}
          <TodoWriteFir>
            <TodoWriteTxt>식물 선택</TodoWriteTxt>
            <Select
              placeholder="원하는 반려 식물을 선택해 주세요."
              allowClear
              options={selectPlant}
            />
          </TodoWriteFir>
        </Form.Item>
        <Form.Item>
          {/* 날짜 선택 section */}
          <TodoWriteFir>
            <TodoWriteTxt>
              날짜 선택
              {/* 날짜, 시간 미입력 시 에러메세지 출력 */}
              {dateError && <p>{dateError}</p>}
            </TodoWriteTxt>
            <ul className="plant-dete">
              {/* 날짜 선택 */}
              <li>
                <DatePicker
                  placeholder="날짜 선택"
                  onChange={handleDateChange}
                />
              </li>
              {/* 시간 선택 */}
              <li>
                <Select
                  labelInValue
                  defaultValue={{
                    value: "시간 선택",
                    label: "시간 선택",
                  }}
                  onChange={handleChange}
                  options={postDeadlineTime}
                />
              </li>
            </ul>
          </TodoWriteFir>
        </Form.Item>
        <Form.Item>
          {/* 할 일 section */}
          <TodoWriteFir>
            <TodoWriteTxt>할 일{ctntError && <p>{ctntError}</p>}</TodoWriteTxt>
            <TextArea
              value={value}
              onChange={e => setValue(e.target.value)}
              placeholder="할 일을 입력해주세요."
            />
          </TodoWriteFir>
        </Form.Item>
        <Form.Item>
          {/* 반복여부 section */}
          <TodoWriteFir>
            <TodoWriteTxt>반복여부</TodoWriteTxt>
            <Checkbox
              checked={isNoneChecked}
              onChange={handleNoneCheckboxChange}
            >
              없음
            </Checkbox>
            <Checkbox.Group
              value={checkedValues}
              onChange={handleCheckboxChange}
            >
              <Checkbox value="0">월</Checkbox>
              <Checkbox value="1">화</Checkbox>
              <Checkbox value="2">수</Checkbox>
              <Checkbox value="3">목</Checkbox>
              <Checkbox value="4">금</Checkbox>
              <Checkbox value="5">토</Checkbox>
              <Checkbox value="6">일</Checkbox>
            </Checkbox.Group>
          </TodoWriteFir>
        </Form.Item>
        {/* 확인, 취소 버튼 section */}
        <PageBtnWrap>
          <li>
            <button type="submit" onClick={() => handleConfirm()}>
              확인
            </button>
          </li>
          <li>
            <button type="submit" onClick={() => navigate("/todolist")}>
              취소
            </button>
          </li>
        </PageBtnWrap>
      </Form>
    </ConfigProvider>
  );
};

export default TodoWrite;
