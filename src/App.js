import "./App.css";
import { Routes, Route } from "react-router-dom";

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
import DiaryList from "./pages/DiaryList";
import DiaryWrite from "./pages/DiaryWrite";
import DiaryDetail from "./pages/DiaryDetail";
import DiaryWriteEdit from "./pages/DiaryWriteEdit";
import NotFound from "./pages/NotFound";


function App() {
  return (
    <>
      <Routes>
        <Route path="/intro" element={<Intro />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<TodoMain />} />
          <Route path="/todolist" element={<TodoList />} />
          <Route path="/todowrite" element={<TodoWrite />} />
          <Route path="/todoedit" element={<TodoWriteEdit />} />
          <Route path="/myplantlist" element={<MyPlantList />} />
          <Route path="/myplantwrite" element={<MyPlantWrite />} />
          <Route path="/myplantdetail" element={<MyPlantDetail />} />
          <Route path="/myplantedit" element={<MyPlantDetailEdit />} />
          <Route path="/diarylist" element={<DiaryList />} />
          <Route path="/diarywrite" element={<DiaryWrite />} />
          <Route path="/diarydetail" element={<DiaryDetail />} />
          <Route path="/diaryedit" element={<DiaryWriteEdit />} />
          <Route path="/*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
