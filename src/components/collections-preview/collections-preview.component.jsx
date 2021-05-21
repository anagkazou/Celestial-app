import React, {useEffect} from "react";
import { InitPreviewAnimation } from "../../js/animations";

import "./collection-preview.styles.scss";
import { Link } from "react-router-dom";
import {
  imgChair,
  imgLight,
  imgSofa,
  imgStool,
  imgOtto,
} from "../../assets/assets";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectDirectorySection } from "../../redux/directory/directory.selector";
 
const CollectionPreview = (props) => {
  
  useEffect(() => {
     InitPreviewAnimation();
  })

     return (
      <section className="section__browse-collections">
        <p className="title">Browse Collections</p>
        <div className="preview">
          <div className="preview__left img">
            <img
              alt=""
              src={imgChair.second}
              className="img__small"
              style={{ left: "50%", top: "12%", opacity: "1" }}
              id="1"
            />

            <img
              alt=""
              src={imgLight.third}
              className="img__large"
              style={{
                top: "5%",
                right: "50%",
                transform: "translateX(50%)",
                opacity: "0",
              }}
              id="2"
            />
            <img
              alt=""
              src={imgSofa.first}
              className="img__large"
              style={{ left: "45%", bottom: "10%", opacity: "0" }}
              id="3"
            />
            <img
              alt=""
              src={imgSofa.second}
              className="img__large"
              style={{ right: "45%", top: "-10%", opacity: "0" }}
              id="3"
            />
            <img
              alt=""
              src={imgChair.third}
              className="img__small"
              style={{ bottom: "20%", left: "20%", opacity: "1" }}
              id="1"
            />
            <img
              alt=""
              src={imgStool.third}
              className="img__large"
              style={{
                top: "5%",
                right: "50%",
                transform: "translateX(50%)",
                opacity: "0",
              }}
              id="4"
            />
            <img
              alt=""
              src={imgOtto.third}
              className="img__small"
              style={{ bottom: "20%", left: "20%", opacity: "0" }}
              id="5"
            />
            <img
              alt=""
              src={imgOtto.second}
              className="img__small"
              style={{ left: "50%", top: "12%", opacity: "0" }}
              id="5"
            />
          </div>

          <div className="preview__text">
            { props.collections.map(({ id, urlTitle }) => {
              return (
                <Link
                  to={`/category/${urlTitle}`}
                  id={id}
                  key={id}
                  className="collection-title"
                >
                  {urlTitle}
                </Link>
              );
            })}
            <Link to="/collections" className="btn btn__text">
              View everything
            </Link>
          </div>
          <div className="preview__right img">
            <img
              alt=""
              src={imgChair.first}
              className="img__large"
              style={{
                top: "5%",
                right: "50%",
                transform: "translateX(50%)",
                opacity: "1",
              }}
              id="1"
            />{" "}
            <img
              alt=""
              src={imgLight.first}
              className="img__small"
              style={{ bottom: "20%", right: "20%", opacity: "0" }}
              id="2"
            />{" "}
            <img
              alt=""
              src={imgLight.second}
              className="img__small"
              style={{ right: "50%", top: "12%", opacity: "0" }}
              id="2"
            />{" "}
            <img
              alt=""
              src={imgSofa.third}
              className="img__large"
              style={{ right: "35%", top: "10%", opacity: "0" }}
              id="3"
            />
            <img
              alt=""
              src={imgStool.first}
              className="img__small"
              style={{ bottom: "20%", right: "50%", opacity: "0" }}
              id="4"
            />{" "}
            <img
              alt=""
              src={imgStool.second}
              className="img__small"
              style={{ right: "20%", top: "12%", opacity: "0" }}
              id="4"
            />{" "}
            <img
              alt=""
              src={imgOtto.first}
              className="img__large"
              style={{
                top: "5%",
                right: "50%",
                transform: "translateX(50%)",
                opacity: "0",
              }}
              id="5"
            />
          </div>
        </div>
      </section>
    );
  }
 
const mapStateToProps = createStructuredSelector({
  collections: selectDirectorySection,
});
export default connect(mapStateToProps)(CollectionPreview);
