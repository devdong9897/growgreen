import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import DiaryList from "./DiaryList";
import DiaryWrite from "./DiaryWrite";
import DiaryDetail from "./DiaryDetail";
import DiaryWriteEdit from "./DiaryWriteEdit";

const Diary = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="list" replace />} />
      <Route path="/list" element={<DiaryList />} />
      <Route path="/write" element={<DiaryWrite />} />
      <Route path="/detail" element={<DiaryDetail />} />
      <Route path="/edit" element={<DiaryWriteEdit />} />
    </Routes>
  );
};

export default Diary;
