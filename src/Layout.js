import React from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";
import moment from "moment/moment";

import { ThemeProvider } from "@emotion/react";
import { subColor, height } from "./style/GlobalStyle";
import { Wrap, Contents, Inner } from "./style/Components";

import Header from "./components/Header";
import TodoMainHeader from "./components/TodoMainHeader";
import QuickMenu from "./components/QuickMenu";

const Layout = () => {
  const location = useLocation();
  const paramIdiary = useParams().idiary;
  const { iplant } = useParams();
  // pathname에 따라 Wrap의 배경 색상 동적으로 설정
  // 오늘의 날짜 param으로 메인 페이지 이동
  const today = new Date();
  const paramToday = moment(today).format("YYYY-MM-DD");

  let pageBgc;
  location.pathname === `/myplantdetail/${iplant}` ||
  location.pathname === "/diarylist" ||
  location.pathname === `/diarydetail/${paramIdiary}`
    ? (pageBgc = { backgroundColor: subColor.colorWhite })
    : (pageBgc = { backgroundColor: subColor.colorGray });
  // const WrapHeight =
  //   location.pathname === "/"
  //     ? {
  //         minHeight: `calc(100vh - ${height.todoMainHeaderHeight})`,
  //       }
  //     : { minHeight: `calc(100vh - ${height.headerHeight})` };
  /* pathname에 따라 Contents padding값 동적으로 설정 */
  const ContentsPadding =
    location.pathname === `/myplantdetail/${iplant}` ||
    location.pathname === `/diarydetail/${paramIdiary}`
      ? { padding: "0 0 10rem" }
      : { padding: "2.5rem 0 10rem" };
  /* pathname에 따라 Contents margin-top값 동적으로 설정 */
  const ContentsMarginTop =
    location.pathname === "/"
      ? { marginTop: `${height.todoMainHeaderHeight}` }
      : { marginTop: `${height.headerHeight}` };
  /* pathname에 따라 Inner 가로 padding값 동적으로 설정 */
  const InnerPadding =
    location.pathname === `/myplantdetail/${iplant}` ||
    location.pathname === `/diarydetail/${paramIdiary}`
      ? { padding: "0", margin: "0" }
      : { padding: "0 1%", margin: "0 1%" };
  const test =
    location.pathname === "/"
      ? { height: "calc(100vh - 21rem)" }
      : { height: "calc(100vh - 18rem)" };
  return (
    <ThemeProvider theme={pageBgc}>
      {/* <Wrap style={WrapHeight}> */}
      <Wrap>
        {/* 헤더 */}
        {location.pathname === "/" ? (
          <TodoMainHeader paramToday={paramToday} />
        ) : (
          <Header paramToday={paramToday} />
        )}
        {/* 컨텐츠 시작 */}
        <Contents style={{ ...ContentsPadding, ...ContentsMarginTop }}>
          {/* pathname에 따라 Inner의 가로 padding값 동적으로 설정 */}
          <Inner style={{ ...InnerPadding, ...test }}>
            <Outlet />
          </Inner>
        </Contents>
        {/* 컨텐츠 끝 */}
        <QuickMenu paramToday={paramToday} />
      </Wrap>
    </ThemeProvider>
  );
};

export default Layout;
