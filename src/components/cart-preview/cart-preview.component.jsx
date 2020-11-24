import React from 'react';
import './cart-preview.styles.scss';
import CloseButton from '../../assets/svg/cancel.svg';
import CustomButton from '../custom-button/custom-button.component';
import {connect} from 'react-redux';
import {selectCartItems} from '../../redux/cart/cart.selectors'
import {toggleCartHidden} from '../../redux/cart/cart.actions';

import CartItem from '../cart-item/cart-item.component'

const CartPreview = ({toggleCartHidden, cartItems}) => (
    <div className="cart-preview">
<div className="cart-preview__block--top">
                <div className="cart-title">Shopping Cart</div>
<div className="btn--close" onClick={toggleCartHidden}>
            <img src={CloseButton} alt="close"/>
        </div>
</div>

        
        <div className="cart-items">
        {
            cartItems.map(cartItem => <CartItem key={cartItem.id} item = {cartItem}/>)
        }
        </div>

        <div className="cart-preview__block--bottom">
            <p className="promo-text">Sign up for 10% off your first order. Valid within two days of signup.</p>
        <CustomButton>CONTINUE TO CHECKOUT</CustomButton>
        </div>
          
    </div>
)

const mapStateToProps = state => ({
cartItems:selectCartItems(state)})

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default  connect(mapStateToProps, mapDispatchToProps)(CartPreview);