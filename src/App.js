import "./App.css";

import Header from "./components/Header";
import DiaryDetail from "./pages/DiaryDetail";
import DiaryList from "./pages/DiaryList";
import DiaryWrite from "./pages/DiaryWrite";
import MyPlantDetail from "./pages/MyPlantDetail";
import MyPlantList from "./pages/MyPlantList";
import MyPlantWrite from "./pages/MyPlantWrite";
import TodoList from "./pages/TodoList";
import TodoMain from "./pages/TodoMain";
import TodoWrite from "./pages/TodoWrite";

function App() {
  return (
    <>
      <Header />
      <DiaryDetail />
      <DiaryList />
      <DiaryWrite />
      <MyPlantDetail />
      <MyPlantList />
      <MyPlantWrite />
      <TodoList />
      <TodoMain />
      <TodoWrite />
    </>
  );
}

export default App;
