import React from 'react';
import {connect} from 'react-redux';

import {toggleCartHidden} from '../../redux/cart/cart.actions'
import ShoppingIcon from '../../assets/svg/shopping-cart.svg';
import './cart-icon.styles.scss';

const CartIcon = ({toggleCartHidden}) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <img src={`${ShoppingIcon}`} alt="React Logo" />
         <div className="pos-abs">
            <span className="item-count">0</span>
        </div>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})
export default connect(null, mapDispatchToProps)(CartIcon);


