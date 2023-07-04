import React, { useEffect, useState } from "react";
import moment from "moment/moment";
import TodoCalendar from "../components/TodoCalendar";
import TodoMainList from "../components/TodoMainList";
import { getSelectTodoList } from "../api/patchtodo";
import { useParams } from "react-router";

const TodoMain = () => {
  // Calendar 날짜 클릭 시 날짜별 내용 출력
  const [selectDate, setSelectDate] = useState(new Date());
  const handleDateChange = date => {
    setSelectDate(date);
  };
  // 오늘의 투두 더미데이터
  const todayListData = {
    "2023-06-15": [
      {
        time: "06-15",
        timeDetail: "15:00",
        plantName: "식물 종류 이름0",
        plantAlias: "식물 별명0",
        task: "오늘의 할 일0",
      },
    ],
    "2023-06-28": [
      {
        time: "06-28",
        timeDetail: "12:00",
        plantName: "식물 종류 이름1",
        plantAlias: "식물 별명1",
        task: "오늘의 할 일1",
      },
    ],
    "2023-06-29": [
      {
        time: "06-29",
        timeDetail: "13:00",
        plantName: "식물 종류 이름2",
        plantAlias: "식물 별명2",
        task: "오늘의 할 일2",
      },
    ],
  };
  const formatDate = moment(selectDate).format("YYYY-MM-DD");
  const selectTodayList = todayListData[formatDate] || [];

  // 특정 날짜 todo state 관리
  const [selectTodoData, setSelectTodoData] = useState([]);
  const paramDeadline = useParams().deadline;
  const getSelectTodoData = async deadline => {
    try {
      const data = await getSelectTodoList(deadline);
      setSelectTodoData(data);
      console.log(data);
    } catch (err) {
      console.log("특정 날짜 todo 에러 : ", err);
    }
  };
  useEffect(() => {
    getSelectTodoData(paramDeadline);
  }, []);
  return (
    <div>
      {/* 투두 캘린더 */}
      <TodoCalendar
        handleDateChange={handleDateChange}
        selectDate={selectDate}
        todayListData={todayListData}
      />
      {/* 오늘의 투두 리스트 */}
      <TodoMainList selectTodayList={selectTodayList} />
      {/* <TodoMainList selectTodoData={selectTodoData} /> */}
    </div>
  );
};

export default TodoMain;
