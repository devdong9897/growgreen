import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { subColor, height } from "./style/GlobalStyle";
import { Wrap, Contents, Inner } from "./style/Components";

import Header from "./components/Header";
import TodoMainHeader from "./components/TodoMainHeader";
import QuickMenu from "./components/QuickMenu";

const Layout = () => {
  const location = useLocation();
  // pathname에 따라 Wrap의 배경 색상 동적으로 설정
  let pageBgc;
  location.pathname === "/myplantdetail" ||
  location.pathname === "/diary/list" ||
  location.pathname === "/diary/detail"
    ? (pageBgc = { backgroundColor: subColor.colorWhite })
    : (pageBgc = { backgroundColor: subColor.colorGray });
  const WrapHeight =
    location.pathname === "/"
      ? {
          minHeight: `calc(100vh - ${height.todoMainHeaderHeight})`,
        }
      : { minHeight: `calc(100vh - ${height.headerHeight})` };
  /* pathname에 따라 Contents padding값 동적으로 설정 */
  const ContentsPadding =
    location.pathname === "/myplantdetail" ||
    location.pathname === "/diary/detail"
      ? { padding: "0 0 10rem" }
      : { padding: "2.5rem 0 10rem" };
  /* pathname에 따라 Contents margin-top값 동적으로 설정 */
  const ContentsMarginTop =
    location.pathname === "/"
      ? { marginTop: `${height.todoMainHeaderHeight}` }
      : { marginTop: `${height.headerHeight}` };
  /* pathname에 따라 Inner 가로 padding값 동적으로 설정 */
  const InnerPadding =
    location.pathname === "/diary/detail" ||
    location.pathname === "/myplantdetail"
      ? { padding: "0" }
      : { padding: "0 2%" };

  return (
    <ThemeProvider theme={pageBgc}>
      <Wrap style={WrapHeight}>
        {/* 헤더 */}
        {location.pathname === "/" ? <TodoMainHeader /> : <Header />}
        {/* 컨텐츠 시작 */}
        <Contents style={{ ...ContentsPadding, ...ContentsMarginTop }}>
          {/* pathname에 따라 Inner의 가로 padding값 동적으로 설정 */}
          <Inner style={InnerPadding}>
            <Outlet />
          </Inner>
        </Contents>
        {/* 컨텐츠 끝 */}
        <QuickMenu />
        {/* {location.pathname === "/" ? <QuickMenu /> : null} */}
      </Wrap>
    </ThemeProvider>
  );
};

export default Layout;
