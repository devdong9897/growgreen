import React, { useState } from "react";
import { TodoWriteTxt, TodoWriteFir, MyPlantWtP } from "../style/WriteLayout";
import { Input, Form, ConfigProvider, Upload, Modal } from "antd";
import { mainColor } from "../style/GlobalStyle";
import { PageBtnWrap } from "../style/Components";
import { Link } from "react-router-dom";
import { PlusOutlined } from "@ant-design/icons";

const DiaryWrite = () => {
  // 이미지 첨부
  const getBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFileList] = useState([]);

  const handleCancel = () => setPreviewOpen(false);

  const handleChange = ({ fileList }) => {
    if (fileList.length > 5) {
      fileList = fileList.slice(0, 5); // 최대 5개의 파일만 유지
    }
    setFileList(fileList);
  };

  const handleRemove = (file) => {
    const newFileList = fileList.filter((item) => item.uid !== file.uid);
    setFileList(newFileList);
  };

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>사진 업로드</div>
    </div>
  );

  // 메모
  const [value, setValue] = useState("");
  const { TextArea } = Input;
  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: mainColor.colorGreenRegular,
          },
        }}
      >
        <TodoWriteFir className="name">
          <TodoWriteTxt>일기 제목</TodoWriteTxt>
          <Form.Item>
            <Input
              placeholder="제목을 입력해 주세요."
              className="custom-input"
              style={{
                fontSize: "1.3rem",
                fontWeight: "700",
                padding: "13px 0 13px 15px",
                borderRadius: "10px",
              }}
            />
          </Form.Item>
        </TodoWriteFir>

        <TodoWriteFir className="img">
          <TodoWriteTxt>사진 첨부</TodoWriteTxt>
          <MyPlantWtP>
            * 최대 5MB의 이미지 확장자 파일(.jpeg, .png, .gif)만 업로드 가능합니다.
          </MyPlantWtP>
          <Upload
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            listType="picture-card"
            fileList={fileList}
            onChange={handleChange}
            maxCount={5}
            onRemove={handleRemove}
            onPreview={() => false} // 이미지 미리보기 비활성화
            style={{ background: "white" }}
            showPreviewIcon={false}
          >
            {fileList.length < 5 && uploadButton}
          </Upload>
          <Modal
            open={previewOpen}
            title={previewTitle}
            footer={null}
            onCancel={handleCancel}
          >
            <img
              alt="example"
              style={{ width: "100%" }}
              src={previewImage}
            />
          </Modal>
        </TodoWriteFir>
        <TodoWriteTxt>일기 작성</TodoWriteTxt>
        <TextArea
          placeholder="일기 내용을 작성해 주세요."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          style={{ width: "100%", paddingBottom: "148px", paddingTop: "15px" }}
        />
        <PageBtnWrap>
          <li>
            <Link to="/">확인</Link>
          </li>
          <li>
            <button>취소</button>
          </li>
        </PageBtnWrap>
      </ConfigProvider>
    </>
  );
};

export default DiaryWrite;
