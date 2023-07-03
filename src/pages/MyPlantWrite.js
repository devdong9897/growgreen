import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import { PlusOutlined } from "@ant-design/icons";
import moment from "moment/moment";
import { ConfigProvider, Form, Input, DatePicker, Upload, Modal } from "antd";
import {
  MyPlantWriteFir,
  MyPlantWriteTxt,
  TodoWriteTxt,
} from "../style/WriteLayout";
import { mainColor } from "../style/GlobalStyle";
import { PageBtnWrap } from "../style/Components";

const MyPlantWrite = () => {
  // 날짜 선택에 오늘 날짜 표시
  const [nowDate, setNowDate] = useState(new Date());
  const nowFormatDate = moment(nowDate).format("YYYY-MM-DD");
  // 데려온 날짜
  const dateFormat = "YYYY-MM-DD";

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
    navigate("/myplantlist");
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
        <Form>
          {/* 식물 종류 */}
          <MyPlantWriteFir>
            <MyPlantWriteTxt>식물 종류</MyPlantWriteTxt>
            <Form.Item>
              <Input placeholder="키우는 반려 식물 종류를 작성해주세요." />
            </Form.Item>
          </MyPlantWriteFir>
          {/* 식물 애칭 */}
          <MyPlantWriteFir>
            <MyPlantWriteTxt>식물 애칭</MyPlantWriteTxt>
            <Form.Item>
              <Input placeholder="반려 식물의 애칭을 작성해 주세요." />
            </Form.Item>
          </MyPlantWriteFir>
          {/* 데려온 날짜 */}
          <MyPlantWriteFir>
            <MyPlantWriteTxt>데려온 날짜</MyPlantWriteTxt>
            <DatePicker defaultValue={dayjs(nowFormatDate, dateFormat)} />
          </MyPlantWriteFir>
          {/* 식물 사진 */}
          <MyPlantWriteFir>
            <MyPlantWriteTxt>
              식물 사진
              <p>
                * 최대 5MB의 이미지 확장자 파일(.jpeg, .png, .gif)만 업로드
                가능합니다.
              </p>
            </MyPlantWriteTxt>
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
          </MyPlantWriteFir>
          {/* 메모 */}
          <MyPlantWriteFir>
            <MyPlantWriteTxt>메모</MyPlantWriteTxt>
            <TextArea
              value={value}
              onChange={e => setValue(e.target.value)}
              placeholder="메모를 입력해주세요."
            />
          </MyPlantWriteFir>
          {/* 확인, 취소 버튼 section */}
          <PageBtnWrap>
            <li>
              <button onClick={handleConfirm}>확인</button>
            </li>
            <li>
              <button onClick={handleConfirm}>취소</button>
            </li>
          </PageBtnWrap>
        </Form>
      </ConfigProvider>
    </>
  );
};

export default MyPlantWrite;
