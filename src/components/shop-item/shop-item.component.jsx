import React from 'react';
import {connect} from 'react-redux';

import './shop-item.styles.scss';
import CustomButton from '../custom-button/custom-button.component';

import {addItem} from '../../redux/cart/cart.actions';

const ShopItem = ({item, addItem, category}) =>{
   const {imageUrl, name, price} = item;

        return(
            <React.Fragment>
                <div className="furniture-item" onClick = { () => addItem(item)} >
                    <div className="furniture-item__img" style= {{
                        backgroundImage:`url(${imageUrl})`
                    }}/>
                    <div className="button-container">
                    <CustomButton>Quick Add</CustomButton>
                    </div>
                    <p className="furniture-item__category">
                        {category}
                    </p>

                    <div className="furniture-item__details">
                        <p className="furniture-item__name">{name}</p>
                    <p className="furniture-item__price">{`₦${price}`}</p>
                    </div>
    </div>
            </React.Fragment>
        )
    }

            const mapDispatchToProps = dispatch => ({
                addItem: item => dispatch(addItem(item))
            })
export default connect(null, mapDispatchToProps)(ShopItem);