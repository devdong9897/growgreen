import React, { useState, useEffect } from "react";
import {
  TodoWriteTxt,
  TodoWriteFir,
  MyPlantWtP,
  UploadDisabled,
} from "../style/WriteLayout";
import {
  Input,
  Form,
  DatePicker,
  Upload,
  Modal,
  ConfigProvider,
  message,
} from "antd";
import dayjs from "dayjs";
import { PlusOutlined } from "@ant-design/icons";
import { mainColor } from "../style/GlobalStyle";
import { PageBtnWrap } from "../style/Components";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { putPlants } from "../api/patchmyplant";

const MyPlantDetailEdit = () => {
  const dateFormat = "YYYY-MM-DD";
  const navigate = useNavigate();
  const { iplant } = useParams();

  // 미리 채워진 식물 데이터 저장
  const [preFilledData, setPreFilledData] = useState({});
  // 식물 이름 값을 저장
  const [nm, setNm] = useState("");
  // 식물 애칭 값을 저장
  const [nickNm, setNickNm] = useState("");
  // 메모 값을 저장
  const [memo, setMemo] = useState("");
  // 식물의 데려온 날짜 값을 저장
  const [onDate, setOnDate] = useState(null);
  // 식물의 이미지에 대한 업로드된 파일 목록을 저장
  const [fileList, setFileList] = useState([]);
  // 이미지의 미리보기 모달의 표시 상태 저장
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
      const dto = {
        iplant: iplant,
        nm: nm,
        nickNm: nickNm,
        ctnt: memo,
        onDate: onDate.format(dateFormat),
      };

      console.log(dto);

      // 이미지 업로드
      const formData = new FormData();


      formData.append(
        //data pk명
        "dto",
        new Blob([JSON.stringify(dto)], {
          type: "application/json",
        }),
      );

      putPlants(formData);
      // MyPlantList 페이지로 이동
      navigate("/myplantlist");
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

  const beforeUpload = file => {
    // 이미지가 수정되었을 경우에만 업로드를 허용
    if (fileList.length > 0) {
      message.error("이미지는 수정할 수 없습니다.");
      return false;
    }
    return true;
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
          <UploadDisabled>
            <Upload
              // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              listType="picture-card"
              fileList={fileList}
              onPreview={handlePreview}
              onChange={handleChange}
              // 이미지 업로드 disable 처리
              beforeUpload={beforeUpload}
              // 이미지 업로드 버튼 disable
              disabled={fileList.length > 0}
            >
              {fileList.length === 0 && uploadButton}
            </Upload>
          </UploadDisabled>
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
