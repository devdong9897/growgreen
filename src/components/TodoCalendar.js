import React, { useEffect, useState } from "react";
import moment from "moment/moment";
import Calendar from "react-calendar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import "../style/todocalendar.css";
import { TodoCalendarWrap, CalendarActiveBtn } from "../style/TodoCalendar";

const TodoCalendar = ({ handleDateChange, selectDate, selectTodoData }) => {
  // Calendar 스타일 설정
  // 요일 이름 영문으로 설정
  const WeekName = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
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
      // 리스트 내용 있는 경우 날짜 위에 동그라미 표시
      // selectTodoData가 빈 배열이 아닐 때 highlight 클래스 추가
      /*
			현재 selectTodoData를 불러올 때 빈 배열이 먼저 로드되며
			데이터가 있는 날짜를 클릭하고 난 후에 데이터가 없는 날짜를 클릭하면
			데이터가 있는 날짜의 데이터가 출력됨
			*/
      // if (selectTodoData !== []) {
      //   classNames += "highlight";
      // }
    }
    return classNames.trim();
  };
  // CalendarActiveBtn 클릭 이벤트 설정
  const [calendarActive, setCalendarActive] = useState(false);
  const toggleClick = () => {
    setCalendarActive(!calendarActive);
  };
  return (
    <TodoCalendarWrap>
      <Calendar
        calendarType="US"
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
