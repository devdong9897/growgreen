import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});
  
// diary 전체 리스트 데이터 GET
export const getDiary = async () => {
  try {
    const res = await axiosInstance.get("/api/diary");
    const data = res.data;
    // console.log("다이어리 전체 리스트 데이터", data);
    return data;
  } catch (err) {
    console.log(err);
    // err 발생 시 샘플 코드 반환
    return [
      {
        title: "에러발생 타이틀",
        ctnt: "에러발생 내용",
        createdAt: "0000-00-00",
        pic: "7ee5c1d4-176d-4d9a-a2f2-eaf4e5d59547.jpg",
      },
      {
        title: "에러발생 타이틀 1",
        ctnt: "에러발생 내용 1",
        createdAt: "1111-11-11",
        pic: "eb8a3bc8-bf2a-49c3-9235-2c11a5f4d5a5.jpg",
      },
    ];
  }
};
// diary detail 데이터 GET
export const getDiaryDetail = async idiary => {
  try {
    const res = await axiosInstance.get(`/api/diary/${idiary}`);
    const data = res.data;
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
    // err 발생 시 샘플 코드 반환
    return {
      data: {
        idiary: 0,
        title: "에러발생 타이틀",
        ctnt: "에러발생 내용",
        createdAt: "0000-00-00",
        pic: "에러발생 사진.jpg",
      },
      pics: ["에러발생 사진1.jpg"],
    };
  }
};
// diary POST
export const postDiary = async _data => {
  try {
    const res = await axiosInstance.post("/api/diary", _data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    const data = res.data;
    console.log("다이어리 post", data);
    return data;
  } catch (err) {
    console.log(err);
    return {
      title: "에러발생 타이틀",
      ctnt: "에러발생 내용",
    };
  }
};
// diary PUT
export const putDiary = async _data => {
  try {
    const res = await axiosInstance.put("/api/diary", _data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    const data = res.data;
    console.log("다이어리 수정데이터", data);
    return data;
  } catch (err) {
    console.log("다이어리 PUT", err);
  }
};
// diary DELETE
export const deleteDiary = async idiary => {
  try {
    const res = await axiosInstance.delete(`/api/diary?idiary=${idiary}`);
    const result = res.data;
    return result;
  } catch (err) {
    console.log(err);
  }
};
