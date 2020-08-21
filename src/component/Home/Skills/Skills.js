import React from "react";
import "./Skills.scss";

const Skills = (props) => {
  return (
    <div className="skills" id="Skills">
      <div className="titleSection">
        <div className={props.isDarkMode ? "titleNight" : "titleDay"}>
          Skills<span style={{ fontSize: "20px" }}>...and More!</span>
        </div>
      </div>
      <div className="skillsSection">
        <div className="skillElement"></div>
        <div className="skillElement"></div>
        <div className="skillElement"></div>
        <div className="skillElement"></div>
      </div>
    </div>
  );
};
export default Skills;
