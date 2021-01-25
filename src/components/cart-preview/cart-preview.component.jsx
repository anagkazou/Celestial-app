import React from "react";
import "./cart-preview.styles.scss";
import { withRouter } from "react-router-dom";

import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCartItems } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import CartItem from "../cart-item/cart-item.component";

const CartPreview = ({ cartItems, history, currentUser, dispatch }) => {
  return (
    <div className="cart-preview">
      <div className="cart-preview__block--top">
        <div className="cart-title">Shopping Cart</div>
        <p className="btn--close" onClick={() => dispatch(toggleCartHidden())}>
          &#10005;
        </p>
      </div>

      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <div className="empty-message">You have no items in your cart.</div>
        )}
      </div>

      {cartItems.length ? (
        <div className="cart-preview__block--bottom">
          <p className="promo-text">
            Sign up for 10% off your first order and 5% off the second. Valid
            within five days of signup.
          </p>
          <CustomButton
            onClick={() => {
              currentUser
                ? (window.location.href = "/checkout")
                : (window.location.href = "/signup");
              dispatch(toggleCartHidden());
            }}
          >
            CONTINUE TO CHECKOUT
          </CustomButton>
        </div>
      ) : null}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  currentUser: selectCurrentUser,
});

export default withRouter(connect(mapStateToProps, null)(CartPreview));
