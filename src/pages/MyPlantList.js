import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { WriteBtn } from "../style/ListLayout";
import MyPlantListItem from "../components/MyPlantListItem";
import { getPlants, postPlants } from "../api/patchmyplant";

const MyPlantList = () => {
  // MyPlant 리스트 정보 state로 관리
  const [list, setList] = useState([]);
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
          <React.Fragment key={index}>
            <MyPlantListItem item={item} />
          </React.Fragment>
        ))}
      </ul>
      <WriteBtn>
        <Link to="/myplantwrite"></Link>
      </WriteBtn>
    </>
  );
};

export default MyPlantList;
