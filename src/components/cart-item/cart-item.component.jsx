import React from 'react'
import "./cart-item.styles.scss"

const CartItem = ({item: {imageUrl,price, name, quantity}}) => (
    <div className="cart-item">
        <img src={imageUrl} alt="item"/>
        <div className="item-details">
            <div className="item-details__block">
                <span className="item-name">{name}</span>
            <span className="item-price">
                {quantity} Piece(s)
            </span>
            </div>


        </div>
    </div>
);

export default CartItem;