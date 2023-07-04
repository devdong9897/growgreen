import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import {
  DiaryLiItem,
  DiaryLiItemLeft,
  DiaryLiItemRight,
  DiaryLiItemName,
  DiaryLiItemText,
} from "../style/ListLayout";
import NoImage from "../noimage.jpg";

const DiaryListItem = ({ item }) => {
  // 이미지 없을 때 error처리
  const onImgError = e => {
    e.target.src = NoImage;
  };
  return (
    <>
      <DiaryLiItem>
        {/* index 추후 pk값으로 변경 필요 */}
        <Link to={`../diarydetail/${item.idiary}`}>
          <DiaryLiItemLeft>
            <img src={item.pic} alt={item.title} onError={onImgError} />
          </DiaryLiItemLeft>
          <DiaryLiItemRight>
            <DiaryLiItemName>
              <span>{item.createdAt}</span>
              <i>
                <FontAwesomeIcon icon={faBook} />
              </i>
              {item.title}
            </DiaryLiItemName>
            <DiaryLiItemText>{item.ctnt}</DiaryLiItemText>
          </DiaryLiItemRight>
        </Link>
      </DiaryLiItem>
    </>
  );
};

export default DiaryListItem;
