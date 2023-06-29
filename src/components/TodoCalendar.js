import React, { useState } from "react";
import moment from "moment/moment";
import Calendar from "react-calendar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import "../style/todocalendar.css";
import { TodoCalendarWrap, CalendarActiveBtn } from "../style/TodoCalendar";

const TodoCalendar = () => {
  // Calendar 스타일 설정
  const WeekName = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
  const formatShortWeekday = (locale, date) => {
    const idx = date.getDay();
    return WeekName[idx];
  };
  const tileClassName = ({ date, view }) => {
    if (view === "month" && date.getDay() === 0) {
      return "sun_color ";
    } else if (view === "month" && date.getDay() === 6) {
      return "sat_color";
    }
    return null;
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
        formatShortWeekday={formatShortWeekday}
        tileClassName={tileClassName}
        formatDay={(locale, date) => moment(date).format("D")}
        className={calendarActive ? "active" : ""}
      />
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
