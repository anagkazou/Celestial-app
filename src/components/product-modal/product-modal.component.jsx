import React from "react";
import "./product-modal.styles.scss";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { selectProductForModal } from "../../redux/product-modal/product-modal.selector";
import { toggleModalHidden } from "../../redux/product-modal/product-modal.actions";
import { addItem } from "../../redux/cart/cart.actions";
import { AddedToCartModal } from "../../js/animations";
const ProductModal = ({ product, toggleModalHidden, addItemToCart }) => {
  console.log(product);
  return (
    <div
      className="product-modal__container"
      onClick={() => toggleModalHidden(true)}
    >
      <div
        className="product-modal__modal"
        onClick={(e) => e.stopPropagation()}
      >
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
          <p className="product-modal__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, labore
            eum! Tenetur impedit tempora corporis inventore perferendis. Saepe
            temporibus delectus maiores nam aspernatur inventore quae tempora
            sit assumenda.
          </p>
          <div className="product-modal__actions">
            <p className="product-modal__price">₦{product.price}</p>
            <button
              className="add-to-cart"
              onClick={(e) => {
                e.stopPropagation();
                toggleModalHidden();
                addItemToCart(product);
                AddedToCartModal();
              }}
            >
              Add to Cart
            </button>
          </div>
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
  addItemToCart: (item) => dispatch(addItem(item)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ProductModal);
