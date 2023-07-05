import React from "react";
import { Link } from "react-router-dom";
import { Inner, HeaderWrap, TodoMainHeaderInner } from "../style/Components";

const TodoMainHeader = ({ paramToday }) => {
  return (
    <HeaderWrap>
      <Inner>
        <TodoMainHeaderInner>
          <h1>
            <Link to={`/${paramToday}`}>
              <img src="/images/logo.svg" alt="로고" />
            </Link>
          </h1>
          <nav>
            <div>
              <Link to="/myplantlist">내 식물</Link>
            </div>
            <div>
              <Link to="/diarylist">다이어리</Link>
            </div>
          </nav>
        </TodoMainHeaderInner>
      </Inner>
    </HeaderWrap>
  );
};

export default TodoMainHeader;
