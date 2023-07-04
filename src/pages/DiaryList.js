import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getDiary } from "../api/patchdiary";

import { WriteBtn } from "../style/ListLayout";

import DiaryListItem from "../components/DiaryListItem";

const DiaryList = () => {
  // 다이어리 리스트 정보를 stat로 관리
  const [diaryList, setDiaryList] = useState([]);
  const getDiaryList = async () => {
    try {
      const data = await getDiary();
      setDiaryList(data);
    } catch (err) {
      console.log("다이어리 리스트 에러 : ", err);
    }
  };
  useEffect(() => {
    getDiaryList();
  }, []);
  return (
    <>
      <ul>
        {diaryList.map((item, index) => (
          <DiaryListItem key={index} item={item} />
        ))}
      </ul>
      <WriteBtn>
        <Link to="/diarywrite"></Link>
      </WriteBtn>
    </>
  );
};

export default DiaryList;
