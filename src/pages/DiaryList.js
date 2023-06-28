import React from "react";
import { Link } from "react-router-dom";
import { WriteBtn } from "../style/ListLayout";
import DiaryListItem from "../components/DiaryListItem";

const DiaryList = () => {
  return (
    <>
      <ul>
        <DiaryListItem />
      </ul>
      <WriteBtn>
        <Link to="/diarywrite"></Link>
      </WriteBtn>
    </>
  );
};

export default DiaryList;
