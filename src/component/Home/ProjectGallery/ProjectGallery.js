import React from "react";
import "./ProjectGallery.scss";
import ProjectData from "../../../constants/ProjectData";
import ReactHoverObserver from "react-hover-observer";
import ProjectElement from "./ProjectElement";

const ProjectGallery = (props) => {
  return (
    <div
      id="Projects"
      className={props.isDarkMode ? "projectGalleryNight" : "projectGalleryDay"}
    >
      <div className="titleSection">
        <div className={props.isDarkMode ? "titleNight" : "titleDay"}>
          Projects
        </div>
      </div>
      <div className="projectSection">
        {ProjectData.map((project, index) => (
          <ReactHoverObserver>
            {({ isHovering }) => (
              <ProjectElement
                isHovered={isHovering}
                img={project.img}
                title={project.title}
                toProject={index}
              />
            )}
          </ReactHoverObserver>
        ))}
      </div>
    </div>
  );
};
export default ProjectGallery;
