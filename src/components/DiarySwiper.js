import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { SwDiary } from "../style/DetailLayout";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const DiarySwiper = () => {
  return (
    <SwDiary>
      <Swiper pagination={true} modules={[Pagination]}>
        <SwiperSlide>
          <img src="https://via.placeholder.com/560x700/123" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://via.placeholder.com/560x500/bfff00" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://via.placeholder.com/560x400/edacb1" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://via.placeholder.com/560x200/008080" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://via.placeholder.com/560x600/ffd700" alt="" />
        </SwiperSlide>
      </Swiper>
    </SwDiary>
  );
};

export default DiarySwiper;
