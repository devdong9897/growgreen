import styled from "@emotion/styled";
import { subColor, height } from "./GlobalStyle";

// MyPlant
export const MyPlantWriteFir = styled.div`
  margin-bottom: 30px;
  &:last-of-type {
    margin-bottom: 0;
  }
  & > div {
    .ant-input {
      height: ${height.inputHeight};
      padding: 0 15px;
      border-radius: 10px;
      &::placeholder {
        color: ${subColor.colorGrayBold};
      }
    }
  }
  .ant-picker {
    height: ${height.inputHeight};
    padding: 0 15px;
    border-radius: 10px;
  }
  .ant-upload-wrapper {
    .ant-upload-list {
      .ant-upload {
        background: ${subColor.colorWhite};
        border-radius: 10px;
        margin-bottom: 0;
        &:last-of-type {
          margin-right: 0;
        }
      }
    }
  }
  textarea.ant-input {
    resize: none;
    min-height: 20vh;
    height: 100%;
    padding: 12px 15px;
    line-height: 1.5;
    border-radius: 10px;
    &::placeholder {
      color: ${subColor.colorGrayBold};
    }
  }
`;
export const MyPlantWriteTxt = styled.div`
  margin-bottom: 10px;
  font-weight: 700;
  font-size: 1.6rem;
  & > p {
    font-size: 0.75em;
    font-weight: 400;
    color: ${subColor.colorRed};
    margin-top: -3px;
  }
`;

export const MyPlantWtP = styled.p`
  font-size: 12px;
  font-weight: 400;
  margin-bottom: 15px;
  color: ${subColor.colorRed};
`;
// Todo
export const TodoWriteFir = styled.div`
  margin-bottom: 30px;
  &:last-of-type {
    margin-bottom: 0;
  }
  .ant-select {
    width: 100%;
    height: ${height.inputHeight};
    .ant-select-selector {
      align-items: center;
      height: 100%;
      padding: 0 15px;
      border-radius: 10px;
      .ant-select-selection-search-input {
        height: 100% !important;
      }
      .ant-select-selection-placeholder {
        margin: 0;
        color: ${subColor.colorGrayBold};
      }
    }
  }
  .plant-dete {
    display: flex;
    align-items: center;
    & > li {
      margin-right: 5px;
      &:last-of-type {
        margin-right: 0;
      }
      .ant-form-item {
        margin-bottom: 0;
      }
      .ant-picker {
        height: ${height.inputHeight};
        padding: 0 15px;
        border-radius: 10px;
        .ant-picker-input input {
          font-family: "Pretendard Variable", Pretendard, -apple-system,
            BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI",
            "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic",
            "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
          &::placeholder {
            color: #25352880;
          }
        }
      }
      .ant-select-selector .ant-select-selection-item {
        color: #25352880;
      }
    }
  }
  textarea.ant-input {
    resize: none;
    min-height: 20vh;
    height: 100%;
    padding: 12px 15px;
    line-height: 1.5;
    border-radius: 10px;
    &::placeholder {
      color: ${subColor.colorGrayBold};
    }
  }
  .ant-checkbox-group {
    display: block;
    .ant-checkbox-wrapper {
      margin-right: 5px;
      &:last-of-type {
        margin-right: 0;
      }
    }
  }
`;
export const TodoEditChkWrap = styled.div`
  & > .ant-form-item {
    margin-bottom: 0;
    .ant-form-item-control-input {
      min-height: auto;
    }
  }
`;
export const TodoWriteTxt = styled.div`
  margin-bottom: 10px;
  font-weight: 700;
  font-size: 1.6rem;
  p {
    font-size: 1.3rem;
    color: ${subColor.colorRed};
    font-weight: 500;
    line-height: 1;
  }
`;
// Diary
export const DiaryWriteFir = styled.div`
  margin-bottom: 30px;
  &:last-of-type {
    margin-bottom: 0;
  }
  .ant-form-item {
    width: 100%;
    .ant-form-item-control-input {
      input.ant-input {
        height: ${height.inputHeight};
        padding: 0 15px;
        border-radius: 10px;
        &::placeholder {
          font-size: 1.4rem;
          margin: 0;
          color: #25352880;
        }
      }
    }
  }
  .ant-upload-list {
    margin-bottom: -8px;
    .ant-upload,
    .ant-upload-list-item {
      background: ${subColor.colorWhite};
      border-radius: 10px;
    }
  }
  textarea.ant-input {
    resize: none;
    min-height: 20vh;
    height: 100%;
    padding: 12px 15px;
    line-height: 1.5;
    border-radius: 10px;
    &::placeholder {
      color: ${subColor.colorGrayBold};
    }
  }
`;
export const DiaryWriteTxt = styled.div`
  margin-bottom: 10px;
  font-weight: 700;
  font-size: 1.6rem;
  p {
    font-size: 1.3rem;
    color: ${subColor.colorRed};
    font-weight: 500;
    line-height: 1;
  }
`;
