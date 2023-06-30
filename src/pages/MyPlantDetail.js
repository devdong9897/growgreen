import React from "react";
import {
  MyPlantDetailWrap,
  MyPlantDetailTop,
  MyPlantDetailTitle,
  MyPlantDetailContents,
  MyPlantDetailImage,
} from "../style/DetailLayout";
import { PageBtnWrap } from "../style/Components";
import { Link } from "react-router-dom";

const MyPlantDetail = () => {
  return (
    <>
      <MyPlantDetailWrap>
        <MyPlantDetailTop>
          <MyPlantDetailImage>
            <img src="https://via.placeholder.com/500" alt="식물사진" />
          </MyPlantDetailImage>
          <MyPlantDetailTitle>
            <div>
              <span>식물 종류 이름</span>
              <p>식물 별명</p>
            </div>
            <div>
              <span>데려온 날짜</span>
              <p>2023-06-18</p>
            </div>
          </MyPlantDetailTitle>
        </MyPlantDetailTop>
        <MyPlantDetailContents>
          <span>메모</span>
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
        </MyPlantDetailContents>
      </MyPlantDetailWrap>
    </>
  );
};

export default MyPlantDetail;
