import React from "react";
import { Outlet } from "react-router-dom";

import Header from "./components/Header";
import { Contents, Inner } from "./style/Components";

const Layout = () => {
  return (
    <div className="wrap">
      {/* 헤더 */}
      <Header />
      {/* 컨텐츠 시작 */}
      <Contents>
        <Inner>
          <Outlet />
        </Inner>
      </Contents>
      {/* 컨텐츠 끝 */}
    </div>
  );
};

export default Layout;
