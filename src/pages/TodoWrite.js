import React, { useEffect, useState } from "react";
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
import { getPlants } from "../api/patchmyplant";

import { TodoWriteFir, TodoWriteTxt } from "../style/WriteLayout";
import { mainColor } from "../style/GlobalStyle";
import { PageBtnWrap } from "../style/Components";

dayjs.extend(customParseFormat);

const TodoWrite = () => {
  const { TextArea } = Input;
  // 화면이동
  const navigate = useNavigate();
  // myPlantList를 저장할 state
  const [myPlantList, setMyPlantList] = useState([]);
  // 식물 선택 option에 들어갈 값 state
  const [selectMyPlant, setSelectMyPlant] = useState([]);
  // 식물 선택 option값이 있는지 체크 state
  const [isSelectOption, setIsSelectOption] = useState(null);
  // iplant(PK값) 보관할 state
  const [iplant, setIplant] = useState(0);
  // myPlant GET
  const getMyPlantList = async () => {
    try {
      // myPlantList의 데이터를 data에 보관(배열)
      const data = await getPlants();
      setMyPlantList(data);
      // data를 map을 사용해 각각의 객체로 분리
      const getPlantArr = data.map(item => {
        const arrData = {
          iplant: item.iplant,
          value: item.iplant,
          label: item.nickNm,
        };
        return arrData;
      });
      setSelectMyPlant(getPlantArr);
    } catch (err) {
      console.log("myplant get err", err);
    }
  };
  useEffect(() => {
    getMyPlantList();
  }, []);
  // 식물 선택 onChange 이벤트
  const handleMyPlantChange = (value, e) => {
    const myPlant = selectMyPlant.find(item => item.value === value);
    setIsSelectOption(value);
    setIplant(myPlant.iplant);
  };
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
  // console.log("포스트투두데이터스테이트", postTodoData);
  // 날짜 선택 state
  // 날짜 선택(날짜 포맷을 dateFormat 형식으로 변환)
  const handleDateChange = (value, dateString) => {
    // console.log("Formatted Selected Time: ", dateString);
    const selectedDate = moment(dateString).format("YYYY-MM-DD");
    const updateDate = { ...postTodoData, deadlineDate: selectedDate };
    setPostTodoData(updateDate);
  };
  // 시간 00시 ~ 23시까지 출력
  const deadlineTimeList = Array.from({ length: 24 }, (item, index) => {
    const hour = index.toString().padStart(2, "0");
    return {
      value: `${hour}:00:00`,
      label: `${hour}:00:00`,
    };
  });
  // 시간 선택 state
  const [postDeadlineTime, setPostDeadlineTime] = useState(deadlineTimeList);
  const handleChange = value => {
    const selectTime = value.value;
    // console.log("시간 선택", selectTime);
    const updateTime = { ...postTodoData, deadlineTime: selectTime };
    setPostTodoData(updateTime);
  };
  // 할 일 state
  const [value, setValue] = useState("");
  postTodoData.ctnt = value;
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
    postTodoData.repeatYn = 0;
    postTodoData.repeatDay = [];
  } else {
    // 아니면 반복 여부 1, 선택된 체크박스 value값 전달
    postTodoData.repeatYn = 1;
    postTodoData.repeatDay = checkedValues.map(Number).sort();
  }
  // 식물 미선택 시 출력되는 문장 state
  const [selectError, setSelectError] = useState("");
  // 내용 미입력시 출력되는 문장 state
  const [dateError, setDateError] = useState("");
  const [ctntError, setCtntError] = useState("");
  // 체크박스 미선택시 출력되는 문장 state
  const [ischkError, setIschkError] = useState("");
  // 글 작성 후 확인 버튼 클릭(todo POST)
  const handleConfirm = e => {
    e.preventDefault();
    postTodoData.iplant = iplant;
    // 식물 미선택 시 retrun
    if (isSelectOption === null) {
      setSelectError("* 식물을 선택해주세요.");
      return;
    }
    // 날짜, 시간 미입력 시 return
    if (!postTodoData.deadlineDate || !postTodoData.deadlineTime) {
      setDateError("* 날짜와 시간을 선택해주세요.");
      return;
    }
    // 할일 미입력 시 retrun
    if (!postTodoData.ctnt) {
      setCtntError("* 할 일을 입력해주세요.");
      return;
    }
    // 반복 여부 미선택 시 return
    if (!isNoneChecked && (!checkedValues || checkedValues.length === 0)) {
      setIschkError("* 반복여부를 선택해주세요.");
      return;
    }
    // console.log("updatedPostTodoData", postTodoData);
    postTodo(postTodoData);
    navigate("/todolist");
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
        {/* 식물 선택 section */}
        <TodoWriteFir>
          <TodoWriteTxt>
            식물 선택
            {/* 식물 미선택 시 에러메세지 출력 */}
            {selectError && <p>{selectError}</p>}
          </TodoWriteTxt>
          <Form.Item>
            <Select
              placeholder="원하는 반려 식물을 선택해 주세요."
              allowClear
              options={selectMyPlant}
              onChange={handleMyPlantChange}
            />
          </Form.Item>
        </TodoWriteFir>
        {/* 날짜 선택 section */}
        <TodoWriteFir>
          <TodoWriteTxt>
            날짜 및 시간 선택
            {/* 날짜, 시간 미입력 시 에러메세지 출력 */}
            {dateError && <p>{dateError}</p>}
          </TodoWriteTxt>
          <ul className="plant-dete">
            {/* 날짜 선택 */}
            <li>
              <Form.Item>
                <DatePicker
                  placeholder="날짜 선택"
                  onChange={handleDateChange}
                />
              </Form.Item>
            </li>
            {/* 시간 선택 */}
            <li>
              <Form.Item>
                <Select
                  labelInValue
                  defaultValue={{
                    value: "시간 선택",
                    label: "시간 선택",
                  }}
                  onChange={handleChange}
                  options={postDeadlineTime}
                />
              </Form.Item>
            </li>
          </ul>
        </TodoWriteFir>
        <TodoWriteFir>
          <Form.Item>
            {/* 할 일 section */}
            <TodoWriteTxt>할 일{ctntError && <p>{ctntError}</p>}</TodoWriteTxt>
            <TextArea
              value={value}
              onChange={e => setValue(e.target.value)}
              placeholder="할 일을 입력해주세요."
            />
          </Form.Item>
        </TodoWriteFir>
        <Form.Item>
          {/* 반복여부 section */}
          <TodoWriteFir>
            <TodoWriteTxt>
              반복여부
              {/* 반복여부 미선택 시 에러메세지 출력 */}
              {ischkError && <p>{ischkError}</p>}
            </TodoWriteTxt>
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
            <button type="submit" onClick={e => handleConfirm(e)}>
              확인
            </button>
          </li>
          <li>
            <button
              type="submit"
              onClick={e => {
                e.preventDefault();
                navigate("/todolist");
              }}
            >
              취소
            </button>
          </li>
        </PageBtnWrap>
      </Form>
    </ConfigProvider>
  );
};

export default TodoWrite;
