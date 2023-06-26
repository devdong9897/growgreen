import "./App.css";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
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
    <Header />
    
      <Routes>
        <Route path="/todomain" element={<TodoMain />} />
        <Route path="/todolist" element={<TodoList />} />
        <Route path="/todowrite" element={<TodoWrite />} />
        <Route path="/myplantlist" element={<MyPlantList />} />
        <Route path="/myplantwrite" element={<MyPlantWrite />} />
        <Route path="/myplantdetail" element={<MyPlantDetail />} />
        <Route path="/diarywrite" element={<DiaryWrite />} />
        <Route path="/diarylist" element={<DiaryList />} />
        <Route path="/diarydetail" element={<DiaryDetail />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
