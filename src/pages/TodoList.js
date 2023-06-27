import React from "react";
import { Link } from "react-router-dom";
import { WriteBtn } from "../style/ListLayout";
import TodoListItem from "../components/TodoListItem";

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
