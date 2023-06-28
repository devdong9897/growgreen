import React from "react";
import { Link } from "react-router-dom";

import { Inner, HeaderWrap, HeaderInnerWrap } from "../style/Components";
import HeaderNav from "./HeaderNav";

const Header = () => {
  return (
    <>
      {/* 버튼 클릭 시 나오는 메뉴 */}
      <HeaderNav />
      <HeaderWrap>
        <Inner>
          <HeaderInnerWrap>
            <h1>
              <Link to="/">
                <img src="/images/logo.svg" alt="로고" />
              </Link>
            </h1>
            <button>
              <img src="/images/icon_navbtn.svg" alt="메뉴펼치기" />
            </button>
          </HeaderInnerWrap>
        </Inner>
      </HeaderWrap>
    </>
  );
};

export default Header;
