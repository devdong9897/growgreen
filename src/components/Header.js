import React from "react";
import { Link } from "react-router-dom";

import { Inner, HeaderWrap, HeaderInnerWrap } from "../style/Components";

const Header = () => {
  return (
    <>
      <HeaderWrap>
        <Inner>
          <HeaderInnerWrap>
            <h1>
              <Link to="/">
                <img src="https://via.placeholder.com/59x36" alt="로고" />
              </Link>
            </h1>
            <button>
              <img src="https://via.placeholder.com/32x32" alt="메뉴펼치기" />
            </button>
          </HeaderInnerWrap>
        </Inner>
      </HeaderWrap>
    </>
  );
};

export default Header;
