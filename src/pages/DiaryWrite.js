import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postDiary } from "../api/patchdiary";
import { DiaryWriteFir, DiaryWriteTxt } from "../style/WriteLayout";
import { Input, Form, ConfigProvider, Upload, Modal } from "antd";
import { mainColor } from "../style/GlobalStyle";
import { PageBtnWrap } from "../style/Components";
import { PlusOutlined } from "@ant-design/icons";

const DiaryWrite = () => {
  const { TextArea } = Input;
  // 화면이동
  const navigate = useNavigate();
  // 이미지 업로드
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

  const handleCancel = () => setPreviewOpen(false);
  // 이미지 업로드 핸들러
  const handleImgUpload = ({ fileList }) => {
    if (fileList.length > 5) {
      fileList = fileList.slice(0, 5); // 최대 5개의 파일만 유지
    }
    setFileList(fileList);
  };
  // 이미지 삭제 핸들러
  const handleImgRemove = file => {
    const newFileList = fileList.filter(item => item.uid !== file.uid);
    setFileList(newFileList);
  };
  // 이미지 업로드 버튼 디자인
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div>사진 업로드</div>
    </div>
  );
  // 다중 이미지 업로드 state
  const [fileList, setFileList] = useState([]);
  // 일기작성 state
  const [ctnt, setCtnt] = useState("");

  // 일기 제목 미작성시 에러 처리
  const [titleErrors, setTitleErrors] = useState("");
  // 이미지 미첨부시 에러 처리
  const [picErrors, setPicErrors] = useState("");
  // 일기 내용 미작성시 에러 처리
  const [ctntErrors, setCtntErrors] = useState("");
  // 글 작성 후 확인 버튼 클릭(diary POST)
  const onFinish = values => {
    // 일기 제목이 입력되지 않았을 때 에러 처리
    if (values.title === undefined || values.title === "") {
      setTitleErrors("* 일기 제목을 입력해주세요.");
      return;
    }
    // 이미지 미첨부 시 에러 처리
    if (fileList.length === 0) {
      setPicErrors("* 사진을 첨부해주세요.");
    }
    // 일기 내용 미작성 시 에러 처리
    if (values.ctnt === undefined || values.ctnt === "") {
      setCtntErrors("* 일기 내용을 입력해주세요.");
      return;
    }
    // console.log("values : ", values);
    console.log("파일업로드", fileList);
    // dto 데이터
    const dto = {
      title: values.title,
      ctnt: values.ctnt,
    };
    // console.log("dto", dto);
    // 이미지 업로드
    const formData = new FormData();
    fileList.map(item => {
      formData.append("pics", item?.originFileObj);
    });
    // formData.append("pics", fileList?.originFileObj);
    // formData.append("dto", JSON.stringify(dto));
    formData.append(
      "dto", //data pk명
      new Blob([JSON.stringify(dto)], {
        type: "application/json",
      }),
    );
    postDiary(formData);
    navigate("/diarylist");
  };
  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };
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
        <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
          {/* 일기 제목 section */}
          <DiaryWriteFir>
            <DiaryWriteTxt>
              일기 제목
              {/* 일기 제목 미입력 시 에러메세지 출력 */}
              {titleErrors && <p>{titleErrors}</p>}
            </DiaryWriteTxt>
            <Form.Item name="title">
              <Input placeholder="제목을 입력해 주세요." />
            </Form.Item>
          </DiaryWriteFir>
          {/* 사진 첨부 section */}
          <DiaryWriteFir>
            <DiaryWriteTxt>
              사진 첨부
              {/* 일기 제목 미입력 시 에러메세지 출력 */}
              {picErrors && <p>{picErrors}</p>}
              <p>
                * 최대 5MB의 이미지 확장자 파일(.jpeg, .png, .gif)만 업로드
                가능합니다.
              </p>
            </DiaryWriteTxt>
            <Form.Item>
              <Upload
                // 이미지 업로드할 경로
                // action="http://localhost:3000/todo"
                listType="picture-card"
                fileList={fileList}
                maxCount={5}
                onChange={handleImgUpload}
                onRemove={handleImgRemove}
                onPreview={() => false} // 이미지 미리보기 비활성화
                showPreviewIcon={false}
              >
                {fileList.length < 5 && uploadButton}
              </Upload>
            </Form.Item>
            <Modal
              open={previewOpen}
              title={previewTitle}
              footer={null}
              onCancel={handleCancel}
            >
              <img alt="example" style={{ width: "100%" }} src={previewImage} />
            </Modal>
          </DiaryWriteFir>
          <DiaryWriteFir>
            {/* 일기 작성 section */}
            <DiaryWriteTxt>
              일기 작성
              {/* 일기 내용 미입력 시 에러메세지 출력 */}
              {ctntErrors && <p>{ctntErrors}</p>}
            </DiaryWriteTxt>
            <Form.Item name="ctnt">
              <TextArea
                placeholder="일기 내용을 작성해 주세요."
                value={ctnt}
                onChange={e => setCtnt(e.target.value)}
              />
            </Form.Item>
          </DiaryWriteFir>
          {/* 확인, 취소 버튼 section */}
          <PageBtnWrap>
            <li>
              <button type="submit">확인</button>
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
