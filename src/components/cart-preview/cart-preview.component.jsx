import React from 'react';
import './cart-preview.styles.scss';
import CloseButton from '../../assets/svg/cancel.svg';
import CustomButton from '../custom-button/custom-button.component';
import {connect} from 'react-redux';

import {toggleCartHidden} from '../../redux/cart/cart.actions';

const CartPreview = ({toggleCartHidden}) => (
    <div className="cart-preview">
        <div className="btn--close" onClick={toggleCartHidden}>
            <img src={CloseButton} alt="close"/>
        </div>
        <div className="cart-items">

        </div>
        <div className="cart-info"></div>
        <CustomButton>CONTINUE TO CHECKOUT</CustomButton>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default  connect(null, mapDispatchToProps)(CartPreview);