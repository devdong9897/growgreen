import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "./Layout";
import Intro from "./pages/Intro";
import TodoMain from "./pages/TodoMain";
import TodoList from "./pages/TodoList";
import TodoWrite from "./pages/TodoWrite";
import TodoWriteEdit from "./pages/TodoWriteEdit";
import MyPlantList from "./pages/MyPlantList";
import MyPlantWrite from "./pages/MyPlantWrite";
import MyPlantDetail from "./pages/MyPlantDetail";
import MyPlantDetailEdit from "./pages/MyPlantDetailEdit";
import Diary from "./pages/Diary";
import NotFound from "./pages/NotFound";
import DiaryList from "./pages/DiaryList";
import DiaryWrite from "./pages/DiaryWrite";
import DiaryDetail from "./pages/DiaryDetail";
import DiaryWriteEdit from "./pages/DiaryWriteEdit";

function App() {
  return (
    <>
      <Routes>
        <Route path="/intro" element={<Intro />} />
        <Route path="/" element={<Layout />}>
          {/* 투두메인 */}
          <Route index path=":deadline" element={<TodoMain />} />
          {/* 투두 */}
          <Route path="/todolist" element={<TodoList />} />
          <Route path="/todowrite" element={<TodoWrite />} />
          <Route path="/todoedit" element={<TodoWriteEdit />} />
          {/* 마이플랜트 */}
          <Route path="/myplantlist" element={<MyPlantList />} />
          <Route path="/myplantwrite" element={<MyPlantWrite />} />
          <Route path="/myplantdetail" element={<MyPlantDetail />} />
          <Route path="/myplantedit" element={<MyPlantDetailEdit />} />
          {/* 다이어리 */}
          <Route path="/diary" element={<Navigate to="/diarylist" replace />} />
          <Route path="/diarylist" element={<DiaryList />} />
          <Route path="/diarywrite" element={<DiaryWrite />} />
          <Route path="/diarydetail/:idiary" element={<DiaryDetail />} />
          <Route path="/diaryedit" element={<DiaryWriteEdit />} />
          {/* 잘못된 경로 페이지 처리 */}
          <Route path="/*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
