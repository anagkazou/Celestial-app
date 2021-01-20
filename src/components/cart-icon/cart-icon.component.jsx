import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import ShoppingIcon from "../../assets/svg/shopping-cart.svg";
import "./cart-icon.styles.scss";

const CartIcon = ({ toggleCartHidden, itemsCount }) => (
  <div className="cart-icon header__item" onClick={toggleCartHidden}>
    <img src={`${ShoppingIcon}`} alt="React Logo" />
    <div className="pos-abs">
      <span className="item-count">{itemsCount}</span>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});
const mapStateToProps = createStructuredSelector({
  itemsCount: selectCartItemsCount,
});
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
