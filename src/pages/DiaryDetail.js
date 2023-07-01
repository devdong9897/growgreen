import React, { useState } from "react";
import DiarySwiper from "../components/DiarySwiper";
import { Link } from "react-router-dom";
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
          <span>2023-06-18</span>
          <p>Lorem ipsum dolor sit amet.</p>
        </DiaryDetailTitle>
        <DiaryDetailContents>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
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
