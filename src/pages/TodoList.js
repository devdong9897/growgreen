import React, { useState } from "react";
import { Link } from "react-router-dom";
import { WriteBtn } from "../style/ListLayout";
import TodoListItem from "../components/TodoListItem";

const TodoList = () => {
  // 투두리스트 더미데이터
  const [todoListData, setTodoListData] = useState([
    {
      id: 1,
      time: "06-15",
      timeDetail: "15:00",
      plantName: "식물 종류 이름0",
      plantAlias: "식물 별명0",
      task: "오늘의 할 일0",
      isOpen: true,
      // 1 : true // 0 : false 변경
    },
    {
      id: 2,
      time: "06-16",
      timeDetail: "16:00",
      plantName: "식물 종류 이름1",
      plantAlias: "식물 별명1",
      task: "오늘의 할 일1",
      isOpen: true,
    },
    {
      id: 3,
      time: "06-17",
      timeDetail: "17:00",
      plantName: "식물 종류 이름2",
      plantAlias: "식물 별명2",
      task: "오늘의 할 일2",
      isOpen: true,
    },
    {
      id: 4,
      time: "06-18",
      timeDetail: "18:00",
      plantName: "식물 종류 이름3",
      plantAlias: "식물 별명3",
      task: "오늘의 할 일3",
      isOpen: true,
    },
  ]);
  const toggleItem = id => {
    setTodoListData(prevData =>
      prevData.map(item =>
        item.id === id ? { ...item, isOpen: !item.isOpen } : item,
      ),
    );
  };
  return (
    <>
      <ul>
        <TodoListItem todoListData={todoListData} toggleItem={toggleItem} />
      </ul>
      <WriteBtn>
        <Link to="/todowrite"></Link>
      </WriteBtn>
    </>
  );
};

export default TodoList;
