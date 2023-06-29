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

const DiaryListItem = () => {
  return (
    <>
      <DiaryLiItem>
        <Link to="/diarydetail">
          <DiaryLiItemLeft>
            <img src="https://via.placeholder.com/100" alt="" />
          </DiaryLiItemLeft>
          <DiaryLiItemRight>
            <DiaryLiItemName>
              <span>2023-06-27</span>
              <i>
                <FontAwesomeIcon icon={faBook} />
              </i>
              일기 제목
            </DiaryLiItemName>
            <DiaryLiItemText>
              Lorem ipsum dolor sit amet.Lorem ipsumLorem ipsum dolor sit
              amet.Lorem ipsumLorem ipsum dolor sit amet.Lorem ipsum
            </DiaryLiItemText>
          </DiaryLiItemRight>
        </Link>
      </DiaryLiItem>
    </>
  );
};

export default DiaryListItem;
