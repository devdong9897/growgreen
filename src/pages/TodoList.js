import React from "react";
import TodoListItem from "../components/TodoListItem";
import { Link } from "react-router-dom";
import { WriteBtn } from "../style/ListLayout";

const TodoList = () => {
  return (
    <>
      <ul>
        <TodoListItem />
      </ul>
      <WriteBtn>
        <Link to="/todowrite"></Link>
      </WriteBtn>
    </>
  );
};

export default TodoList;
