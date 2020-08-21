import React from "react";
import "./Project.scss";
import ProjectData from "../../constants/ProjectData";

const Project = (props) => {
  const data = ProjectData[parseInt(props.id)];
  console.log(props.id);
  return (
    <div>
      <div>{data.title}</div>
    </div>
  );
};
export default Project;
