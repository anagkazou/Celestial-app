import React from 'react'
import "./cart-item.styles.scss"

const CartItem = ({item: {imageUrl,price, name, quantity, category}}) => (
    <div className="cart-item">
        <img src={imageUrl} alt="item"/>
        <div className="item-details">
            <div className="item-details__block">
                <div className="item-name">{name}</div>
            <div className="item-price">
$ {price}            </div>
            </div>
<div className="item-category">{category}</div>
<div className="item-details__block">
            <div className="item-quantity">
                {quantity} Piece(s)
            </div>        
                    <div className="btn-remove">REMOVE</div>

            </div>
        </div>
    </div>
);

export default CartItem;