import axios from "axios";

const instance = axios.create({
  baseURL: "http://192.168.0.144:5005",
  timeout: 1000,
  headers: {
    "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    Accept: "*/*",
  },
});

// 투두 전체 리스트 get
export const getTodo = async () => {
  try {
    const res = await instance.get("/api/todo");
    return res.data;
  } catch (err) {
    console.log(err);
    // 투두 전체 리스트 더미데이터
    return [
      {
        ctnt: "투두",
        month: "06-01",
        time: "11-11",
        nickNm: "ㅇ",
        nm: "ㅐㅑㅕ",
        finishYn: 0,
      },
      {
        ctnt: "수정내용",
        month: "06-07",
        time: "00-00",
        nickNm: "닉넴",
        nm: "오잉",
        finishYn: 0,
      },
      {
        ctnt: "분갈이",
        month: "06-29",
        time: "00-00",
        nickNm: "닉넴",
        nm: "오잉",
        finishYn: 0,
      },
      {
        ctnt: "분갈이",
        month: "06-29",
        time: "00-00",
        nickNm: "닉넴",
        nm: "오잉",
        finishYn: 0,
      },
      {
        ctnt: "내용수정",
        month: "06-29",
        time: "00-00",
        nickNm: "ㅇ",
        nm: "ㅐㅑㅕ",
        finishYn: 0,
      },
      {
        ctnt: "분갈이",
        month: "06-29",
        time: "00-00",
        nickNm: "닉넴",
        nm: "오잉",
        finishYn: 0,
      },
      {
        ctnt: "분갈이",
        month: "06-29",
        time: "00-00",
        nickNm: "닉넴",
        nm: "오잉",
        finishYn: 0,
      },
      {
        ctnt: "분갈이",
        month: "06-29",
        time: "00-00",
        nickNm: "닉넴",
        nm: "오잉",
        finishYn: 0,
      },
      {
        ctnt: "분갈이",
        month: "06-29",
        time: "00-00",
        nickNm: "닉넴",
        nm: "오잉",
        finishYn: 0,
      },
      {
        ctnt: "물주기",
        month: "06-30",
        time: "00-00",
        nickNm: "닉넴",
        nm: "오잉",
        finishYn: 0,
      },
      {
        ctnt: "물물주기",
        month: "06-30",
        time: "14-00",
        nickNm: "ㅇ",
        nm: "ㅐㅑㅕ",
        finishYn: 0,
      },
      {
        ctnt: "분갈이",
        month: "06-30",
        time: "14-00",
        nickNm: "닉넴",
        nm: "이룸",
        finishYn: 0,
      },
      {
        ctnt: "물주기",
        month: "06-30",
        time: "14-00",
        nickNm: "ㅇ",
        nm: "ㅐㅑㅕ",
        finishYn: 0,
      },
      {
        ctnt: "wer",
        month: "07-01",
        time: "00-00",
        nickNm: "ㅇ",
        nm: "ㅐㅑㅕ",
        finishYn: 0,
      },
      {
        ctnt: "wer",
        month: "07-01",
        time: "00-00",
        nickNm: "ㅇ",
        nm: "ㅐㅑㅕ",
        finishYn: 0,
      },
      {
        ctnt: "wer",
        month: "07-01",
        time: "00-00",
        nickNm: "ㅇ",
        nm: "ㅐㅑㅕ",
        finishYn: 0,
      },
      {
        ctnt: "지금재경이",
        month: "07-01",
        time: "12-00",
        nickNm: "ㅇ",
        nm: "ㅐㅑㅕ",
        finishYn: 0,
      },
      {
        ctnt: "반복",
        month: "07-03",
        time: "12-00",
        nickNm: "1010",
        nm: "십번",
        finishYn: 0,
      },
      {
        ctnt: "우기재경",
        month: "07-03",
        time: "12-00",
        nickNm: "1010",
        nm: "십번",
        finishYn: 0,
      },
      {
        ctnt: "반복",
        month: "07-03",
        time: "12-00",
        nickNm: "1010",
        nm: "십번",
        finishYn: 0,
      },
      {
        ctnt: "반복",
        month: "07-03",
        time: "12-00",
        nickNm: "1010",
        nm: "십번",
        finishYn: 0,
      },
      {
        ctnt: "반복",
        month: "07-03",
        time: "12-00",
        nickNm: "1010",
        nm: "십번",
        finishYn: 0,
      },
      {
        ctnt: "우기재경",
        month: "07-03",
        time: "12-00",
        nickNm: "1010",
        nm: "십번",
        finishYn: 0,
      },
      {
        ctnt: "반복",
        month: "07-03",
        time: "12-00",
        nickNm: "1010",
        nm: "십번",
        finishYn: 0,
      },
      {
        ctnt: "반복",
        month: "07-03",
        time: "12-00",
        nickNm: "1010",
        nm: "십번",
        finishYn: 0,
      },
      {
        ctnt: "반복",
        month: "07-03",
        time: "12-00",
        nickNm: "1010",
        nm: "십번",
        finishYn: 0,
      },
      {
        ctnt: "반복",
        month: "07-03",
        time: "12-00",
        nickNm: "1010",
        nm: "십번",
        finishYn: 0,
      },
      {
        ctnt: "우기재경",
        month: "07-03",
        time: "12-00",
        nickNm: "1010",
        nm: "십번",
        finishYn: 0,
      },
      {
        ctnt: "투두내용 물주기",
        month: "07-07",
        time: "00-00",
        nickNm: "가자",
        nm: "힝힝",
        finishYn: 0,
      },
      {
        ctnt: "물주기",
        month: "07-07",
        time: "14-00",
        nickNm: "ㅇ",
        nm: "ㅐㅑㅕ",
        finishYn: 0,
      },
      {
        ctnt: "물주기 수정",
        month: "07-07",
        time: "14-00",
        nickNm: "닉넴",
        nm: "오잉",
        finishYn: 0,
      },
      {
        ctnt: "투두내용",
        month: "07-07",
        time: "17-00",
        nickNm: "닉넴",
        nm: "오잉",
        finishYn: 0,
      },
      {
        ctnt: "물주기기기",
        month: "07-08",
        time: "14-00",
        nickNm: "닉넴",
        nm: "오잉",
        finishYn: 0,
      },
      {
        ctnt: "화분갈이4",
        month: "07-09",
        time: "00-00",
        nickNm: "닉넴",
        nm: "이룸",
        finishYn: 0,
      },
      {
        ctnt: "화분갈이4",
        month: "07-09",
        time: "00-00",
        nickNm: "닉넴",
        nm: "이룸",
        finishYn: 0,
      },
      {
        ctnt: "화분갈이4",
        month: "07-09",
        time: "00-00",
        nickNm: "닉넴",
        nm: "이룸",
        finishYn: 0,
      },
      {
        ctnt: "화분갈이4",
        month: "07-09",
        time: "00-00",
        nickNm: "닉넴",
        nm: "이룸",
        finishYn: 0,
      },
      {
        ctnt: "화분갈이4",
        month: "07-09",
        time: "00-00",
        nickNm: "닉넴",
        nm: "이룸",
        finishYn: 0,
      },
      {
        ctnt: "화분갈이4",
        month: "07-09",
        time: "00-00",
        nickNm: "닉넴",
        nm: "이룸",
        finishYn: 0,
      },
      {
        ctnt: "화분갈이4",
        month: "07-09",
        time: "00-00",
        nickNm: "닉넴",
        nm: "이룸",
        finishYn: 0,
      },
      {
        ctnt: "화분갈이4",
        month: "07-09",
        time: "00-00",
        nickNm: "닉넴",
        nm: "이룸",
        finishYn: 0,
      },
      {
        ctnt: "화분갈이4",
        month: "07-09",
        time: "00-00",
        nickNm: "닉넴",
        nm: "이룸",
        finishYn: 0,
      },
      {
        ctnt: "물주기",
        month: "07-17",
        time: "14-00",
        nickNm: "닉넴",
        nm: "이룸",
        finishYn: 0,
      },
    ];
  }
};
