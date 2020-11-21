import React from "react";
import './showcase.styles.scss';
import {Link} from "react-router-dom"

import ShopItem from '../shop-item/shop-item.component' 

import SHOP_DATA from '../../pages/shop/shop.data' 

 class ItemsShowcase extends React.Component{
    constructor(props){
        super(props);

        this.state={
            furniture:SHOP_DATA,
        }
    }
   
   
   
    render(){

        //improve this declarations
     let itemsToRender =   this.props.itemsToRender;
     let furnitureItemsData = this.state.furniture;
        let isFiltered = this.props.filtered;
        let category = furnitureItemsData.find(x => x.id === itemsToRender )

      if (!isFiltered)  {
        return(<>        
            <div className="filter">
                           <ul>
                               <li><Link to= "/collection">Everything</Link></li>
                               {
                                   furnitureItemsData.map(({category})=>(
                                   <li>   <Link key={category.id} to= {`/category/${category.toLowerCase()}`}>{category}</Link></li>
                                   ))
                               }
                           
                           
                           </ul>
                       </div>
                       <div className="showcase">
                           {
                             this.state.furniture.map(el =>(
                               el.items.map(item =>{
                            return  <ShopItem key= {item.id}  category = {el.category} item= { item} ></ShopItem> 
                        
                                                     }) 
               
                           ) )    
                       }
                                       </div>
           
                                       
                           </>         );

                           
      }
       else{
           return(
               <> 
            <div className="filter">
            <ul>
                <li><Link to= "/collection">Everything</Link></li>
                {
                    this.state.furniture.map(({category})=>(
                    <li>   <Link to= {`/category/${category.toLowerCase()}`}>{category}</Link></li>
                    ))
                }
            
            
            </ul>
        </div>
        <div className="showcase">
                           {
                               
                               category.items.map(item => {
                               return  <ShopItem key= {item.id} category = {category.category} item = {item} ></ShopItem> })

                       }
                    
                                       </div>
</>
           )
      

        }
       } 
    }
    





export default ItemsShowcase;