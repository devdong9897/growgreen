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



export const MyPlantDetailWrap = styled.div`
  margin: 15 0 0 22px;
`;

export const MyPlantDetailName = styled.h1`
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 1.2;
  margin-top: 25px;
  text-align: center;
  color: ${borderColor.borderGray};
`;
export const MyPlantDetailNickName = styled.h1`
  font-size: 2.2rem;
  font-weight: 700;
  text-align: center;
  line-height: 2.2;
`;

export const MyPlantDetailSubName = styled.h1`
  font-size: 1.4rem;
  font-weight: 700;
  text-align: center;
  line-height: 2.2;
`;

export const MyPlantDetailDate = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  line-height: 1.2;
`;

export const MyPlantDetailMemo = styled.p`
  font-size: 1.6rem;
  font-weight: 700;
  margin-right: 15px;
`;

export const MyPlantDetailContents = styled.div`
 margin-top: 70px;
  p {
    font-size: 1.6rem;
    line-height: 1.8;
  }
`;