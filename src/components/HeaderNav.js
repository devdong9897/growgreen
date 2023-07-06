import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { HeaderNavWrap, NavButtonWrap, NavMenuWrap } from "../style/Components";

const HeaderNav = ({ navOpen, toggleNav, closeNav, paramToday }) => {
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
            <Link
              to="/"
              onClick={() => {
                closeNav("/");
              }}
            >
              home
            </Link>
          </li>
          <li>
            <Link
              to="/myplantlist"
              onClick={() => {
                closeNav("/myplantlist");
              }}
            >
              my plant
            </Link>
          </li>
          <li>
            <Link
              to="/todolist"
              onClick={() => {
                closeNav("/todolist");
              }}
            >
              my todo
            </Link>
          </li>
          <li>
            <Link
              to="/diary"
              onClick={() => {
                closeNav("/diary");
              }}
            >
              diary
            </Link>
          </li>
        </NavMenuWrap>
      </div>
    </HeaderNavWrap>
  );
};

export default HeaderNav;
