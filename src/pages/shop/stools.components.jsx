import React from 'react';

import ShopTile from '../../components/shop-title/shop-title.component'
import ItemsShowcase from '../../components/showcase/showcase.component'

import './shop.styles.scss';



class Stools extends React.Component{
    // constructor(){
    //     super()
    // }

    render(){
        
        return(   
            <>   
         <ShopTile  category= "Stools"/>
            <ItemsShowcase category= "Stools"  itemsToRender = {4} filtered/>

            
            </>
           
           
);

        
    }

}

export default Stools;
