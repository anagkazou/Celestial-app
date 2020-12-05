import React from 'react';
import './checkout.styles.scss'

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCartItems} from '../../redux/cart/cart.selectors';
import {selectCartTotal} from '../../redux/cart/cart.selectors';

import LeftArrow from '../../assets/img/left-arrow.png'

import CheckoutItem from '../../components/checkout-item/checkout-item.component'


const CheckoutPage = ({cartItems, total} ) =>( 
    <div className = "checkout">
<a href={"/collections"} className="navigation">
    <span className= "navigation-arrow">
        <img src={LeftArrow} alt="left-arr"/>
</span>
<span className="navigation-text">Back to Shopping</span>

    </a>    
    
    <div className="checkout-container">

        <div className="checkout-items">
{cartItems.map(cartItem => 
<CheckoutItem key= {cartItem.id} cartItem= {cartItem} />
   )}
        </div>

        <div className="checkout-summary">
            
        </div>
    </div>

    </div>
);

const mapStateToProps = createStructuredSelector ({
    cartItems: selectCartItems,
    total:selectCartTotal,
})
export default connect(mapStateToProps, null)(CheckoutPage);

