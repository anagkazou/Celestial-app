import React from "react";
import './showcase.styles.scss';
import {Link} from "react-router-dom"

import ShopItem from '../shop-item/shop-item.component' 

import SHOP_DATA from '../../pages/shop/shop.data'

class Showcase extends React.Component{
    constructor(){
        super();

        this.state={
            furniture:SHOP_DATA,
        }
    }
componentDidMount(){
    console.log(this.state.furniture[0].id);

}
    render(){

        return(
<React.Fragment>      
          <div className="filter">
                <ul>
                <li>
                    <Link to= "/#">Everything</Link>
                </li>
                <li>
                    <Link to= "/#">Everything</Link>
                </li>
                <li>
                    <Link to= "/#">Everything</Link>
                </li>
                <li>
                    <Link to= "/#">Everything</Link>
                </li>
                <li>
                    <Link to= "/#">Everything</Link>
                </li>
                </ul>
            </div>
            <div className="showcase">
                    {/* {

                    this.state.furniture.map().map() => (
                        
                    <ShopItem key= {items.id} {...otherFurnitureProps} ></ShopItem>
                    ))} */}

                    {
                        this.state.furniture.map(el =>(
                             el.items.map(({id, imageUrl})=>{
                           return     <ShopItem key= {id} imageUrl= {imageUrl} ></ShopItem>
                      
                                                   }) 

                         ) ) 
                        }
                </div>
</React.Fragment>        );
    }
    
}



export default Showcase;