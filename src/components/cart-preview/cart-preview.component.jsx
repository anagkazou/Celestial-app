import React from 'react';
import './cart-preview.styles.scss'

import CustomButton from '../custom-button/custom-button.component'

const CartPreview = () => (
    <div className="cart-preview">
        <div className="cart-items">

        </div>
        <div className="cart-info"></div>
        <CustomButton>CONTINUE TO CHECKOUT</CustomButton>
    </div>
)

export default CartPreview;