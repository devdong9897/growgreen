import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { SwDiary } from "../style/DetailLayout";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const DiarySwiper = ({ diaryDetailData }) => {
  return (
    <SwDiary>
      {/* map 출력 안됨, data.pic과 pics 확인 필요 */}
      <Swiper pagination={true} modules={[Pagination]}>
        {diaryDetailData &&
          diaryDetailData.map((item, index) => (
            <SwiperSlide key={index}>
              <img src={`${item.pic}`} alt={item.title} />
            </SwiperSlide>
          ))}
      </Swiper>
    </SwDiary>
  );
};

export default DiarySwiper;
