import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { SwDiary } from "../style/DetailLayout";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import NoImage from "../assets/noimageslide.jpg";

const DiarySwiper = ({ diaryPhotoData }) => {
  // 이미지 없을 때 error처리
  const onImgError = e => {
    e.target.src = NoImage;
  };
  return (
    <SwDiary>
      {/* map 출력 안됨, data.pic과 pics 확인 필요 */}
      <Swiper pagination={true} modules={[Pagination]}>
        {diaryPhotoData &&
          diaryPhotoData.map((item, index) => (
            <SwiperSlide key={index}>
              <img src={`${item}`} alt="사진" onError={onImgError} />
            </SwiperSlide>
          ))}
      </Swiper>
    </SwDiary>
  );
};

export default DiarySwiper;
