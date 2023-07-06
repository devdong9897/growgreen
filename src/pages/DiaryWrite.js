import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DiaryWriteFir, DiaryWriteTxt } from "../style/WriteLayout";
import { Input, Form, ConfigProvider, Upload, Modal } from "antd";
import { mainColor } from "../style/GlobalStyle";
import { PageBtnWrap } from "../style/Components";
import { PlusOutlined } from "@ant-design/icons";

const DiaryWrite = () => {
  const { TextArea } = Input;
  // 화면이동
  const navigate = useNavigate();
  // 이미지 첨부
  const getBase64 = file =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });

  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFileList] = useState([]);

  // const handleCancel = () => setPreviewOpen(false);

  const handleChange = ({ fileList }) => {
    if (fileList.length > 5) {
      fileList = fileList.slice(0, 5); // 최대 5개의 파일만 유지
    }
    setFileList(fileList);
  };
  const handleRemove = file => {
    const newFileList = fileList.filter(item => item.uid !== file.uid);
    setFileList(newFileList);
  };

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div>사진 업로드</div>
    </div>
  );

  // 메모
  const [value, setValue] = useState("");

  // 글 작성 후 확인 버튼 클릭(diary POST)
  const handleConfirm = () => {};
  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: mainColor.colorGreenRegular,
            fontFamily:
              '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif',
          },
        }}
      >
        <Form>
          {/* 일기 제목 section */}
          <DiaryWriteFir>
            <DiaryWriteTxt>일기 제목</DiaryWriteTxt>
            <Form.Item>
              <Input placeholder="제목을 입력해 주세요." />
            </Form.Item>
          </DiaryWriteFir>
          {/* 사진 첨부 section */}
          <DiaryWriteFir>
            <DiaryWriteTxt>
              사진 첨부
              <p>
                * 최대 5MB의 이미지 확장자 파일(.jpeg, .png, .gif)만 업로드
                가능합니다.
              </p>
            </DiaryWriteTxt>
            <Form.Item>
              <Upload
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                listType="picture-card"
                fileList={fileList}
                onChange={handleChange}
                maxCount={5}
                onRemove={handleRemove}
                onPreview={() => false} // 이미지 미리보기 비활성화
                showPreviewIcon={false}
              >
                {fileList.length < 5 && uploadButton}
              </Upload>
            </Form.Item>
            {/* <Modal
              open={previewOpen}
              title={previewTitle}
              footer={null}
              onCancel={handleCancel}
            >
              <img alt="example" style={{ width: "100%" }} src={previewImage} />
            </Modal> */}
          </DiaryWriteFir>
          <DiaryWriteFir>
            {/* 일기 작성 section */}
            <DiaryWriteTxt>일기 작성</DiaryWriteTxt>
            <Form.Item>
              <TextArea
                placeholder="일기 내용을 작성해 주세요."
                value={value}
                onChange={e => setValue(e.target.value)}
              />
            </Form.Item>
          </DiaryWriteFir>
          {/* 확인, 취소 버튼 section */}
          <PageBtnWrap>
            <li>
              {/* 버튼 클릭 시 해당 detail 페이지로 이동 필요 */}
              <button type="submit" onClick={() => handleConfirm()}>
                확인
              </button>
            </li>
            <li>
              <button type="submit" onClick={() => navigate("/diarylist")}>
                취소
              </button>
            </li>
          </PageBtnWrap>
        </Form>
      </ConfigProvider>
    </>
  );
};

export default DiaryWrite;
