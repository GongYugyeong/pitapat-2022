import React from "react";
import WorkList from "../works/WorkList"

function Section_01() {
  return (
    <div id="sec01" className="section1 section">
      <div className="cont_wrap">
        <div className="textBox">
          <p className="subText">OUR SERVICES</p>
          <ul>
            <li>DEVELOPMENT</li>
            <li>PUBLISHING</li>
            <li>DESIGN</li>
            <li>MARKETING</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function Section_02() {
  return (
    <div id="sec02" className="section2 section">
      <div className="cont_wrap">
        <WorkList />
      </div>
    </div>
  );
}

function Section_03(){
  return (
    <div id="sec03" className="section3 section">
      <div className="bg"></div>
      <div className="cont_wrap">
        <div className="top_cont">
          <p>피터패트와 함께한 다양한 프로젝트들을 만나보세요.</p>
          <a href="./works.html" className="go_work_btn">
            <span className="text">ALL PROJECTS</span>
            <span className="arr"></span>
            <span className="under"></span>
          </a>
        </div>
      </div>
      <div className="bottom_cont">
        <div className="title_box">
          <p className="main_s_text">JOIN OUR TEAM!</p>
          <p className="main_title pretendard">피터패트는 열정을 가진 인재들을<br />언제나 환영합니다.</p>
          <a href="./career.html" className="go_career_btn pretendard hover_motion">지원하기</a>
        </div>
      </div>
    </div>
  )
}

function Main() {
  return (
    <div className="container">
      <div id="main" className="main section">
        <div className="dim"></div>
        <div className="bg_video">
          <div className="videoBox">
            <video loop="true" muted="true" autoplay="true" preload="auto">
              <source src="./assets/images/EBIZVILLE_kvmovie.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="titleBox cont_wrap">
            <p>WE’RE</p>
            <div className="tiping_title">
              <span className="door d_l">[</span>
              <p>
                <span className="typing">DEVELOPERS;</span>
                <span className="typed-cursor">|</span>
                <span className="typing_text"></span>
              </p>
              <span className="door d_r">]</span>
            </div>
          </div>
        </div>
      </div>
      <Section_01 />
      <Section_02 />
      <Section_03 />
    </div>
  );
}

export default Main;
