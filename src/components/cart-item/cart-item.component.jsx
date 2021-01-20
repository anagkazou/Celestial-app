import React from "react";
import "./cart-item.styles.scss";

import { connect } from "react-redux";
import { clearItemFromCart } from "../../redux/cart/cart.actions";

const CartItem = ({ item, clearItem }) => {
  const { imageUrl, price, name, quantity, category } = item;
  return (
    <div className="cart-item">
      <img src={imageUrl} alt="item" />
      <div className="item-details">
        <div className="item-details__block">
          <div className="item-name">{name}</div>
          <div className="item-price">$ {price} </div>
        </div>
        <div className="item-category">{category}</div>
        <div className="item-details__block">
          <div className="item-quantity">{quantity} Piece(s)</div>
          <div className="btn-remove" onClick={() => clearItem(item)}>
            REMOVE
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
});
export default connect(null, mapDispatchToProps)(CartItem);
