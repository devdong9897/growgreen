import React from "react";
import TodoCalendar from "../components/TodoCalendar";
import TodoMainList from "../components/TodoMainList";

const TodoMain = () => {
  return (
    <div>
      <TodoCalendar />
      <TodoMainList />
    </div>
  );
};

export default TodoMain;
