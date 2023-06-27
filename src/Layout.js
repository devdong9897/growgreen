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
  } else {
    pageBgc = { backgroundColor: subColor.colorGray };
  }

  return (
    <ThemeProvider theme={pageBgc}>
      <Wrap>
        {/* 헤더 */}
        <Header />
        {/* 컨텐츠 시작 */}
        <Contents>
          <Inner>
            <Outlet />
          </Inner>
        </Contents>
        {/* 컨텐츠 끝 */}
      </Wrap>
    </ThemeProvider>
  );
};

export default Layout;
