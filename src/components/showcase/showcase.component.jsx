import React from "react";
import './showcase.styles.scss';
import {Link} from "react-router-dom"

import ShopItem from '../shop-item/shop-item.component' 

import SHOP_DATA from '../../pages/shop/shop.data' 

import {shopFilterAnimation} from "../../js/animations";

 class ItemsShowcase extends React.Component{
    constructor(props){
        super(props);

        this.state={
            furniture:SHOP_DATA,
        }
    }
   
   componentDidMount(){
    shopFilterAnimation();
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
            <div className="filter__hide" >&#10005;</div>
                     <div className="title">Browse Collections</div>
                           <ul>
                               <li><Link to= "/collections">Everything</Link></li>
                               {
                                   furnitureItemsData.map(({category})=>(
                                   <li>   <Link key={category.id} to= {`/category/${category.toLowerCase()}`}>{category}</Link></li>
                                   ))
                               }
                           
                           
                           </ul>
                       </div>
                       <div className="showcase-container">
                           <div className="showcase">
                           {
                             this.state.furniture.map(el =>(
                               el.items.map(item =>{
                            return  <ShopItem key= {item.id}  category = {el.category} item= { item} ></ShopItem> 
                               }) 
               
                           ) )    
                       }
                         </div>
                       </div>
                                                              
                           </>         );

                           
      }
       else{
           return(
               <> 
            <div className="filter">
            <div className="filter__hide" >&#10005;</div>
                     <div className="title">Browse Collections</div>
            <ul>
                <li><Link to= "/collections">Everything</Link></li>
                {
                    this.state.furniture.map(({category})=>(
                    <li>   <Link to= {`/category/${category.toLowerCase()}`}>{category}</Link></li>
                    ))
                }
            
            
            </ul>
        </div>
        <div className="showcase-container">
            <div className="showcase">
                           {
                            category.items.map(item => {
                               return  <ShopItem key= {item.id} category = {category.category} item = {item} ></ShopItem> })

                       }
                    
                                       </div>

        </div>
        
</>
           )
      

        }
       } 
    }
    





export default ItemsShowcase;