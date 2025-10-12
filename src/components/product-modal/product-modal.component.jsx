import React from "react";
import "./product-modal.styles.scss";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { selectProductForModal } from "../../redux/product-modal/product-modal.selector";
import { toggleModalHidden } from "../../redux/product-modal/product-modal.actions";
import { addItemAsync } from "../../redux/cart/cart.actions";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { AddedToCartModal as addedToCartModal } from "../../js/animations";
const ProductModal = ({ product, toggleModalHidden, addItemToCart, currentUser }) => {
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
            {product.description}
          </p>
          <div className="product-modal__actions">
            <p className="product-modal__price">${product.price}</p>
            <button
              className="add-to-cart"
              onClick={(e) => {
                e.stopPropagation();
                toggleModalHidden();
                addItemToCart(product, currentUser);
                addedToCartModal();
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
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  toggleModalHidden: () => dispatch(toggleModalHidden()),
  addItemToCart: (item, currentUser) => dispatch(addItemAsync(item, currentUser)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ProductModal);
