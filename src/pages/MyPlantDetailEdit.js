import React, { useState } from "react";
import { TodoWriteTxt, TodoWriteFir, MyPlantWtP } from "../style/WriteLayout";
import { Input, Form, DatePicker, Upload, Modal, ConfigProvider } from "antd";
import dayjs from "dayjs";
import { PlusOutlined } from "@ant-design/icons";
import { mainColor } from "../style/GlobalStyle";
import { PageBtnWrap } from "../style/Components";
import { Link, useNavigate } from "react-router-dom";

const MyPlantDetailEdit = () => {
  const dateFormat = "YYYY/MM/DD";

  const navigate = useNavigate();

  // 사진 업로드
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

  const handleCancel = () => setPreviewOpen(false);
  const handlePreview = async file => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1),
    );
  };
  const handleChange = ({ fileList }) => setFileList(fileList.slice(-1));
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>사진 업로드</div>
    </div>
  );

  // 메모
  const [value, setValue] = useState("");
  const { TextArea } = Input;

  const handleConfirm = () => {
    navigate("/diarydetail");
  };

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
          <TodoWriteTxt>식물 종류 수정</TodoWriteTxt>
          <Form.Item>
            <Input
              placeholder="키우는 반려 식물 종류를 수정해주세요."
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

        <TodoWriteFir className="Nickname">
          <TodoWriteTxt>식물 애칭 수정</TodoWriteTxt>
          <Form.Item label="">
            <Input
              placeholder="반려 식물의 애칭을 수정해 주세요."
              style={{
                fontSize: "1.3rem",
                fontWeight: "700",
                padding: "13px 0 13px 15px",
                borderRadius: "10px",
              }}
            />
          </Form.Item>
        </TodoWriteFir>

        <TodoWriteFir className="date">
          <TodoWriteTxt>데려온 날짜 수정</TodoWriteTxt>
          <DatePicker
            defaultValue={dayjs("2023-06-28", dateFormat)}
            style={{ padding: "13px 15px 13px 15px", borderRadius: "10px" }}
          />
        </TodoWriteFir>

        <TodoWriteFir className="img">
          <TodoWriteTxt>식물 사진</TodoWriteTxt>
          <MyPlantWtP>
            * 최대 5MB의 이미지 확장자 파일(.jpeg, .png, .gif)만 업로드
            가능합니다.
          </MyPlantWtP>
          <Upload
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            listType="picture-card"
            fileList={fileList}
            onPreview={handlePreview}
            onChange={handleChange}
          >
            {fileList.length === 0 && uploadButton}
          </Upload>
          <Modal
            open={previewOpen}
            title={previewTitle}
            footer={null}
            onCancel={handleCancel}
          >
            <img alt="example" style={{ width: "100%" }} src={previewImage} />
          </Modal>
        </TodoWriteFir>

        <TodoWriteFir className="memo">
          <TodoWriteTxt>메모 수정</TodoWriteTxt>
          <TextArea
            placeholder="메모를 수정해주세요."
            value={value}
            onChange={e => setValue(e.target.value)}
            autoSize={{ minRows: 3, maxRows: 5 }}
            style={{ width: "100%", paddingBottom: "148px" }}
          />
        </TodoWriteFir>
      </ConfigProvider>

      <PageBtnWrap>
        <li>
          <button onClick={handleConfirm}>확인</button>
        </li>
        <li>
          <button onClick={() => navigate("/diarydetail")}>취소</button>
        </li>
      </PageBtnWrap>
    </>
  );
};

export default MyPlantDetailEdit;
