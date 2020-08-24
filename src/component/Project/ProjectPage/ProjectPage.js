import React from "react";
import ProjectData from "../../../constants/ProjectData";
import "./ProjectPage.scss";

const ProjectPage = (props) => {
  const data = ProjectData[props.projectId];
  return (
    <div className="projectPage">
      <div className="projectPagePhoto">
        <img src={data.img} alt="" />
      </div>
      <div
        className={
          props.mode === "dark" ? "projectPageTextNight" : "projectPageTextDay"
        }
      >
        <div className="projectPageTitleSection">
          <div className="projectPageTitle">{data.title}</div>
          <div className="projectPageSmallTitle">
            <div>{data.date}</div>
            <div>|</div>
            <div>{data.location}</div>
          </div>
          <div className="projectPageSmallTitle">
            {data.keyWords.join(" / ")}
          </div>
        </div>

        <div className="projectPageDesc">
          <ul>
            {data.explanations.map((desc) => (
              <li>{desc}</li>
            ))}
          </ul>
        </div>
        <div className="projectPageLinks">
          {Object.entries(data.links).map(([key, value]) => (
            <a target="_blank" rel="noopener noreferrer" href={value}>
              {
                <div className="projectPageButton">
                  <div>{key}</div>
                </div>
              }
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ProjectPage;
