import React, { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { getTodoEdit, putTodo, deleteTodo } from "../api/patchtodo";
import dayjs from "dayjs";
import {
  Form,
  Select,
  Input,
  Checkbox,
  ConfigProvider,
  DatePicker,
  Modal,
} from "antd";
import { getPlants } from "../api/patchmyplant";

import {
  TodoEditChkWrap,
  TodoWriteFir,
  TodoWriteTxt,
} from "../style/WriteLayout";
import { mainColor } from "../style/GlobalStyle";
import { PageBtnWrap } from "../style/Components";

// dayjs.extend(customParseFormat);

const TodoWrite = () => {
  // 쿼리스트링 get
  const [form] = Form.useForm();
  // 화면이동
  const navigate = useNavigate();
  // itodo params 관리
  const { itodo } = useParams();

  // iplant(PK값) 보관할 state
  const [iplant, setIplant] = useState(0);
  // 식물 선택 option에 들어갈 값 state
  const [selectMyPlant, setSelectMyPlant] = useState([]);
  // 날짜
  const [deadlineDate, setDeadLineDate] = useState("");
  const dateFormat = "YYYY-MM-DD";
  // 날짜 선택(날짜 포맷을 dateFormat 형식으로 변환)
  const handleDateChange = (value, dateString) => {
    setDeadLineDate(dateString);
  };
  // 시간
  const [deadlineTime, setDeadLineTime] = useState("");
  // 시간 선택 state
  // 시간 00시 ~ 23시까지 출력
  const deadlineTimeList = Array.from({ length: 24 }, (item, index) => {
    const hour = index.toString().padStart(2, "0");
    return {
      value: `${hour}:00:00`,
      label: `${hour}:00:00`,
    };
  });

  // 시간의 목록
  const [postDeadlineTimeOption, setPostDeadlineTimeOption] =
    useState(deadlineTimeList);
  const [postDeadlineTime, setPostDeadlineTime] = useState("");

  const handleChange = value => {
    const selectTime = value;
    setPostDeadlineTime(selectTime);
  };

  // 메모
  const { TextArea } = Input;
  const [ctnt, setCtnt] = useState("");

  const handleInputChange = e => {
    const inputValue = e.target.value;
    setCtnt(inputValue);
  };

  // 반복여부(checkbox) state

  const dayChekOptions = [
    { label: "월", value: 0 },
    { label: "화", value: 1 },
    { label: "수", value: 2 },
    { label: "목", value: 3 },
    { label: "금", value: 4 },
    { label: "토", value: 5 },
    { label: "일", value: 6 },
  ];

  const [isNoneChecked, setIsNoneChecked] = useState(false);
  const handleNoneCheckboxChange = e => {
    let isChecked = e.target.checked;
    setIsNoneChecked(isChecked);

    if (isChecked) {
      setCheckedValues([]);
    } else {
      // setCheckedValues([...checkedValuesRemember]);
    }
  };

  const [checkedValues, setCheckedValues] = useState([]);
  const [checkedValuesRemember, setCheckedValuesRemember] = useState([]);
  const handleCheckboxChange = checkedValues => {
    setIsNoneChecked(false);
    setCheckedValues(checkedValues);
  };

  // myPlantList를 저장할 state
  const [myPlantList, setMyPlantList] = useState([]);
  // 식물 선택 option값이 있는지 체크 state

  const [isSelectOption, setIsSelectOption] = useState(null);

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
  // 수정 투두 데이터 GET
  const getTodoEditList = async _itodo => {
    // console.log("================== getTodoEditList");
    try {
      const data = await getTodoEdit(_itodo);
      // console.log("응? ", data);

      setIplant(data.todo.iplant);
      setDeadLineDate(data.todo.deadlineDate);
      // 강제로 form 필드의 내용을 변경
      form.setFieldsValue({
        deadline: dayjs(data.todo.deadlineDate, dateFormat),
        timeshow: data.todo.deadlineTime,
        isnonechecked: data.todo.repeatYn ? false : true,
      });
      setPostDeadlineTime(data.todo.deadlineTime);
      setDeadLineTime(data.todo.deadlineTime);
      setCtnt(data.todo.ctnt);
      setIsNoneChecked(data.todo.repeatYn ? false : true);

      const arr = data.repeatDay.map(Number).sort();
      setCheckedValues(arr);
      setCheckedValuesRemember(arr);

      // checkbox에 따라 repeatYn, repeatDay값 변화
      // 없음에 체크되어 있을 때 반복 여부 0, 반복 날짜 null
      // if (data.todo.repeatYn) {
      //   setIsNoneChecked(true);
      //   const arr = data.repeatDay.map(Number).sort();
      //   setCheckedValues(arr);
      // } else {
      //   setIsNoneChecked(false);
      //   setCheckedValues([]);
      // }
    } catch (err) {
      console.log(err);
    }
  };
  const getEditData = async () => {
    await getTodoEditList(itodo);
  };
  useEffect(() => {
    getMyPlantList();
    getEditData();
  }, [itodo]);

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

    // 반복 여부 미선택 시 return
    // console.log(moment(deadlineDate));
    // 날짜, 시간 미선택시 return
    if (deadlineDate === "Invalid date") {
      setDateError("* 날짜 또는 시간을 선택해주세요.");
      return;
    }
    if (ctnt === "") {
      setCtntError("* 할 일을 입력해주세요.");
      return;
    }
    // 반복 여부 미선택 시 return
    if (checkedValues.length === 0 && !isNoneChecked) {
      setIschkError("* 반복여부를 선택해주세요.");
      return;
    }

    const postTodoData = {
      itodo: itodo,
      iplant: iplant,
      ctnt: ctnt,
      deadlineTime: postDeadlineTime,
      deadlineDate: deadlineDate,
      repeatYn: isNoneChecked ? 0 : 1,
      repeatDay: checkedValues,
    };
    // console.log("deadlineDate ", deadlineDate);
    // console.log("PUT 성공했어요.", postTodoData);
    putTodo(postTodoData);
    navigate("/todolist");
  };
  // 모달창 이벤트
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  // 삭제 버튼 클릭
  const handleOk = () => {
    // console.log(itodo);
    deleteTodo(itodo);
    navigate("/todolist");
    // setIsModalOpen(false);
  };
  // 취소 버튼 클릭
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleFinish = values => {
    console.log(values);
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
      <Form
        form={form}
        initialValues={
          {
            // deadline: dayjs(deadlineDate, dateFormat),
          }
        }
      >
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
              value={iplant}
              disabled
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
              <Form.Item name="deadline">
                <DatePicker
                  placeholder="날짜 선택"
                  onChange={handleDateChange}
                />
              </Form.Item>
            </li>
            {/* 시간 선택 */}
            <li>
              <Form.Item name="timeshow">
                <Select
                  // labelInValue
                  // defaultValue={{
                  //   value: "시간 선택",
                  //   label: "시간 선택",
                  // }}
                  onChange={handleChange}
                  options={postDeadlineTimeOption}
                  // value={deadlineTime}
                />
              </Form.Item>
            </li>
          </ul>
        </TodoWriteFir>
        <TodoWriteFir>
          <Form.Item>
            {/* 할 일 section */}
            <TodoWriteFir>
              <TodoWriteTxt>
                할 일{ctntError && <p>{ctntError}</p>}
              </TodoWriteTxt>
              <TextArea
                value={ctnt}
                onChange={handleInputChange}
                placeholder="할 일을 입력해주세요."
              />
            </TodoWriteFir>
          </Form.Item>
        </TodoWriteFir>
        {/* 반복여부 section */}
        <TodoWriteFir>
          <TodoWriteTxt>
            반복여부
            {/* 반복여부 미선택 시 에러메세지 출력 */}
            {ischkError && <p>{ischkError}</p>}
          </TodoWriteTxt>
          <TodoEditChkWrap>
            <Form.Item name="isnonechecked">
              <Checkbox
                checked={isNoneChecked}
                onChange={handleNoneCheckboxChange}
              >
                없음
              </Checkbox>
            </Form.Item>
            <Form.Item>
              <Checkbox.Group
                value={checkedValues}
                options={dayChekOptions}
                onChange={handleCheckboxChange}
              />
            </Form.Item>
          </TodoEditChkWrap>
        </TodoWriteFir>
        {/* 수정, 삭제 버튼 section */}
        <PageBtnWrap>
          <li>
            <button type="submit" onClick={e => handleConfirm(e)}>
              수정
            </button>
          </li>
          <li>
            <button onClick={showModal}>삭제</button>
          </li>
        </PageBtnWrap>
        {/* 삭제 버튼 클릭 시 모달창 오픈 */}
        <Modal
          title="삭제하시겠습니까?"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          okText="삭제"
          cancelText="취소"
          wrapClassName="modal_wrap"
          closable={false}
        >
          <p>삭제된 게시물은 복구가 불가능 하니 신중하게 선택해주세요.</p>
        </Modal>
      </Form>
    </ConfigProvider>
  );
};

export default TodoWrite;
