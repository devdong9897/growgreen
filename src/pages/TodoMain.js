import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment/moment";
import Intro from "./Intro";
import TodoCalendar from "../components/TodoCalendar";
import TodoMainList from "../components/TodoMainList";
import { getSelectTodoList } from "../api/patchtodo";

const TodoMain = () => {
  // 인트로 로딩화면 state
  const [loding, setLoding] = useState(true);
  const navigate = useNavigate();
  // deadline state에 오늘 날짜를 YYYY-MM-DD 형식으로 보관
  const [deadline, setDeadline] = useState(
    moment(Date.now()).format("YYYY-MM-DD"),
  );
  // Calendar 날짜 클릭 시 날짜별 내용 출력
  const [selectDate, setSelectDate] = useState(new Date());
  // 특정 날짜 todo state
  const [selectTodoData, setSelectTodoData] = useState([]);

  // handle 이벤트
  const handleDateChange = date => {
    const nowDate = moment(date).format("YYYY-MM-DD");
    getSelectTodoData(nowDate);
    setSelectDate(date);
  };
  // todomain 특정 날짜 todo GET
  const getSelectTodoData = async _deadline => {
    try {
      const data = await getSelectTodoList(_deadline);
      // 특정 날짜의 pk값을 deadline state에 담는다.
      setDeadline(_deadline);
      // date를 selectTodoData state에 담는다.
      setSelectTodoData(data);
    } catch (err) {
      console.log("특정 날짜 todo 에러 : ", err);
    }
  };
  // useEffect
  useEffect(() => {
    getSelectTodoData(deadline);

    // 2초 뒤에 인트로 화면 사라짐
    const introTimeout = setTimeout(() => {
      setLoding(false);
    }, 2000);
    return () => clearTimeout(introTimeout);
  }, []);
  return (
    <>
      <Intro loding={loding} />
      <div>
        {/* 투두 캘린더 */}
        <TodoCalendar
          handleDateChange={handleDateChange}
          selectDate={selectDate}
          selectTodoData={selectTodoData}
        />
        {/* 오늘의 투두 리스트 */}
        <TodoMainList selectTodoData={selectTodoData} />
      </div>
    </>
  );
};

export default TodoMain;
