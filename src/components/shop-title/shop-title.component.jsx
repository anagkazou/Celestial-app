import React from 'react';
import './shop-title.styles.scss';

const ShopTitle = (props) =>(
            <div className="header-container">
            <h2 className="shop__title--sub">
                Collection
            </h2>
            <h3 className="shop__title">
                {props.category}
            </h3>
                        </div>
);

export default ShopTitle;