import React from "react";
import myPhoto from "../../../assets/youngjiecho1.png";
import myPhoto2 from "../../../assets/youngjiecho2.png";
// This Random photos ... are actually pixelated images of myself! Surprise!

const RandomPhoto = (props) => {
  return (
    <div>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/young-jie-cho/"
      >
        <img src={props.isHovered ? myPhoto2 : myPhoto} alt="" />
      </a>
    </div>
  );
};

export default RandomPhoto;
