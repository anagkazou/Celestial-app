import React from "react";
import "./cart-item.styles.scss";

import { connect } from "react-redux";
import { clearItemFromCartAsync } from "../../redux/cart/cart.actions";
import { selectCurrentUser } from "../../redux/user/user.selectors";

const CartItem = ({ item, clearItem, currentUser }) => {
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
          <div className="btn-remove" onClick={() => clearItem(item, currentUser)}>
            REMOVE
          </div>
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
});
export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
