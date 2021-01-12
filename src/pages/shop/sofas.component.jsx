import React from 'react';

import ShopTile from '../../components/shop-title/shop-title.component'
import ItemsShowcase from '../../components/showcase/showcase.component'

import './shop.styles.scss';



class Sofas extends React.Component{
    // constructor(){
    //     super()
    // }

    render(){
        return(   
            <>   
         <ShopTile category= "Sofas"/>
            <ItemsShowcase category= "sofas" itemsToRender = {3} filtered/>          
            </>
           
           
);

        
    }

}

export default Sofas;
