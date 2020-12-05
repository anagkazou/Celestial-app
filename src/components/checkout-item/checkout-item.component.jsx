import React from 'react';
import './checkout-item.styles.scss';

const CheckoutItem = ({cartItem: {name, price, quantity,category, imageUrl}}) => (
    <div className="checkout-item">
    <img src={imageUrl} alt="item"/>

    <div className="checkout-item__details">
        <div className="top">
<div className="checkout-item__name">{name}</div>
        <div className="btn--close" >
        &#10005;       
         </div> 
       </div>
       <div className="checkout-item__category">
           {category}
       </div>
        <div className="bottom">
        <div className="checkout-item__quantity">
        <span className= "checkout-item__quantity--minus">-</span>
{quantity}
<span className= "checkout-item__quantity--plus">+</span>
</div>
         <div className="checkout-item__price">
              ${price}</div>

        </div>         

    </div>
</div>
   
)

export default CheckoutItem;