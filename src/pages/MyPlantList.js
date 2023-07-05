import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { WriteBtn } from "../style/ListLayout";
import MyPlantListItem from "../components/MyPlantListItem";
import { getPlants } from "../api/patchmyplant";

const MyPlantList = () => {
  const [list, setList] = useState([]);

  const getList = async () => {
    try {
      const data = await getPlants();
      setList(data);
    } catch (err) {
      console.log(err);
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
