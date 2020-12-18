import React from 'react';
import './shop-title.styles.scss';
import {iconArrow} from '../../assets/img/images';

const ShopTitle = ({category}) =>(
            <div className="header-container">
            <h2 className="shop__title--sub">
                Collection
            </h2>
            <h3 className="shop__title">
                {category}
                <span className="shop__title--icon">
                    <img src={iconArrow} alt=""/>
                </span>
            </h3>
                        </div>
);

export default ShopTitle;