import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseChimney,
  faLeaf,
  faCalendarCheck,
  faBook,
} from "@fortawesome/free-solid-svg-icons";
import { QuickMenuWrap } from "../style/Components";

const QuickMenu = ({ paramToday }) => {
  return (
    <QuickMenuWrap>
      <li>
        <Link to="/">
          <i>
            <FontAwesomeIcon icon={faHouseChimney} />
          </i>
          home
        </Link>
      </li>
      <li>
        <Link to="/myplantlist">
          <i>
            <FontAwesomeIcon icon={faLeaf} />
          </i>
          my plant
        </Link>
      </li>
      <li>
        <Link to="/todolist">
          <i>
            <FontAwesomeIcon icon={faCalendarCheck} />
          </i>
          my todo
        </Link>
      </li>
      <li>
        <Link to="/diary">
          <i>
            <FontAwesomeIcon icon={faBook} />
          </i>
          diary
        </Link>
      </li>
    </QuickMenuWrap>
  );
};

export default QuickMenu;
