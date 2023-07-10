import React, { useState, useEffect } from "react";
import { TodoWriteTxt, TodoWriteFir, MyPlantWtP } from "../style/WriteLayout";
import { Input, Form, DatePicker, Upload, Modal, ConfigProvider } from "antd";
import dayjs from "dayjs";
import { PlusOutlined } from "@ant-design/icons";
import { mainColor } from "../style/GlobalStyle";
import { PageBtnWrap } from "../style/Components";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const MyPlantDetailEdit = () => {
  const dateFormat = "YYYY/MM/DD";
  const navigate = useNavigate();
  const { iplant } = useParams();

  // 미리 채워진 식물 데이터 저장
  const [preFilledData, setPreFilledData] = useState({});
  //  식물 이름 값을 저장
  const [nm, setNm] = useState("");
  //  식물 애칭 값을 저장
  const [nickNm, setNickNm] = useState("");
  //  메모 값을 저장
  const [memo, setMemo] = useState("");
  //  식물의 데려온 날짜 값을 저장
  const [onDate, setOnDate] = useState(null);
  // 식물의 이미지에 대한 업로드된 파일 목록을 저장
  const [fileList, setFileList] = useState([]);
  //  이미지의 미리보기 모달의 표시 상태 저장
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  // 이미지의 제목을 저장
  const [previewTitle, setPreviewTitle] = useState("");

  useEffect(() => {
    const fetchDetailData = async () => {
      try {
        const res = await axios.get(`/api/plant/${iplant}`);
        const data = res.data;
        setPreFilledData(data);
        setNm(data.nm);
        setNickNm(data.nickNm);
        setMemo(data.ctnt);
        setOnDate(dayjs(data.onDate, dateFormat));

        // 이미지 미리 업로드
        if (data.plantPic) {
          setFileList([
            {
              uid: "-1",
              name: "image.png",
              status: "done",
              url: `/imgs/plant/${iplant}/${data.plantPic}`,
            },
          ]);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchDetailData();
  }, [iplant]);

  const getEditImg = file =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });

  const handleFormSubmit = async () => {
    try {
      const updatedData = {
        iplant: preFilledData.iplant,
        nm: nm,
        nickNm: nickNm,
        ctnt: memo,
        onDate: onDate.format(dateFormat),
      };

      await axios.put(`/api/plant`, updatedData);
      navigate("/myplantdetail");
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancel = () => {
    setFileList([]);
  };

  const handlePreview = async file => {
    if (!file.url && !file.preview) {
      file.preview = await getEditImg(file.originFileObj);
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

  // Ant design Upload 컴포넌트 미리보기 화면 출력
  /*
        0. 글 작성 시 이미지 첨부하지 않고 글 작성 하면 POST가 안됨
        (-> 그래서 이미지 첨부하지 않으면 이미지 첨부해달라는 에러메세지 출력함)
        1. 하지만 이미지를 수정하지 않고 그대로 수정 시 400에러 발생
        2. 이미지를 삭제하고 다시 업로드하면 정상적으로 전송됨
        3. 새로운 객체로 만들지 않고 그대로 사용했을 때도 마찬가지로 400에러 발생
        4. 이미지 수정하지 않고 전송 시 fileList[0]?.originFileObj에 undefinded 출력됨
        5. 이미지 수정하지 않고 전송 시 에러메세지 출력 안됨
      */

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
              value={nm}
              onChange={e => setNm(e.target.value)}
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
              value={nickNm}
              onChange={e => setNickNm(e.target.value)}
            />
          </Form.Item>
        </TodoWriteFir>

        <TodoWriteFir className="date">
          <TodoWriteTxt>데려온 날짜 수정</TodoWriteTxt>
          <DatePicker
            value={onDate}
            style={{ padding: "13px 15px 13px 15px", borderRadius: "10px" }}
            onChange={date => setOnDate(date)}
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
          <Input.TextArea
            placeholder="메모를 수정해주세요."
            value={memo}
            onChange={e => setMemo(e.target.value)}
            style={{ width: "100%", paddingBottom: "148px" }}
          />
        </TodoWriteFir>
      </ConfigProvider>

      <PageBtnWrap>
        <li>
          <button onClick={handleFormSubmit}>확인</button>
        </li>
        <li>
          <button onClick={() => navigate(`/myplantdetail/${iplant}`)}>
            취소
          </button>
        </li>
      </PageBtnWrap>
    </>
  );
};

export default MyPlantDetailEdit;
