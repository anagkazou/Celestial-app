import React from 'react';
import './cart-preview.styles.scss';
import {withRouter} from 'react-router-dom'

import CloseButton from '../../assets/svg/cancel.svg';
import CustomButton from '../custom-button/custom-button.component';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect'

import {selectCartItems} from '../../redux/cart/cart.selectors'
import {toggleCartHidden} from '../../redux/cart/cart.actions';

import CartItem from '../cart-item/cart-item.component'



const CartPreview = ({toggleCartHidden, cartItems,history}) => (
    <div className="cart-preview">
<div className="cart-preview__block--top">
                <div className="cart-title">Shopping Cart</div>
<div className="btn--close" onClick={toggleCartHidden}>
            <img src={CloseButton} alt="close"/>
        </div>
</div>

        
        <div className="cart-items">
        {
            cartItems.length ?
            cartItems.map(cartItem => <CartItem key={cartItem.id} item = {cartItem}/>)
            : <div className="empty-message">
                You have not items in your cart.
            </div>
        }
        </div>

        {
            cartItems.length ?
        <div className="cart-preview__block--bottom">
            <p className="promo-text">Sign up for 10% off your first order. Valid within two days of signup.</p>
      <CustomButton onClick = {() => {
          history.push("/checkout");
         // mapDispatchToProps.toggleCartHidden;
         dispatchEvent(toggleCartHidden())

        }
        }
          >CONTINUE TO CHECKOUT</CustomButton>
        </div>
        :null
          }
    </div>
)

const mapStateToProps = createStructuredSelector ({
cartItems:selectCartItems})

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default  withRouter(connect(mapStateToProps, mapDispatchToProps)(CartPreview));