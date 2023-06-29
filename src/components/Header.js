import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Inner, HeaderWrap, HeaderInnerWrap } from "../style/Components";
import HeaderNav from "./HeaderNav";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const toggleNav = () => {
    setNavOpen(!navOpen);
  };
  return (
    <>
      {/* 네비게이션 메뉴 */}
      <HeaderNav navOpen={navOpen} toggleNav={toggleNav} />
      {/* 헤더 */}
      <HeaderWrap>
        <Inner>
          <HeaderInnerWrap>
            <h1>
              <Link to="/">
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
