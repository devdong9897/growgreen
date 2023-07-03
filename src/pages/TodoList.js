import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTodo } from "../api/patchtodo";

import { WriteBtn } from "../style/ListLayout";
import TodoListItem from "../components/TodoListItem";

const TodoList = () => {
  const [todoListData, setTodoListData] = useState([]);
  const getTodoList = async () => {
    try {
      const data = await getTodo();
      // console.log(data);
      setTodoListData(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getTodoList();
  }, []);

  // 투두리스트 스위치 클릭 이벤트
  const toggleItem = id => {
    setTodoListData(prevData =>
      prevData.map(item =>
        item.id === id
          ? { ...item, finishYn: item.finishYn === 0 ? 1 : 0 }
          : item,
      ),
    );
  };
  return (
    <>
      <ul>
        {todoListData.map((item, index) => (
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
