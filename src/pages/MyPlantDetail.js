import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ConfigProvider, Modal } from "antd";
import "../style/modalstyle.css";
import { mainColor } from "../style/GlobalStyle";
import { PageBtnWrap } from "../style/Components";
import {
  MyPlantDetailWrap,
  MyPlantDetailTop,
  MyPlantDetailTitle,
  MyPlantDetailContents,
  MyPlantDetailImage,
} from "../style/DetailLayout";
import { getDetail } from "../api/patchmyplant";

const MyPlantDetail = () => {
  let { iplant } = useParams();
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

  // Detail리스트 state관리
  const [detailInfo, setDetailInfo] = useState({});
  const getDetailData = async () => {
    try {
      const data = await getDetail(iplant);
      console.log(data);
      setDetailInfo(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getDetailData();
  }, []);

  return (
    <>
      <MyPlantDetailWrap>
        <MyPlantDetailTop>
          <MyPlantDetailImage>
            <img src="https://via.placeholder.com/500" alt="식물사진" />
          </MyPlantDetailImage>
          <MyPlantDetailTitle>
            <div>
              <span>식물 종류 이름{detailInfo && detailInfo.nm}</span>
              <p>식물 별명</p>
            </div>
            <div>
              <span>데려온 날짜</span>
              <p>2023-06-18</p>
            </div>
          </MyPlantDetailTitle>
        </MyPlantDetailTop>
        <MyPlantDetailContents>
          <span>메모</span>
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
              <Link to="/myplantedit">수정</Link>
            </li>
            <li>
              <button onClick={showModal}>삭제</button>
            </li>
          </PageBtnWrap>
        </MyPlantDetailContents>
      </MyPlantDetailWrap>
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

export default MyPlantDetail;
