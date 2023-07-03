import styled from "@emotion/styled";
import { subColor, height, borderColor } from "./GlobalStyle";

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
      .ant-picker {
        height: ${height.inputHeight};
        padding: 0 15px;
        border-radius: 10px;
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
export const TodoWriteTxt = styled.div`
  margin-bottom: 10px;
  font-weight: 700;
  font-size: 1.6rem;
`;

export const MyPlantWtP = styled.p`
  font-size: 12px;
  font-weight: 400;
  margin-bottom: 15px;
  color: ${subColor.colorRed};
`;
