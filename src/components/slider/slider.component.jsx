import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";

import { first, second, third, fourth, fifth } from "../../assets/img/images.js";
import "./slider.styles.scss"; 
    let deviceWidth = () =>  window.innerWidth > 1024 ? 5000 : 10000;

export default class SlickSlider extends React.Component {

  render() {
    const settings = {
      infinite: true,
      speed: deviceWidth(),
      autoplay: true,
      autoplaySpeed: 0,
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: false,
      arrows: false,
      cssEase: "linear",
      swipeToSlide: true,
      centerMode: true,
    };

    return (
      <Slider {...settings} className="slider">
        <div className="slider__item">
          <div
            className="slider__img small"
            style={{
              backgroundImage: `url(${first})`,
            }}
          ></div>
        </div>
        <div className="slider__item">
          <div
            className="slider__img large"
            style={{
              backgroundImage: `url(${second})`,
            }}
          ></div>
        </div>
        <div className="slider__item">
          <div
            className="slider__img largest"
            style={{
              backgroundImage: `url(${third})`,
            }}
          ></div>
        </div>
        <div className="slider__item">
          <div
            className="slider__img large"
            style={{
              backgroundImage: `url(${fourth})`,
            }}
          ></div>
        </div>
        <div className="slider__item">
          <div
            className="slider__img small"
            style={{
              backgroundImage: `url(${fifth})`,
            }}
          ></div>
        </div>
      </Slider>
    );
  }
}
