import React from "react";
import { Link } from "react-router-dom";
import { HeaderNavWrap } from "../style/Components";

const HeaderNav = () => {
  return (
    <HeaderNavWrap>
      <div>
        <button>x</button>
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/">my plant</Link>
          </li>
          <li>
            <Link to="/">my todo</Link>
          </li>
          <li>
            <Link to="/">diary</Link>
          </li>
        </ul>
      </div>
    </HeaderNavWrap>
  );
};

export default HeaderNav;
