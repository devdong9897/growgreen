import React, { useState } from "react";
import moment from "moment/moment";
import TodoCalendar from "../components/TodoCalendar";
import TodoMainList from "../components/TodoMainList";

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
        timeDetail: "13:00",
        plantName: "식물 종류 이름1",
        plantAlias: "식물 별명1",
        task: "오늘의 할 일1",
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

  return (
    <div>
      <TodoCalendar
        handleDateChange={handleDateChange}
        selectDate={selectDate}
        todayListData={todayListData}
      />
      <TodoMainList selectTodayList={selectTodayList} />
    </div>
  );
};

export default TodoMain;
