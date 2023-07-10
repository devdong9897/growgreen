import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
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
import { getDetail, deletePlants } from "../api/patchmyplant";
import NoImage from "../assets/noimageslide.jpg";

const MyPlantDetail = () => {
  // 이미지 없을 때 error처리
  const onImgError = e => {
    e.target.src = NoImage;
  };
  let { iplant } = useParams();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = async () => {
    setIsModalOpen(false);
    try {
      await deletePlants({ iplant });
      navigate("/myplantlist");
    } catch (err) {
      console.log(err);
    }
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [detailInfo, setDetailInfo] = useState({});

  // 상세정보 화면에 표시
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
            <img
              src={`/imgs/plant/${iplant}/${detailInfo.plantPic}`}
              alt={detailInfo.nickNm}
              onError={onImgError}
            />
          </MyPlantDetailImage>
          <MyPlantDetailTitle>
            <div>
              <span>
                식물종류
                <br />
                {detailInfo.nm}
              </span>
              <p>{detailInfo.nickNm}</p>
            </div>
            <div>
              <span>데려온 날짜</span>
              <p>{detailInfo.onDate}</p>
            </div>
          </MyPlantDetailTitle>
        </MyPlantDetailTop>
        <MyPlantDetailContents>
          <span>메모</span>
          <p>{detailInfo.ctnt}</p>
          <PageBtnWrap>
            <li>
              <Link to={`/myplantedit/${iplant}`}>수정</Link>
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
