import React from "react";
import "./Services.css";
import Heart from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";

const Services = () => {
  return (
    <div className="services">
      <div className="awesome">
        <span>My Awesome</span>
        <span>services</span>
        <span>
          I specialize in full-stack development services, encompassing
          front-end and back-end expertise,
          <br />
          database management, secure infrastructure deployment, and reliable
          ongoing support.
        </span>
        <button className="button s-button">Download CV</button>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      <div className="cards">
        <div style={{ left: "14rem" }}>
          <Card
            emoji={Heart}
            heading="Developer"
            detail="Html, CSS, JavaScript, ReactJs, NodeJs"
          />
        </div>
        <div style={{ top: "12rem", left: "-4rem" }}>
          <Card
            emoji={Glasses}
            heading="Design"
            detail="Figma, Canva, Photoshop, Adobe"
          />
        </div>
        <div style={{ top: "19rem", left: "12rem" }}>
          <Card
            emoji={Humble}
            heading="CI/CD"
            detail="Jenkins, Travis CI, GitLab CI, GitHub Actions"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
