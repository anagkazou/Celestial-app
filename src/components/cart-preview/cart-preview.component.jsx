import React from 'react';
import './cart-preview.styles.scss';
import CloseButton from '../../assets/svg/cancel.svg';
import CustomButton from '../custom-button/custom-button.component';
import {connect} from 'react-redux';

import {toggleCartHidden} from '../../redux/cart/cart.actions';

import CartItem from '../cart-item/cart-item.component'

const CartPreview = ({toggleCartHidden, cartItems}) => (
    <div className="cart-preview">
        <div className="btn--close" onClick={toggleCartHidden}>
            <img src={CloseButton} alt="close"/>
        </div>
        <div className="cart-items">
        {
            cartItems.map(cartItem => <CartItem key={cartItem.id} item = {cartItem}/>)
        }
        </div>
          
        <div className="cart-info"></div>
        <CustomButton>CONTINUE TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = ({cart: {cartItems}}) => ({
cartItems})

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default  connect(mapStateToProps, mapDispatchToProps)(CartPreview);