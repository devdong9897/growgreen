import axios from "axios";

// plant 데이터 가져오기
export const getPlants = async () => {
  try {
    const res = await axios.get("/api/plant");
    const data = res.data;
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
    return [];
  }
};

// plant 데이터 보내기
export const postPlant = async (postData) => {
  try {
    const res = await axios.post("/api/plant", postData);
    const data = res.data;
    console.log("POST 요청 결과:", data);
  } catch (err) {
    console.log(err);
  }
};

// plant 데이터 수정

