import React from "react";
import { Outlet } from "react-router-dom";

import Header from "./components/Header";

const Layout = () => {
  return (
    <div className="wrap">
      {/* 헤더 */}
      <Header />
      {/* 컨텐츠 시작 */}
      <div className="contents">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
