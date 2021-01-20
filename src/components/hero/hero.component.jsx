import React from "react";
import "./hero-section.styles.scss";
import { Link } from "react-router-dom";
import SlickSlider from "../slider/slider.component";

const Hero = () => {
  return (
    <div className="position-relative-wrap">
      <div className="hero">
        <div className="hero__container center-text">
          <h1>We are Celestial,</h1>
          <p className="hero__sub">
            we design and manufacture furniture fit for gods
          </p>
          <Link to="/collections" className="hero__cta">
            Discover Our Collections
          </Link>
        </div>

        <div className="hero__slider">
          <SlickSlider />
        </div>
      </div>
    </div>
  );
};

export default Hero;
