import axios from "axios";

const instance = axios.create({
  timeout: 1000,
});

// todo 전체 리스트 데이터 GET
export const getTodoTotalList = async () => {
  try {
    const res = await instance.get("/api/todo");
    const data = res.data;
    console.log(data);
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
// 특정 날짜 todo GET
export const getSelectTodoList = async deadline => {
  try {
    const res = await instance.get(`/api/todo/${deadline}`);
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
