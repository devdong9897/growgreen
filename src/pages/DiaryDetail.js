import React, { useEffect, useState } from "react";
import DiarySwiper from "../components/DiarySwiper";
import { Link, useParams } from "react-router-dom";
import { getDiaryDetail } from "../api/patchdiary";

import "../style/modalstyle.css";
import { mainColor } from "../style/GlobalStyle";
import { PageBtnWrap } from "../style/Components";
import {
  DiaryDetailContents,
  DiaryDetailInner,
  DiaryDetailTitle,
} from "../style/DetailLayout";
import { ConfigProvider, Modal } from "antd";

const DiaryDetail = () => {
  // 다이어리 디테일 페이지 state 관리
  const [diaryDetailData, setDiaryDetailData] = useState(null);
  // idiary params 관리
  const paramIdiary = useParams().idiary;
  const getDiaryDetailData = async idiary => {
    try {
      const data = await getDiaryDetail(idiary);
      setDiaryDetailData(data);
      console.log("다이어리 디테일 데이터", data);
    } catch (err) {
      console.log("다이어리 디테일 에러 : ", err);
    }
  };
  // useEffect(() => {
  //   getDiaryDetailData(paramIdiary);
  //   console.log(diaryDetailData);
  // }, []);
  useEffect(() => {
    const fetchData = async () => {
      await getDiaryDetailData(paramIdiary);
    };
    fetchData();
  }, [paramIdiary]);
  // 모달창 이벤트
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <DiarySwiper />
      <DiaryDetailInner>
        <DiaryDetailTitle>
          {diaryDetailData && <span>{diaryDetailData.data.createdAt}</span>}
          {diaryDetailData && <p>{diaryDetailData.data.title}</p>}
        </DiaryDetailTitle>
        <DiaryDetailContents>
          {diaryDetailData && <p>{diaryDetailData.data.ctnt}</p>}
          <PageBtnWrap>
            <li>
              <Link to="/diaryedit">수정</Link>
            </li>
            <li>
              <button onClick={showModal}>삭제</button>
            </li>
          </PageBtnWrap>
        </DiaryDetailContents>
      </DiaryDetailInner>
      {/* 삭제 버튼 클릭 시 모달창 오픈 */}
      <ConfigProvider
        theme={{
          token: {
            fontFamily:
              '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif',
            colorPrimary: mainColor.colorGreenRegular,
          },
        }}
      >
        <Modal
          title="삭제하시겠습니까?"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          okText="삭제"
          cancelText="취소"
          wrapClassName="modal_wrap"
          closable={false}
        >
          <p>삭제된 게시물은 복구가 불가능 하니 신중하게 선택해주세요.</p>
        </Modal>
      </ConfigProvider>
    </>
  );
};

export default DiaryDetail;
