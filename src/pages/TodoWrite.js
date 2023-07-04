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

  // 투두 전송데이터 기본값
  const todoForm = {
    iplant: 0,
    ctnt: "string",
    deadlineTime: "string",
    deadlineDate: "string",
    repeatYn: 0,
    repeatDay: [0],
  };
  // 투두 정보 state로 관리
  const [postTodoData, setPostTodoData] = useState(todoForm);
  // 글 작성 후 확인 버튼 클릭
  const handleConfirm = () => {
    console.log("확인버튼클릭");
    postTodo(postTodoData);
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

  // 식물 선택 state
  // const [] = useState();
  // 날짜 선택 state
  // 시간 선택 state
  // 할 일 state
  // 반복여부 state
  // post 완료 시 동작
  const onFinish = () => {};
  // post 실패 시 동작
  const onFinishFailed = () => {};

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
      <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <Form.Item>
          {/* 식물 선택 section */}
          <TodoWriteFir>
            <TodoWriteTxt>식물 선택</TodoWriteTxt>
            <Select
              placeholder="원하는 반려 식물을 선택해 주세요."
              allowClear
              options={[{ value: "테스트1value", label: "테스트1label" }]}
            />
          </TodoWriteFir>
        </Form.Item>
        <Form.Item>
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
        </Form.Item>
        <Form.Item>
          {/* 할 일 section */}
          <TodoWriteFir>
            <TodoWriteTxt>할 일</TodoWriteTxt>
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
              <Checkbox value="option1">월</Checkbox>
              <Checkbox value="option2">화</Checkbox>
              <Checkbox value="option3">수</Checkbox>
              <Checkbox value="option4">목</Checkbox>
              <Checkbox value="option5">금</Checkbox>
              <Checkbox value="option6">토</Checkbox>
              <Checkbox value="option7">일</Checkbox>
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
