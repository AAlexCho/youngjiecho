import React from "react";
import contactMe from "../../../assets/contactMe.png";
import "./Contact.scss";
import github from "../../../assets/github.png";
import linkedin from "../../../assets/linkedin.png";
import gmail from "../../../assets/gmail.png";
import resume from "../../../assets/resume.png";
import Resume from "../../../assets/YoungJieChoResume.docx";

const Contact = (props) => {
  return (
    <div id="Contact" className="contact">
      <div className="titleSection">
        <div className={props.mode === "dark" ? "titleNight" : "titleDay"}>
          Let's Chat!
        </div>
      </div>
      <div className="contactImage">
        <img src={contactMe} alt="" />
      </div>
      <div className="contactIconSection">
        <a href={Resume} download className="contactIcon">
          <img src={resume} alt="" />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/young-jie-cho/"
          className="contactIcon"
        >
          <img src={linkedin} alt="" />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:youngjie.cho@gmail.com"
          className="contactIcon"
        >
          <img src={gmail} alt="" />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/youngjie-cho"
          className="contactIcon"
        >
          <img src={github} alt="" />
        </a>
      </div>
    </div>
  );
};
export default Contact;
