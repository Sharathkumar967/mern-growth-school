import React from "react";
import "./HeroSection.scss";
import { Link } from "react-router-dom";
import heroImg from "../../assets/home-hero-img.png";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="content">
        <h1>Education Academy</h1>
        <p>
          The sky was cloudless and of a deep dark blue. The spectacle before us
          was indeed sublime.
        </p>
        <div className="btns">
          <Link to="/get-started" className="get-button cta">
            Get Started
          </Link>
          <Link to="/learn-more" className="learnMore-button cta">
            Learn More
          </Link>
        </div>
      </div>
      <div className="image">
        <img src={heroImg} alt="Hero-Image" />
      </div>
    </div>
  );
};

export default HeroSection;
