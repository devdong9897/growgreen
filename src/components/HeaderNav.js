import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { HeaderNavWrap, NavButtonWrap, NavMenuWrap } from "../style/Components";

const HeaderNav = ({ navOpen, toggleNav }) => {
  return (
    <HeaderNavWrap className={navOpen ? "open" : ""}>
      <div>
        <NavButtonWrap>
          <button onClick={toggleNav}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </NavButtonWrap>
        <NavMenuWrap>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/myplantlist">my plant</Link>
          </li>
          <li>
            <Link to="/todolist">my todo</Link>
          </li>
          <li>
            <Link to="/diarylist">diary</Link>
          </li>
        </NavMenuWrap>
      </div>
    </HeaderNavWrap>
  );
};

export default HeaderNav;
