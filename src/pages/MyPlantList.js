import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { WriteBtn } from "../style/ListLayout";
import MyPlantListItem from "../components/MyPlantListItem";
import { getPlants } from "../api/patchmyplant";

const MyPlantList = () => {
  // MyPlant 리스트 정보 state로 관리
  const [list, setList] = useState([]);

  // list페이지 에러시 콘솔창 에러 출력
  const getList = async () => {
    try {
      const data = await getPlants();
      setList(data);
    } catch (err) {
      console.log("플랜트 리스트 에러 : ", err);
    }
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <>
      <ul>
        {list.map((item, index) => (
          <MyPlantListItem key={index} item={item} />
        ))}
      </ul>
      <WriteBtn>
        <Link to="/myplantwrite"></Link>
      </WriteBtn>
    </>
  );
};

export default MyPlantList;
