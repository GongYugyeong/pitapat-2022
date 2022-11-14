import React, { useEffect, useState } from "react";
import * as Scroll from "react-scroll";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

function Header(props) {
  const [menu, setMenu] = useState(props.menu);
  const [menuShow, setMenuShow] = useState(false);

  function menuOpen(event) {
    const gnb = document.getElementById("gnb");
    //setMenuShow((prev) => !prev);

    if (menuShow === true) {
      setMenuShow(false);
      event.target.classList.remove("active");
    } else {
      setMenuShow(true);
      event.target.classList.add("active");
    }
    console.log(event.target);
    return menuShow;
  }

  return (
    <div id="header">
      <div className="headerWrap">
        <a className="logo">
          <img src="./assets/images/p_logo_w.png" alt="PITAPAT" />
        </a>
        <div className="">
          <a
            href="./assets/pdf/pitapat-v2.5.pdf"
            className="brochure pretendard"
            target="_blank"
          >
            Brochure
          </a>
          <a className="menuBtn" onClick={menuOpen}>
            <span className="line_1"></span>
            <span className="line_2"></span>
            <span className="line_3"></span>
          </a>
        </div>
      </div>
      <div id="gnb" className="gnb">
        <ul>
          {menu.map(function (item, index) {
            return (
              <li
                className={"menu_" + (index + 1) + " menu"}
                key={(index+1)}
              >
                <Link
                  activeClass="active"
                  className="menu_link"
                  to={"section" + (index + 1)}
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  {item}
                </Link>
              </li>
            );
          })}
        </ul>
        <a
          href="./assets/pdf/pitapat-v2.5.pdf"
          target="_blank"
          className="downBtn"
        >
          <span className="pretendard">회사소개서 다운로드</span>
          <img className="wh" src="./assets/images/down_icon_w.png" alt="" />
          {/* <img className="gr" src="./assets/images/down_icon_g.png" alt="" /> */}
        </a>
      </div>
    </div>
  );
}

export default Header;
