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

const MyPlantListItem = ({ item }) => {
  return (
    <>
      
      <MyPlantLiItem>
        <Link to={`/myplantdetail/${item.iplant}`}>
          <MyPlantLiItemLeft>
            <img src={`http://192.168.0.144:5005/imgs/plant/${item.iplant}/${item.plantPic}`} alt="" />
          </MyPlantLiItemLeft>
          <MyPlantLiItemRight>
            <MyPlantLiItemName>
              <span>{item.nm}</span>
              {item.nickNm} 
            </MyPlantLiItemName>
            <MyPlantLiItemDate>{item.onDate}</MyPlantLiItemDate>
          </MyPlantLiItemRight>
        </Link>
      </MyPlantLiItem>
    </>
  );
};

export default MyPlantListItem;
