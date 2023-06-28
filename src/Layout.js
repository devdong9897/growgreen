import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { subColor } from "./style/GlobalStyle";
import { Wrap, Contents, Inner } from "./style/Components";

import Header from "./components/Header";

const Layout = () => {
  const location = useLocation();
  // pathname에 따라 Wrap의 배경 색상 동적으로 설정
  let pageBgc;
  if (location.pathname === "/diarylist") {
    pageBgc = { backgroundColor: subColor.colorWhite };
  } else if (location.pathname === "/diarydetail") {
    pageBgc = { backgroundColor: subColor.colorWhite };
  } else {
    pageBgc = { backgroundColor: subColor.colorGray };
  }
  return (
    <ThemeProvider theme={pageBgc}>
      <Wrap>
        {/* 헤더 */}
        <Header />
        {/* 컨텐츠 시작 */}
        <Contents
          style={
            location.pathname === "/diarydetail" ||
            location.pathname === "/myplantdetail"
              ? { padding: "0 0 2.5rem 0" }
              : { padding: "2.5rem 0" }
          }
        >
          {/* pathname에 따라 Inner의 가로 padding값 동적으로 설정 */}
          <Inner
            style={
              location.pathname === "/diarydetail" ||
              location.pathname === "/myplantdetail"
                ? { padding: "0" }
                : { padding: "0 2%" }
            }
          >
            <Outlet />
          </Inner>
        </Contents>
        {/* 컨텐츠 끝 */}
      </Wrap>
    </ThemeProvider>
  );
};

export default Layout;
