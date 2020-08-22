import React from "react";
import "./Project.scss";
import NavBar from "../NavBar/NavBar";
import ProjectPage from "./ProjectPage/ProjectPage";
import Footer from "../Footer/Footer";

const Project = (props) => {
  return (
    <div className={props.mode === "dark" ? "homeNight" : "homeDay"}>
      <NavBar
        currentPage={"project"}
        mode={props.mode}
        toggleMode={props.toggleMode}
      />
      <ProjectPage mode={props.mode} projectId={parseInt(props.id)} />
      <Footer />
    </div>
  );
};
export default Project;
