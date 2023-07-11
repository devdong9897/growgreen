import React from "react";
// import { Wrap } from "../style/Components";
import { IntroWrap } from "../style/IntroLayout";
import { SyncLoader } from "react-spinners";
import { mainColor } from "../style/GlobalStyle";

const Intro = ({ loding }) => {
  return (
    <IntroWrap className={loding ? "active" : ""}>
      <div>
        <img
          src={`${process.env.PUBLIC_URL}/images/intro_logo.png`}
          alt="logo"
        />
      </div>
      <div>
        <SyncLoader
          color={mainColor.colorGreenRegular}
          margin={4}
          size={7}
          speedMultiplier={0.5}
        />
        <p>Team. 너 E팀이야</p>
      </div>
    </IntroWrap>
  );
};

export default Intro;
