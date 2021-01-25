import React, { useEffect } from "react";
import "./homepage.scss";
import Hero from "../components/hero/hero.component";

import FormInput from "../components/form-input/form-input.component";
import { imgAbout1, imgAbout2, imgEthos1, imgEthos2 } from "../assets/assets";
import CollectionPreview from "../components/collections-preview/collections-preview.component";

import { ScrollTriggerAnimations } from "../js/animations";

import { VideoIsh } from "../assets/assets";
import { PlaySVG } from "../assets/assets";

const HomePage = () => {
  useEffect(() => {
    ScrollTriggerAnimations();
  });
  return (
    <React.Fragment>
      <Hero />

      <section className="section__about">
        <div className="about__content">
          <div className="about__content--text">
            <p className="title">Who We Are</p>
            <h2 className="title__sub">
              <span>True</span> furniture Masters
            </h2>
            <p className="paragraph">
              We are a collaboration of emerging and iconic designers and
              makers. Each object was designed to bring quality and style to
              your everyday rituals.
            </p>
          </div>

          <div className="about__content--img img">
            <img src={imgAbout1} alt="" className="img-1" />

            <div className="img-2__banner">
              <img src={imgAbout2} alt="" className="img-2" />
            </div>
          </div>
        </div>
      </section>
      <CollectionPreview />

      <section className="section__video">
        <img src={VideoIsh} alt="video" className="video__img" />

        <div className="blur">
          <img src={PlaySVG} alt="" className="play" />
        </div>
      </section>

      <section className="section__ethos">
        <div className="ethos__content">
          <div className="ethos__content--img img">
            <img src={imgEthos1} alt="" className="img-1" />

            <div className="img-2__banner">
              <img src={imgEthos2} alt="" className="img-2" />
            </div>
          </div>
          <div className="ethos__content--text">
            <p className="title">Our ethos</p>
            <h2 className="title__sub">
              <span>Effortlessly</span> Grande Homes
            </h2>
            <p className="paragraph">
              Making luxurious and truly grande furniture accessible for all
              people is our daily drive.
            </p>
          </div>
        </div>
      </section>
      <section className="section__newsletter">
        <p className="title">newsletter</p>
        <h2 className="title__sub">
          <span>Subscribe</span> to get the latest updates
        </h2>

        <form action="" className="newsletter__form">
          <FormInput placeholder="Email" type="email" />
          <button>Subscribe</button>
        </form>
      </section>
    </React.Fragment>
  );
};

export default HomePage;
