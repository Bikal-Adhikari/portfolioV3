import React from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";

const Intro = () => {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hy! I Am</span>
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
      <div className="i-right">I am right</div>
    </div>
  );
};

export default Intro;
