import React from "react";
import DiarySwiper from "../components/DiarySwiper";
import { Link } from "react-router-dom";
import { PageBtnWrap } from "../style/Components";
import {
  DiaryDetailContents,
  DiaryDetailInner,
  DiaryDetailTitle,
} from "../style/DetailLayout";

const DiaryDetail = () => {
  return (
    <>
      <DiarySwiper />
      <DiaryDetailInner>
        <DiaryDetailTitle>
          <span>2023.06.18</span>
          <p>Lorem ipsum dolor sit amet.</p>
        </DiaryDetailTitle>
        <DiaryDetailContents>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <PageBtnWrap>
            <li>
              <Link to="/">수정</Link>
            </li>
            <li>
              <button>삭제</button>
            </li>
          </PageBtnWrap>
        </DiaryDetailContents>
      </DiaryDetailInner>
    </>
  );
};

export default DiaryDetail;
