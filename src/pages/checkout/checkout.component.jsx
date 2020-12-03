import React from 'react';
import './checkout.styles.scss'

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCartItems} from '../../redux/cart/cart.selectors';

import LeftArrow from '../../assets/img/left-arrow.png'



const CheckoutPage = ({cartI} ) =>( 
    <div className = "checkout">
<a href={"/#"} className="navigation">
    <span className= "navigation-arrow">
        <img src={LeftArrow} alt="left-arr"/>
</span>
<span className="navigation-text">Back to Shopping</span>

    </a>    
    
    <div className="checkout-container">

        <div className="order-items">

        </div>

        <div className="order-summary">
            
        </div>
    </div>

    </div>
);

const mapStateToProps = createStructuredSelector ({
    cartItems: selectCartItems,
})
export default connect(mapStateToProps, null)(CheckoutPage);

