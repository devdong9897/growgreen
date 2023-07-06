import React, { useEffect, useState } from "react";
import moment from "moment/moment";
import Calendar from "react-calendar";
import { getTotalTodoList } from "../api/patchtodo";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import "../style/todocalendar.css";
import { TodoCalendarWrap, CalendarActiveBtn } from "../style/TodoCalendar";

const TodoCalendar = ({ handleDateChange, selectDate, selectTodoData }) => {
  // Calendar 스타일 설정
  // 요일 이름 영문으로 설정
  const WeekName = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
  const formatShortWeekday = (locale, date) => {
    const idx = date.getDay();
    return WeekName[idx];
  };
  // 캘린더 날짜에 className 동적으로 부여
  const tileClassName = ({ date, view }) => {
    let classNames = "";
    if (view === "month") {
      // 일요일에 글자 색상 추가
      if (date.getDay() === 0) {
        classNames += "sun_color ";
        // 토요일에 글자 색상 추가
      } else if (date.getDay() === 6) {
        classNames += "sat_color ";
      }
    }
    return classNames.trim();
  };
  // CalendarActiveBtn 클릭 이벤트 state
  const [calendarActive, setCalendarActive] = useState(false);
  // 전체 투두리스트 state
  const [allDate, setAllDate] = useState([]);
  // 전체 투두리스트 get
  const allDateGet = async () => {
    try {
      const allData = await getTotalTodoList();
      setAllDate(allData);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    allDateGet();
  }, []);
  // CalendarActiveBtn 클릭 이벤트 설정
  const toggleClick = () => {
    setCalendarActive(!calendarActive);
  };
  // 캘린더 투두데이터 있을 경우 표시 설정
  const todoContentShow = ({ date }) => {
    const day = moment(date).format("MM-DD");
    const dayResult = allDate.find(item => item.deadlineDate === day);
    if (dayResult) {
      return <div className="highlight"></div>;
    }
  };
  return (
    <TodoCalendarWrap>
      <Calendar
        calendarType="US"
        tileClassName={tileClassName}
        formatShortWeekday={formatShortWeekday}
        formatDay={(locale, date) => moment(date).format("D")}
        onChange={handleDateChange}
        value={selectDate}
        // 버튼 클릭 시 active 클래스 동적으로 부여되면서 높이값 변화함
        className={calendarActive ? "active" : ""}
        tileContent={todoContentShow}
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
