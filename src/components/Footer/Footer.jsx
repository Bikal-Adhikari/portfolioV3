import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Github from "@iconscout/react-unicons/icons/uil-github";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="wave" style={{ width: "100%" }} />
      <div className="f-content">
        <span>bikaladhikari5@gmail.com</span>
        <div className="f-icons">
          <Linkedin color="white" size="3rem" />
          <Github color="white" size="3rem" />
          <Insta color="white" size="3rem" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
