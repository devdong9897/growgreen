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
  // 다이어리 사진 state 관리
  const [diaryPhotoData, setDiaryPhotoData] = useState(null);
  // idiary params 관리
  const paramIdiary = useParams().idiary;
  // 다이어리 디테일 데이터 GET
  const getDiaryDetailData = async idiary => {
    try {
      // 다이어리 디테일 원본 데이터 전송
      const idiaryData = await getDiaryDetail(idiary);
      // 사진 데이터 (-> 전달되는 값 {}로 묶었을 때 undefinded 발생하는 이유 확인)
      let dataParse = idiaryData.pics.map(item => item);
      dataParse.unshift(idiaryData.data.pic);
      setDiaryPhotoData(dataParse);
      // 다이어리 디테일 원본 데이터
      setDiaryDetailData(idiaryData);
      console.log("다이어리 디테일 데이터", idiaryData);
      console.log("다이어리 사진 데이터", dataParse);
    } catch (err) {
      console.log("다이어리 디테일 에러 : ", err);
    }
  };
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
      {/* swiper 슬라이드 */}
      <DiarySwiper diaryPhotoData={diaryPhotoData} paramIdiary={paramIdiary} />
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
