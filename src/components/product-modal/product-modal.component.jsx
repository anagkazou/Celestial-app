import React from "react";
import "./product-modal.styles.scss";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { selectProductForModal } from "../../redux/product-modal/product-modal.selector";
import { toggleModalHidden } from "../../redux/product-modal/product-modal.actions";
const ProductModal = ({ id, img, item, product, toggleModalHidden }) => {
  console.log(product);
  return (
    <div
      className="product-modal__container"
      onClick={() => toggleModalHidden(true)}
    >
      <div className="product-modal__modal">
        <button
          className="product-modal__close-btn"
          onClick={(e) => {
            e.stopPropagation();
            toggleModalHidden(true);
          }}
        >
          ×
        </button>
        <img
          className="product-modal__img"
          src={product.imageUrl}
          alt="product"
        />
        <div className="product-modal__details">
          <p className="product-modal__product-name">{`${
            product.name
          } ${product.category.slice(0, -1)}`}</p>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  product: selectProductForModal,
});

const mapDispatchToProps = (dispatch) => ({
  toggleModalHidden: () => dispatch(toggleModalHidden()),
});
export default connect(mapStateToProps, mapDispatchToProps)(ProductModal);
