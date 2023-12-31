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
import NoImage from "../assets/noimage.jpg";

const DiaryListItem = ({ item }) => {
  // 이미지 없을 때 error처리
  const onImgError = e => {
    e.target.src = NoImage;
  };
  return (
    <>
      <DiaryLiItem>
        <Link to={`../diarydetail/${item.idiary}`}>
          <DiaryLiItemLeft>
            {/* 이미지 경로 확인 필요 */}
            <img
              src={`/imgs/diaryPics/${item.idiary}/${item.pic}`}
              alt={item.title}
              onError={onImgError}
            />
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
