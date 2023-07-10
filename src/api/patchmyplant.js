import axios from "axios";

// 모든 식물 리스트 가져오기
export const getPlants = async () => {
  try {
    const res = await axios.get("/api/plant");
    const data = res.data;
    // console.log(data);
    return data;
  } catch (err) {
    console.log(err);
    return [
      {
        nm: "ㅐㅑㅕ",
        nickNm: "ㅇ",
        plantPic: "d3b21044-cbff-416e-9f46-d99521da7e8c.jpg",
      },
      {
        nm: "오잉",
        nickNm: "닉넴",
        plantPic: "4ff885fa-c329-4b99-ae2b-9f1e856ebde8.png",
      },
      {
        nm: "힝힝",
        nickNm: "가자",
        plantPic: "sdfa",
      },
      {
        nm: "이룸",
        nickNm: "닉넴",
        plantPic: "870fcdaa-43ba-4726-9ca3-3d25ba04e821.png",
      },
      {
        nm: "다육이",
        nickNm: "유니",
        plantPic: "9513a553-c0f9-4f89-b8bc-00645a03b6e5.png",
      },
      {
        nm: "다육이",
        nickNm: "재구미",
        plantPic: "b972407b-a32e-4ed3-b18b-a81bc86a8e49.png",
      },
      {
        nm: "십번",
        nickNm: "1010",
        plantPic: "eda5eea8-cc86-45dd-aa0d-81f8409bbbbe.png",
      },
      {
        nm: "11",
        nickNm: "11",
        plantPic: "07c43e11-dc4b-49f2-abc5-140a2fb8c77b.png",
      },
      {
        nm: "십이번",
        nickNm: "십이번",
        plantPic: "9bde25ad-fac6-43eb-b03a-02cfa340afed.png",
      },
      {
        nm: "wornal",
        nickNm: "wornal",
        plantPic: "f6c83c2a-d263-4513-bdc1-5059a54fb447.jpg",
      },
      {
        nm: "wornal",
        nickNm: "wornal",
        plantPic: "2357b343-a810-4c5d-9cd4-c562aa49248c.jpg",
      },
    ];
  }
};

// 특정 식물 가져오기
export const getDetail = async iplant => {
  try {
    const res = await axios.get(`/api/plant/${iplant}`);
    const data = res.data;
    return data;
  } catch (err) {
    console.log(err);
    return {};
  }
};

// 식물등록
export const postPlants = async _data => {
  try {
    const res = await axios.post("/api/plant", _data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    const data = res.data;
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
    return {
      nm: "",
      nickNm: "",
      onDate: "",
      ctnt: "",
    };
  }
};

// 식물수정
export const putPlants = async _data => {
  try {
    const res = await axios.put("/api/plant", _data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    const data = res.data;
    return data;
  } catch (err) {
    console.log(err);
    return {};
  }
};

// 식물삭제
export const deletePlants = async iplant => {
  try {
    const res = await axios.delete("/api/plant", {
      data: iplant,
    });
    const data = res.data;
    return data;
  } catch (err) {
    console.log(err);
    return {};
  }
};