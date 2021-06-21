import React from "react";
import "./product-modal.styles.scss";

const ProductModal = ({ id, img, item }) => {
  return (
    <div className="product-modal__container">
      <div className="product-modal__modal">
        <button className="product-modal__close-btn">×</button>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          repellendus voluptate, autem doloremque fugiat, ad rerum est
          accusantium eveniet cum hic itaque esse delectus aperiam aspernatur
          quisquam ipsum molestias voluptatem rem! Mollitia, inventore ab sunt
          in maiores tempore obcaecati ipsum!
        </p>
      </div>
    </div>
  );
};

export default ProductModal;
