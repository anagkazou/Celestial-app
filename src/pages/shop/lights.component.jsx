import React from 'react';

import ShopTile from '../../components/shop-title/shop-title.component'
import ItemsShowcase from '../../components/showcase/showcase.component'

import './shop.styles.scss';



class Lights extends React.Component{
    // constructor(){
    //     super()
    // }

    render(){
        return(   
            <>   
         <ShopTile category= "Lights"/>
            <ItemsShowcase itemsToRender= {2} filtered/>

            
            </>
           
           
);

        
    }

}

export default Lights;
