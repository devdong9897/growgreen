import React, { useEffect, useState } from "react";
import moment from "moment/moment";
import Calendar from "react-calendar";
import { getTotalTodoList } from "../api/patchtodo";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import "../style/todocalendar.css";
import { TodoCalendarWrap, CalendarActiveBtn } from "../style/TodoCalendar";

const TodoCalendar = ({ todayListData, handleDateChange, selectDate }) => {
  // todo 캘린더 데이터 state
  const [todoTotalList, setTodoTotalList] = useState([]);
  const getTotalTodoData = async () => {
    try {
      const data = await getTotalTodoList();
      setTodoTotalList(data);
    } catch (err) {
      console.log("todo 캘린더 데이터", err);
    }
  };
  // Calendar 스타일 설정
  const WeekName = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
  const formatShortWeekday = (locale, date) => {
    const idx = date.getDay();
    return WeekName[idx];
  };
  // 캘린더 날짜에 className 동적으로 부여
  const tileClassName = ({ date, view }) => {
    const formattedDate = moment(date).format("YYYY-MM-DD");
    // console.log(formattedDate);
    let classNames = "";

    if (view === "month") {
      // 일요일에 글자 색상 추가
      if (date.getDay() === 0) {
        classNames += "sun_color ";
        // 토요일에 글자 색상 추가
      } else if (date.getDay() === 6) {
        classNames += "sat_color ";
      }
      // 리스트 내용 있는 경우 클래스 추가
      if (todayListData[formattedDate]) {
        classNames += "highlight";
      }
    }
    return classNames.trim();
  };
  // CalendarActiveBtn 클릭 이벤트 설정
  const [calendarActive, setCalendarActive] = useState(false);
  const toggleClick = () => {
    setCalendarActive(!calendarActive);
  };
  // useEffect
  useEffect(() => {
    getTotalTodoData();
  }, []);
  console.log(todoTotalList);
  return (
    <TodoCalendarWrap>
      <Calendar
        calendarType="US"
        formatShortWeekday={formatShortWeekday}
        tileClassName={tileClassName}
        formatDay={(locale, date) => moment(date).format("D")}
        onChange={handleDateChange}
        value={selectDate}
        // 버튼 클릭 시 active 클래스 동적으로 부여되면서 높이값 변화함
        className={calendarActive ? "active" : ""}
      />
      {/* 버튼 클릭 시 캘린더 접힘 */}
      <CalendarActiveBtn
        onClick={toggleClick}
        className={calendarActive ? "active" : ""}
      >
        <i>
          <FontAwesomeIcon icon={faAngleUp} />
        </i>
      </CalendarActiveBtn>
    </TodoCalendarWrap>
  );
};

export default TodoCalendar;
