import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Inner, HeaderWrap, HeaderInnerWrap } from "../style/Components";
import HeaderNav from "./HeaderNav";

const Header = ({ paramToday }) => {
  // 네비게이션 메뉴 페이지 열고 닫히는 이벤트 설정
  const navigate = useNavigate();
  const [navOpen, setNavOpen] = useState(false);
  const toggleNav = () => {
    setNavOpen(!navOpen);
  };
  const closeNav = path => {
    setNavOpen(false);
    navigate(path);
  };

  return (
    <>
      {/* 네비게이션 메뉴 */}
      <HeaderNav
        navOpen={navOpen}
        toggleNav={toggleNav}
        closeNav={closeNav}
        paramToday={paramToday}
      />
      {/* 헤더 */}
      <HeaderWrap>
        <Inner>
          <HeaderInnerWrap>
            <h1>
              <Link to={`/${paramToday}`}>
                <img src="/images/logo.svg" alt="로고" />
              </Link>
            </h1>
            <button onClick={toggleNav}>
              <img src="/images/icon_navbtn.svg" alt="메뉴펼치기" />
            </button>
          </HeaderInnerWrap>
        </Inner>
      </HeaderWrap>
    </>
  );
};

export default Header;
