import React from "react";
import { Link } from "react-router-dom";
// import { mainColor } from "../style/GlobalStyle";
import {
  MyPlantLiItem,
  MyPlantLiItemLeft,
  MyPlantLiItemRight,
  MyPlantLiItemName,
  MyPlantLiItemDate,
  ItemText,
} from "../style/ListLayout";

const MyPlantListItem = () => {
  return (
    <>
      <MyPlantLiItem>
        <Link to="/myplantdetail">
          <MyPlantLiItemLeft>
            <img src="https://via.placeholder.com/100" alt="" />
          </MyPlantLiItemLeft>
          <MyPlantLiItemRight>
            <MyPlantLiItemName>
              <span>식물 종류 이름</span>
              식물 별명
            </MyPlantLiItemName>
            <MyPlantLiItemDate>23-06-22</MyPlantLiItemDate>
          </MyPlantLiItemRight>
        </Link>
      </MyPlantLiItem>
    </>
  );
};

export default MyPlantListItem;
