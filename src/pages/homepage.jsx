import React from "react";
import "./homepage.scss";
import Hero from "../components/hero/hero.component";
import { imgAbout1, imgAbout2 } from "../assets/img/images";
const HomePage = () => (
  <div>
    <Hero />

    <section className="section__about">
      <div className="about__content">
        <div className="about__content--text">
          <h1 className="title">
            Who <br /> We Are
          </h1>
          <p className="paragraph">
            {" "}
            We are a collaboration of emerging and iconic designers and makers.
            Each object was designed to bring quality and style to your everyday
            rituals.
          </p>
        </div>
        <div className="about__content--img img">
          <img src={imgAbout1} alt="" className="img-1" />
          <img src={imgAbout2} alt="" className="img-2" />
        </div>
      </div>
    </section>
  </div>
);

export default HomePage;
