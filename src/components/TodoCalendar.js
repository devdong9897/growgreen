import React from "react";
import moment from "moment/moment";
import Calendar from "react-calendar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import "../style/todocalendar.css";
import { TodoCalendarWrap, CalendarActiveBtn } from "../style/TodoCalendar";

const TodoCalendar = () => {
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
  return (
    <TodoCalendarWrap>
      <Calendar
        calendarType="US"
        formatShortWeekday={formatShortWeekday}
        tileClassName={tileClassName}
        formatDay={(locale, date) => moment(date).format("D")}
      />
      <CalendarActiveBtn>
        <i>
          <FontAwesomeIcon icon={faAngleUp} />
        </i>
      </CalendarActiveBtn>
    </TodoCalendarWrap>
  );
};

export default TodoCalendar;
