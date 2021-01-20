import React from "react";
import "./checkout-item.styles.scss";

import { connect } from "react-redux";
import {
  clearItemFromCart,
  addItem,
  removeItem,
} from "../../redux/cart/cart.actions";

const CheckoutItem = ({ cartItem, addItem, removeItem, clearItem }) => {
  const { name, price, quantity, category, imageUrl } = cartItem;

  return (
    <div className="checkout-item">
      <img src={imageUrl} alt="item" />

      <div className="checkout-item__details">
        <div className="top">
          <div className="checkout-item__name">{name}</div>
          <div className="btn--close" onClick={() => clearItem(cartItem)}>
            &#10005;
          </div>
        </div>
        <div className="checkout-item__category">{category}</div>
        <div className="bottom">
          <div className="checkout-item__quantity">
            <span
              className="checkout-item__quantity--minus"
              onClick={() => removeItem(cartItem)}
            >
              -
            </span>
            {quantity}
            <span
              className="checkout-item__quantity--plus"
              onClick={() => addItem(cartItem)}
            >
              +
            </span>
          </div>
          <div className="checkout-item__price">${price}</div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
