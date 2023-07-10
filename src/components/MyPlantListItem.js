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
import NoImage from "../assets/noimage.jpg";

const MyPlantListItem = ({ item }) => {
  // 이미지 없을 때 error처리
  const onImgError = e => {
    e.target.src = NoImage;
  };
  return (
    <>
      <MyPlantLiItem>
        <Link to={`/myplantdetail/${item.iplant}`}>
          <MyPlantLiItemLeft>
            <img
              src={`/imgs/plant/${item.iplant}/${item.plantPic}`}
              alt={item.nm}
              onError={onImgError}
            />
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
