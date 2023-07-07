import axios from "axios";

// todomain 특정 날짜 todo GET (특정날짜의 todo목록 보기)
export const getSelectTodoList = async deadline => {
  try {
    const res = await axios.get(`/api/todo/${deadline}`);
    const data = res.data;
    // console.log(data);
    return data;
  } catch (err) {
    console.log(err);
    // err 발생 시 샘플 코드 반환
    return [
      {
        ctnt: "에러발생 내용 01",
        deadlineDate: "01-01",
        deadlineTime: "01:01",
        nickNm: "에러발생 닉네임 01",
        nm: "에러발생 이름 01",
        finishYn: 0,
      },
      {
        ctnt: "에러발생 내용 02",
        deadlineDate: "02-02",
        deadlineTime: "02:02",
        nickNm: "에러발생 닉네임 02",
        nm: "에러발생 이름 02",
        finishYn: 1,
      },
    ];
  }
};
// todolist 페이지 데이터 GET (deadline이 오늘날짜인 Todo리스트 보기)
export const getTodayTodoList = async () => {
  try {
    const res = await axios.get("/api/todo");
    const data = res.data;
    // console.log(data);
    return data;
  } catch (err) {
    console.log(err);
    // err 발생 시 샘플 코드 반환
    return [
      {
        ctnt: "에러발생 내용 01",
        deadlineDate: "07-04",
        deadlineTime: "01:01",
        nickNm: "에러발생 닉네임 01",
        nm: "에러발생 이름 01",
        finishYn: 0,
      },
      {
        ctnt: "에러발생 내용 02",
        deadlineDate: "07-05",
        deadlineTime: "02:02",
        nickNm: "에러발생 닉네임 02",
        nm: "에러발생 이름 02",
        finishYn: 1,
      },
    ];
  }
};
// todo 캘린더 데이터 GET (전체 Todo리스트 보기)
export const getTotalTodoList = async () => {
  try {
    const res = await axios.get("/api/todo/list");
    const data = res.data;
    // console.log("전체 투두리스트 보기", data);
    return data;
  } catch (err) {
    console.log(err);
    return [
      {
        ctnt: "에러발생 내용 01",
        deadlineDate: "07-01",
        deadlineTime: "12:00",
        nickNm: "에러발생 닉네임 01",
        nm: "에러발생 이름 01",
        finishYn: 0,
      },
      {
        ctnt: "에러발생 내용 02",
        deadlineDate: "07-03",
        deadlineTime: "12:00",
        nickNm: "에러발생 닉네임 02",
        nm: "에러발생 이름 02",
        finishYn: 1,
      },
      {
        ctnt: "에러발생 내용 03",
        deadlineDate: "07-04",
        deadlineTime: "12:00",
        nickNm: "에러발생 닉네임 03",
        nm: "에러발생 이름 03",
        finishYn: 0,
      },
      {
        ctnt: "에러발생 내용 04",
        deadlineDate: "07-06",
        deadlineTime: "12:00",
        nickNm: "에러발생 닉네임 04",
        nm: "에러발생 이름 01",
        finishYn: 0,
      },
      {
        ctnt: "에러발생 내용 05",
        deadlineDate: "08-08",
        deadlineTime: "16:00",
        nickNm: "에러발생 닉네임 05",
        nm: "에러발생 이름 05",
        finishYn: 0,
      },
    ];
  }
};
// todo 수정 데이터 GET
export const getTodoEdit = async itodo => {
  try {
    const res = await axios.get(`/api/todo/detail/${itodo}`);
    const data = res.data;
    console.log("투두 수정데이터", data);
    return data;
  } catch (err) {
    console.log(err);
  }
};
// todo POST
export const postTodo = async data => {
  try {
    const res = await axios.post("/api/todo", data);
    const result = res.data;
    console.log("투두 post", result);
  } catch (err) {
    console.log(err);
  }
};
// todo PUT
export const putTodo = async data => {
  try {
    const res = await axios.put("/api/todo", data);
    const result = res.data;
    console.log("투두 PUT", result);
  } catch (err) {
    console.log("투두 PUT 에러", err);
  }
};
