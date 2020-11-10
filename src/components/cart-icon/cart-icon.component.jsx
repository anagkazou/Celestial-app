import React from 'react';

import ShoppingIcon from '../../assets/svg/shopping-cart.svg';
import './cart-icon.styles.scss';

const CartIcon = () => (
    <div className="cart-icon">
      <img src={`${ShoppingIcon}`} alt="React Logo" />
         <div className="pos-abs">
            <span className="item-count">0</span>
        </div>
    </div>
);

export default CartIcon;


