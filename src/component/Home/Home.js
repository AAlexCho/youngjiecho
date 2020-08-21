import React from "react";
import NavBar from "../NavBar/NavBar";
import AboutMe from "./AboutMe/AboutMe";
import ProjectGallery from "./ProjectGallery/ProjectGallery";
import Skills from "./Skills/Skills";
import Contact from "./Contact/Contact";
import Footer from "../Footer/Footer";
import "./Home.scss";

const Home = (props) => {
  return (
    <div className={props.isDarkMode ? "homeNight" : "homeDay"}>
      <NavBar
        isDarkMode={props.isDarkMode}
        setIsDarkMode={props.setIsDarkMode}
      />
      <AboutMe isDarkMode={props.isDarkMode} />
      <ProjectGallery isDarkMode={props.isDarkMode} />
      <Skills isDarkMode={props.isDarkMode} />
      <Contact isDarkMode={props.isDarkMode} />
      <Footer />
    </div>
  );
};

export default Home;
