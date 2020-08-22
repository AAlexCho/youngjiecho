import React from "react";
import { Sticky } from "react-sticky";
import logo from "../../assets/Alex.png";
import { Link } from "react-router-dom";
import sun from "../../assets/sun.png";
import moon from "../../assets/moon.png";
import clickMe from "../../assets/clickMe.png";
import Resume from "../../assets/YoungJieChoResume.docx";
import "./NavBar.scss";

const NavBar = (props) => {
  const scrollToTheElement = (target) => {
    let targ = document.getElementById(target);
    if (targ === null || targ === undefined || targ === "") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top: targ.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };
  return (
    <Sticky>
      {({ style }) => (
        <div className="navBar" style={style}>
          <div className="toggle">
            <img
              className="toggleImg"
              src={props.mode === "dark" ? moon : sun}
              alt=""
              onClick={() => props.toggleMode()}
            />
            <img className="clickMe" src={clickMe} alt="" />
          </div>
          <div className="logo">
            {props.currentPage === "project" ? (
              <Link to="/">
                <img
                  onClick={() => scrollToTheElement("")}
                  src={logo}
                  alt=""
                ></img>
              </Link>
            ) : (
              <img
                onClick={() => scrollToTheElement("")}
                src={logo}
                alt=""
              ></img>
            )}
          </div>

          {props.currentPage === "project" ? (
            <div className="navLinks" />
          ) : (
            <div className="navLinks">
              <div className="navLink">
                <a href={Resume} download>
                  Resume
                </a>
              </div>
              <div className="navLink">
                <p onClick={() => scrollToTheElement("Projects")}>Projects</p>
              </div>
              <div className="navLink">
                <p onClick={() => scrollToTheElement("Contact")}>Contact</p>
              </div>
            </div>
          )}
        </div>
      )}
    </Sticky>
  );
};

export default NavBar;
