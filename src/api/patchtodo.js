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
        ctnt: "에러발생 내용",
        month: "00-00",
        time: "00-00",
        nickNm: "에러발생 닉네임",
        nm: "에러발생 이름",
        finishYn: 1,
      },
      {
        ctnt: "에러발생 내용 1",
        month: "01-01",
        time: "01-01",
        nickNm: "에러발생 닉네임 1",
        nm: "에러발생 이름 1",
        finishYn: 0,
      },
    ];
  }
};
