import React from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import Bikal from "../../img/Bikal3.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import glasses from "../../img/glassesimoji.png";
import { themeContext } from "../../Context";
import { useContext } from "react";

const Intro = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
          <span>Bikal Adhikari</span>
          <span>
            FullStack Software Engineer with high level of experience in both
            frontend and backend development, producing Quality work.
          </span>
        </div>
        <button className="button i-button">Hire Me</button>
        <div className="i-icons">
          <a href="https://github.com/Bikal-Adhikari" target="_blank">
            <img src={Github} alt="github" />
          </a>
          <a href="https://www.linkedin.com/in/bikal-adhikari/" target="_blank">
            <img src={LinkedIn} alt="linkedIn" />
          </a>
          <a href="https://www.instagram.com/bikaladhikari__/" target="_blank">
            <img src={Instagram} alt="instagram" />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="vector1" />
        <img src={Vector2} alt="vector2" />
        <img src={Bikal} alt="Bikal" />
        <img src={glasses} alt="glasses" />
        <div style={{ top: "-4%", left: "60%" }}>
          <FloatingDiv image={Crown} txt1="Software" txt2="Engineer" />
        </div>
        <div style={{ top: "18rem", left: "-5rem" }}>
          <FloatingDiv image={thumbup} txt1="Best Service" txt2="Award" />
        </div>
        <div className="blur" style={{ background: "rgb(238 210 255" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "20rem",
            width: "22rem",
            height: "14rem",
            left: "-20rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
