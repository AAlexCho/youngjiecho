import React from "react";
import NavBar from "../NavBar/NavBar";
import AboutMe from "./AboutMe/AboutMe";
import ProjectGallery from "./ProjectGallery/ProjectGallery";
import Contact from "./Contact/Contact";
import Footer from "../Footer/Footer";
import "./Home.scss";

const Home = (props) => {
  return (
    <div className={props.mode === "dark" ? "homeNight" : "homeDay"}>
      <NavBar mode={props.mode} toggleMode={props.toggleMode} />
      <AboutMe mode={props.mode} />
      <ProjectGallery mode={props.mode} />
      <Contact mode={props.mode} />
      <Footer />
    </div>
  );
};

export default Home;
