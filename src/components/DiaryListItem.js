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

const DiaryListItem = ({ item }) => {
  return (
    <>
      <DiaryLiItem>
        <Link to="../diarydetail">
          <DiaryLiItemLeft>
            <img
              src={
                item.pic
                  ? item.pic
                  : `${process.env.PUBLIC_URL}/images/noimage.jpg`
              }
              alt={item.title}
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
