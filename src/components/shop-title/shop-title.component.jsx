import React from 'react';
import './shop-title.styles.scss';

const ShopTitle = ({category}) =>(
            <div className="header-container">
            <h2 className="shop__title--sub">
                Collection
            </h2>
            <h3 className="shop__title">
                {category}
            </h3>
                        </div>
);

export default ShopTitle;