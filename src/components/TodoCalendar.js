import React, { useState } from "react";
import moment from "moment/moment";
import Calendar from "react-calendar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import "../style/todocalendar.css";
import { TodoCalendarWrap, CalendarActiveBtn } from "../style/TodoCalendar";

const TodoCalendar = ({ todayListData, handleDateChange, selectDate }) => {
  // Calendar 스타일 설정
  const WeekName = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
  const formatShortWeekday = (locale, date) => {
    const idx = date.getDay();
    return WeekName[idx];
  };
  const tileClassName = ({ date, view }) => {
    const formattedDate = moment(date).format("YYYY-MM-DD");
    let classNames = "";

    if (view === "month") {
      if (date.getDay() === 0) {
        classNames += "sun_color ";
      } else if (date.getDay() === 6) {
        classNames += "sat_color ";
      }

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
  return (
    <TodoCalendarWrap>
      <Calendar
        calendarType="US"
        formatShortWeekday={formatShortWeekday}
        tileClassName={tileClassName}
        formatDay={(locale, date) => moment(date).format("D")}
        onChange={handleDateChange}
        value={selectDate}
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
