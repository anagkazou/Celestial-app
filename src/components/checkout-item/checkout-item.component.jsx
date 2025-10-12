import React from "react";
import "./checkout-item.styles.scss";

import { connect } from "react-redux";
import {
  clearItemFromCartAsync,
  addItemAsync,
  removeItemAsync,
} from "../../redux/cart/cart.actions";
import { selectCurrentUser } from "../../redux/user/user.selectors";

const CheckoutItem = ({ cartItem, addItem, removeItem, clearItem, currentUser }) => {
  const { name, price, quantity, category, imageUrl } = cartItem;

  return (
    <div className="checkout-item">
      <img src={imageUrl} alt="item" />

      <div className="checkout-item__details">
        <div className="top">
          <div className="checkout-item__name">{name}</div>
          <div className="btn--close" onClick={() => clearItem(cartItem, currentUser)}>
            &#10005;
          </div>
        </div>
        <div className="checkout-item__category">{category}</div>
        <div className="bottom">
          <div className="checkout-item__quantity">
            <span
              className="checkout-item__quantity--minus"
              onClick={() => removeItem(cartItem, currentUser)}
            >
              -
            </span>
            {quantity}
            <span
              className="checkout-item__quantity--plus"
              onClick={() => addItem(cartItem, currentUser)}
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

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
});

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item, currentUser) => dispatch(clearItemFromCartAsync(item, currentUser)),
  addItem: (item, currentUser) => dispatch(addItemAsync(item, currentUser)),
  removeItem: (item, currentUser) => dispatch(removeItemAsync(item, currentUser)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutItem);
