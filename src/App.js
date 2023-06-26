import "./App.css";
import { Routes, Route } from "react-router-dom";

import Layout from "./Layout";
// import Intro from "./pages/Intro";
import TodoMain from "./pages/TodoMain";
import TodoList from "./pages/TodoList";
import TodoWrite from "./pages/TodoWrite";
import MyPlantList from "./pages/MyPlantList";
import MyPlantWrite from "./pages/MyPlantWrite";
import MyPlantDetail from "./pages/MyPlantDetail";
import DiaryWrite from "./pages/DiaryWrite";
import DiaryList from "./pages/DiaryList";
import DiaryDetail from "./pages/DiaryDetail";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* intro는 마지막 작업 후 진행 */}
          {/* <Route path="/intro" element={<Intro />} /> */}
          <Route index element={<TodoMain />} />
          <Route path="/todolist" element={<TodoList />} />
          <Route path="/todowrite" element={<TodoWrite />} />
          <Route path="/myplantlist" element={<MyPlantList />} />
          <Route path="/myplantwrite" element={<MyPlantWrite />} />
          <Route path="/myplantdetail" element={<MyPlantDetail />} />
          <Route path="/diarywrite" element={<DiaryWrite />} />
          <Route path="/diarylist" element={<DiaryList />} />
          <Route path="/diarydetail" element={<DiaryDetail />} />
          <Route path="/*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
