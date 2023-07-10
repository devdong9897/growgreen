import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getDiaryDetail, putDiary } from "../api/patchdiary";
import {
  DiaryWriteFir,
  DiaryWriteTxt,
  UploadDisabled,
} from "../style/WriteLayout";
import { Input, Form, ConfigProvider, Upload, Modal } from "antd";
import { mainColor } from "../style/GlobalStyle";
import { PageBtnWrap } from "../style/Components";
import { PlusOutlined } from "@ant-design/icons";

const DiaryWrite = () => {
  const { TextArea } = Input;
  const [form] = Form.useForm();
  // idiary params 관리
  const paramIdiary = useParams().idiary;
  // 화면이동
  const navigate = useNavigate();
  // 다이어리 내용 state 관리
  // const [diaryDetailData, setDiaryDetailData] = useState(null);
  // 일기 제목 state
  const [diaryPutTitle, setDiaryPutTitle] = useState("");
  // 일기 작성 state
  const [ctnt, setCtnt] = useState("");
  // 다이어리 사진 state 관리
  const [diaryPhotoData, setDiaryPhotoData] = useState(null);
  // 이미지 업로드 state
  const [fileList, setFileList] = useState([]);
  // 다이어리 디테일 데이터 GET
  const getDiaryDetailData = async idiary => {
    try {
      // 다이어리 디테일 원본 데이터 전송
      const idiaryData = await getDiaryDetail(idiary);
      // 사진 데이터 (-> 전달되는 값 {}로 묶었을 때 undefinded 발생하는 이유 확인)
      let dataParse = idiaryData.pics.map(item => item);
      // Ant design Upload 컴포넌트 미리보기 화면 출력
      /*
				0. 글 작성 시 이미지 첨부하지 않고 글 작성 하면 POST가 안됨
				(-> 그래서 이미지 첨부하지 않으면 이미지 첨부해달라는 에러메세지 출력함)
				1. dataParse를 다시 map을 이용해서 새로운 객체로 반환하면 정상적으로 썸네일이 노출됨
				2. 하지만 이미지를 수정하지 않고 그대로 수정 시 400에러 발생
				3. 이미지를 삭제하고 다시 업로드하면 정상적으로 전송됨
				4. 새로운 객체로 만들지 않고 그대로 사용했을 때도 마찬가지로 400에러 발생
				5. 이미지 수정하지 않고 전송 시 fileList[0]?.originFileObj에 undefinded 출력됨
				6. 이미지 수정하지 않고 전송 시 에러메세지 출력 안됨
			*/
      //
      let uploadForm = dataParse.map(item => ({
        uid: `${paramIdiary}`,
        name: `${item}`,
        status: "done",
        url: `/imgs/diaryPics/${paramIdiary}/${item}`,
      }));
      // console.log(uploadForm);

      // 강제로 form 필드의 내용을 변경
      form.setFieldsValue({
        title: idiaryData.data.title,
        ctnt: idiaryData.data.ctnt,
      });
      // 일기 제목
      setDiaryPutTitle(idiaryData.data.title);
      // 사진 데이터
      // setDiaryPhotoData(dataParse);
      // 사진 데이터를 다시 객체로 변환하여 fileList에 담는다
      // setFileList(dataParse);
      setFileList(uploadForm);
      // 일기 작성
      setCtnt(idiaryData.data.ctnt);
      console.log("다이어리 디테일 데이터", idiaryData);
      console.log("다이어리 사진 데이터", dataParse);
      // console.log("객체로 변환", uploadForm);
    } catch (err) {
      console.log("다이어리 디테일 에러 : ", err);
    }
  };
  const getEditData = async () => {
    await getDiaryDetailData(paramIdiary);
  };
  // console.log("일기 제목", diaryPutTitle);
  // console.log("일기 사진", diaryPhotoData);
  // console.log("일기 사진", fileList);
  // console.log("일기 내용", ctnt);
  useEffect(() => {
    const fetchData = async () => {
      await getDiaryDetailData(paramIdiary);
    };
    getEditData();
    fetchData();
  }, [paramIdiary]);

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
  // 일기 제목 미작성시 에러 처리
  const [titleErrors, setTitleErrors] = useState("");
  // 일기 내용 미작성시 에러 처리
  const [ctntErrors, setCtntErrors] = useState("");
  // 글 작성 후 확인 버튼 클릭(diary POST)
  const onFinish = values => {
    // 일기 제목이 입력되지 않았을 때 에러 처리
    if (values.title === undefined || values.title === "") {
      setTitleErrors("* 일기 제목을 입력해주세요.");
      return;
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
      idiary: paramIdiary,
      title: values.title,
      ctnt: values.ctnt,
    };
    // console.log("dto", dto);
    // console.log("idiary", paramIdiary);

    // 이미지 업로드
    const formData = new FormData();
    fileList.map(item => {
      formData.append("pics", item?.originFileObj);
    });
    formData.append(
      "dto", //data pk명
      new Blob([JSON.stringify(dto)], {
        type: "application/json",
      }),
    );
    // console.log(formData);
    putDiary(formData);
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
        <Form form={form} onFinish={onFinish} onFinishFailed={onFinishFailed}>
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
              <p>
                * 최대 5MB의 이미지 확장자 파일(.jpeg, .png, .gif)만 업로드
                가능합니다.
              </p>
            </DiaryWriteTxt>
            <UploadDisabled>
              <Form.Item>
                <Upload
                  // 이미지 업로드할 경로
                  // action={`/imgs/diaryPics/${paramIdiary}`}
                  disabled={true}
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
            </UploadDisabled>
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
                // value={ctnt}
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
