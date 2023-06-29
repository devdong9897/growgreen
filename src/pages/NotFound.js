import React from "react";
import { NotFoundWrap } from "../style/NotFoundLayout";

const NotFound = () => {
  return (
    <NotFoundWrap>
      <div>
        <img src="./images/intro_logo.png" alt="로고" />
        <p>
          <span>404</span>
          <span>Not Found...</span>
          페이지가 존재하지 않아요.
        </p>
      </div>
    </NotFoundWrap>
  );
};

export default NotFound;
