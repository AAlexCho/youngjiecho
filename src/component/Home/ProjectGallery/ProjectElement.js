import React from "react";
import "./ProjectGallery.scss";
import { Link } from "react-router-dom";
import magnifyingGlass from "../../../assets/magnifyingGlass.png";

const ProjectElement = (props) => {
  return (
    <div className="projectElement">
      <Link to={"/projects/" + props.toProject}>
        <img className="overlayedImage" src={props.img} alt="" />
        {props.isHovered ? (
          <div className="overlay">
            <p>{props.title}</p>
            <img src={magnifyingGlass} alt="" />
          </div>
        ) : null}
      </Link>
    </div>
  );
};

export default ProjectElement;
