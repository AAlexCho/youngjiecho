import React from "react";
import myPhoto from "../../../assets/youngjiecho.png";
import "./AboutMe.scss";
import QAtext from "../../../constants/QAtext";
import github from "../../../assets/github.png";
import linkedin from "../../../assets/linkedin.png";
import gmail from "../../../assets/gmail.png";
import resume from "../../../assets/resume.png";
import Resume from "../../../assets/YoungJieChoResume.docx";

const AboutMe = (props) => {
  return (
    <div id="AboutMe" className="aboutMe">
      <div
        id="AboutMe"
        className={props.isDarkMode ? "aboutMeTextNight" : "aboutMeTextDay"}
      >
        <div className="aboutMeTitle">
          <div className="aboutMeTitle1">
            Hi all
            <span role="img" aria-label="waving hand">
              👋
            </span>
          </div>
          <div className="aboutMeTitle2">I'm Youngjie!</div>
        </div>
        <div className="aboutMeQASection">
          {QAtext.map((qa) => (
            <div className="aboutMeQA">
              <div className="aboutMeQ">Q.{qa.question}</div>
              <div className="aboutMeA">A.{qa.answer}</div>
            </div>
          ))}
        </div>
        <div className="aboutMeIconSection">
          <a href={Resume} download className="contactIcon">
            <img src={resume} alt="" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/youngjie-cho"
            className="aboutMeIcon"
          >
            <img src={github} alt="" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:youngjie.cho@gmail.com"
            className="aboutMeIcon"
          >
            <img src={gmail} alt="" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/young-jie-cho/"
            className="aboutMeIcon"
          >
            <img src={linkedin} alt="" />
          </a>
        </div>
      </div>
      <div className="aboutMePhoto">
        <img src={myPhoto} alt="" />
      </div>
    </div>
  );
};
export default AboutMe;
