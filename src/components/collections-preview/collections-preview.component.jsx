import React from "react";
import "./collection-preview.styles.scss";

const CollectionPreview = () => (
  <section className="section__browse-collections">
    <p className="title">Browse Collections</p>
    <div className="preview">
      <div className="preview__right"></div>
      <div className="preview__text"></div>

      <div className="preview__left"></div>
    </div>
  </section>
);

export default CollectionPreview;
