import React from "react";
import InitPreviewAnimation from "./collection-preview";

import "./collection-preview.styles.scss";
import { Link } from "react-router-dom";
import { imgChair, imgLight } from "../../assets/img/images";

class CollectionPreview extends React.Component {
  componentDidMount() {
    InitPreviewAnimation();
  }
  render() {
    return (
      <section className="section__browse-collections">
        <p className="title">Browse Collections</p>
        <div className="preview">
          <div className="preview__left img">
            <img
              src={imgChair.second}
              className="img__small"
              style={{ left: "50%", top: "12%", opacity: "1" }}
              id="2"
            />
            <img
              src={imgChair.third}
              className="img__small"
              style={{ bottom: "20%", left: "20%", opacity: "1" }}
              id="2"
            />{" "}
            <img
              src={imgLight.third}
              className="img__large"
              style={{
                top: "5%",
                right: "50%",
                transform: "translateX(50%)",
                opacity: "0",
              }}
              id="1"
            />{" "}
          </div>

          <div className="preview__text">
            <Link to="/#" className="collection-title" id="1">
              Chairs
            </Link>
            <Link to="/#" className="collection-title" id="2">
              Lights
            </Link>
            <Link to="/#" className="collection-title" id="3">
              Sofas
            </Link>
            <Link to="/#" className="collection-title" id="4">
              Tables
            </Link>
            <Link to="/#" className="collection-title" id="5">
              Stools
            </Link>

            <Link to="/#" className="btn btn__text">
              View everything
            </Link>
          </div>
          <div className="preview__right img">
            <img
              src={imgChair.first}
              className="img__large"
              style={{
                top: "5%",
                right: "50%",
                transform: "translateX(50%)",
                opacity: "1",
              }}
              id="2"
            />{" "}
            <img
              src={imgLight.first}
              className="img__small"
              style={{ bottom: "20%", right: "20%", opacity: "0" }}
              id="1"
            />{" "}
            <img
              src={imgLight.second}
              className="img__small"
              style={{ right: "50%", top: "12%", opacity: "0" }}
              id="1"
            />{" "}
          </div>
        </div>
      </section>
    );
  }
}

export default CollectionPreview;
