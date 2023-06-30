import React, { useState } from "react";
import { Link } from "react-router-dom";
import { WriteBtn } from "../style/ListLayout";
import TodoListItem from "../components/TodoListItem";

const TodoList = () => {
  const [todoSwitch, setTodoSwitch] = useState(false);
  const todoToggle = () => {
    setTodoSwitch(!todoSwitch);
  };
  return (
    <>
      <ul>
        <TodoListItem todoSwitch={todoSwitch} todoToggle={todoToggle} />
      </ul>
      <WriteBtn>
        <Link to="/todowrite"></Link>
      </WriteBtn>
    </>
  );
};

export default TodoList;
