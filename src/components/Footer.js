import React from "react";
import { FooterWrap } from "../style/Components";

const Footer = () => {
  return (
    <FooterWrap>
      <ul>
        <li>
          <img
            src={`${process.env.PUBLIC_URL}/images/footer_img.png`}
            alt="푸터로고"
          />
          Team. 너 E팀이야
        </li>
        <li>
          Front-end
          <ol>
            <li>
              <a
                href="https://github.com/devdong9897"
                target="_blank"
                rel="noopener noreferrer"
              >
                남동욱
              </a>
            </li>
            <li>
              <a
                href="https://github.com/kimaydev"
                target="_blank"
                rel="noopener noreferrer"
              >
                김아영
              </a>
            </li>
          </ol>
        </li>
        <li>
          Back-end
          <ol>
            <li>
              <a
                href="https://github.com/worud150"
                target="_blank"
                rel="noopener noreferrer"
              >
                김재경
              </a>
            </li>
            <li>
              <a
                href="https://github.com/sybbb1111"
                target="_blank"
                rel="noopener noreferrer"
              >
                배서윤
              </a>
            </li>
            <li>
              <a
                href="https://github.com/renew23228"
                target="_blank"
                rel="noopener noreferrer"
              >
                최우기
              </a>
            </li>
          </ol>
        </li>
      </ul>
    </FooterWrap>
  );
};

export default Footer;
