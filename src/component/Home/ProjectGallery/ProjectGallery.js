import React from "react";
import "./ProjectGallery.scss";
import ProjectData from "../../../constants/ProjectData";
import ReactHoverObserver from "react-hover-observer";
import ProjectElement from "./ProjectElement";
import Resume from "../../../assets/AlexCho-Resume.pdf";

const ProjectGallery = (props) => {
  return (
    <div
      id="Projects"
      className={
        props.mode === "dark" ? "projectGalleryNight" : "projectGalleryDay"
      }
    >
      <div className="titleSection">
        <div className={props.mode === "dark" ? "titleNight" : "titleDay"}>
          Projects
        </div>
      </div>
      <div className="projectSection">
        {ProjectData.map((project, index) =>
          index < ProjectData.length - 1 ? (
            <ReactHoverObserver key={index}>
              {({ isHovering }) => (
                <ProjectElement
                  isHovered={isHovering}
                  img={project.img}
                  title={project.title}
                  toProject={index}
                />
              )}
            </ReactHoverObserver>
          ) : (
            <a href={Resume} download key={index}>
              <img
                className="overlayedImage"
                src={project.img}
                alt=""
                style={{ cursor: "pointer", margin: "10px" }}
              />
            </a>
          )
        )}
      </div>
    </div>
  );
};
export default ProjectGallery;
