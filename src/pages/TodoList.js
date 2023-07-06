import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTodayTodoList } from "../api/patchtodo";

import { WriteBtn } from "../style/ListLayout";
import TodoListItem from "../components/TodoListItem";

const TodoList = () => {
  // 전체 투두 리스트 정보를 state로 관리
  const [todoList, setTodoList] = useState([]);
  const getTodoList = async () => {
    try {
      const data = await getTodayTodoList();
      setTodoList(data);
    } catch (err) {
      console.log("전체 투두리스트 에러 : ", err);
    }
  };
  useEffect(() => {
    getTodoList();
  }, []);
  // 투두리스트 스위치 클릭 이벤트
  const toggleItem = id => {
    setTodoList(prevData =>
      prevData.map(item =>
        item.id === id
          ? { ...item, finishYn: item.finishYn === 0 ? 0 : 1 }
          : item,
      ),
    );
  };
  return (
    <>
      <ul>
        {todoList.map((item, index) => (
          <TodoListItem key={index} item={item} toggleItem={toggleItem} />
        ))}
      </ul>
      <WriteBtn>
        <Link to="/todowrite"></Link>
      </WriteBtn>
    </>
  );
};

export default TodoList;
