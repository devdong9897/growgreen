import React from "react";
import { Link } from "react-router-dom";
import { WriteBtn } from "../style/ListLayout";
import MyPlantListItem from "../components/MyPlantListItem";

const MyPlantList = () => {
  return (
    <>
      <ul>
        <MyPlantListItem />
      </ul>
      <WriteBtn>
        <Link to="/myplantwrite"></Link>
      </WriteBtn>
    </>
  );
};

export default MyPlantList;
