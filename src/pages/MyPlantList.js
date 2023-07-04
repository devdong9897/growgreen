import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { WriteBtn } from "../style/ListLayout";
import MyPlantListItem from "../components/MyPlantListItem";
import { getPlants, postPlant } from "../api/patchmyplant";

const MyPlantList = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const getList = async () => {
      try {
        const data = await getPlants();
        setList(data);
      } catch (err) {
        console.log(err);
      }
    };
    getList();
  }, []);

  const handlePost = async () => {
    const postData = {
      nm: "string",
      nickNm: "string",
      onDate: "string",
      ctnt: "string",
    };
    

    try {
      await postPlant(postData);
      console.log("POST 요청이 성공했습니다.");
    } catch (err) {
      console.log("POST 요청이 실패했습니다.", err);
    }
  };

  return (
    <>
      <ul>
        {list.map((item, index) => (
          <MyPlantListItem key={index} item={item} />
        ))}
      </ul>
      <WriteBtn>
        <Link to="/myplantwrite" onClick={handlePost}></Link>
      </WriteBtn>
    </>
  );
};

export default MyPlantList;
