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
          <a href="https://www.linkedin.com/in/bikal-adhikari/" target="_blank">
            <Linkedin color="white" size="3rem" />
          </a>
          <a href="https://github.com/Bikal-Adhikari" target="_blank">
            <Github color="white" size="3rem" />
          </a>
          <a href="https://www.instagram.com/bikaladhikari__/" target="_blank">
            <Insta color="white" size="3rem" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
