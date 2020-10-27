import React from 'react';
import './shop-item.styles.scss';

const ShopItem = (props) =>{
   

        return(
            <React.Fragment>
                <div className="furniture-item">
<div className="furniture-item__img" style= {{
    backgroundImage:`url(${props.imageUrl})`
}}/>

<p className="furniture-item__category">
    {props.category}
</p>

<div className="furniture-item__details">
    <p className="furniture-item__name">{props.name}</p>
<p className="furniture-item__price">{`₦${props.price}`}</p>
</div>

    </div>
            </React.Fragment>
        )
    }


export default ShopItem;