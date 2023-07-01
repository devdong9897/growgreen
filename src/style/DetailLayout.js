import styled from "@emotion/styled";
import { mainColor, subColor, borderColor } from "./GlobalStyle";

// 다이어리 swiper 슬라이드 설정
export const SwDiary = styled.div`
  height: 40vh;
  .swiper {
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .swiper-pagination {
      bottom: 20px;
      .swiper-pagination-bullet {
        margin: 0 3px;
        background: ${subColor.colorWhite};
      }
    }
  }
`;
export const DiaryDetailInner = styled.div``;

export const DiaryDetailTitle = styled.div`
  position: relative;
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 1.2;
  padding: 25px 2% 35px;
  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 10px;
    background: ${subColor.colorGray};
  }
  span {
    display: block;
    font-size: 0.9em;
    color: ${mainColor.colorGreenBold};
    margin-bottom: 5px;
  }
`;
export const DiaryDetailContents = styled.div`
  padding: 25px 2% 35px;
  p {
    font-size: 1.6rem;
    line-height: 1.8;
  }
`;

export const MyPlantDetailWrap = styled.div``;
export const MyPlantDetailTop = styled.div`
  position: relative;
  padding: 2.5rem 2% 0;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 60%;
    background: url(/images/myplantdetail_bgi.png) no-repeat center;
    background-size: cover;
  }
  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 10px;
    background: ${subColor.colorGray};
  }
`;
export const MyPlantDetailImage = styled.div`
  img {
    display: block;
    max-width: 300px;
    width: 100%;
    margin: 0 auto;
    border-radius: 15px;
    overflow: hidden;
    isolation: isolate;
    border: 0.05rem solid ${borderColor.borderGray};
  }
`;
export const MyPlantDetailTitle = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 1.2;
  padding: 25px 0 35px;
  text-align: center;
  & > div:first-of-type {
    font-size: 2.4rem;
    span {
      font-size: 0.7em;
      opacity: 0.6;
    }
    p {
    }
  }
  & > div:last-of-type {
    margin-top: 20px;
  }
  span {
    display: block;
    font-size: 0.8em;
    margin-bottom: 5px;
  }
`;
export const MyPlantDetailContents = styled.div`
  padding: 25px 2% 35px;
  span {
    display: inline-block;
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: 10px;
  }
  p {
    font-size: 1.6rem;
    line-height: 1.8;
  }
`;
