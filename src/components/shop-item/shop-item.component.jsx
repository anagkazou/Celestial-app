import React from 'react';
import './shop-item.styles.scss';

const ShopItem = (props) =>{
   

        return(
            <React.Fragment>
                <div className="furniture-item">
<div className="furniture-item__img" style= {{
    backgroundImage:`url(${props.imageUrl})`
}}/>
    </div>
            </React.Fragment>
        )
    }


export default ShopItem;