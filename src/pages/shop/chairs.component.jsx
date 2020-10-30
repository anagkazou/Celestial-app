import React from 'react';

import ShopTile from '../../components/shop-title/shop-title.component'
import ItemsShowcase from '../../components/showcase/showcase.component'
import './shop.styles.scss';

class Chairs extends React.Component{
    // constructor(){
    //     super()
    // }

    render(){
        return(   
            <>   
          <ShopTile category= "Chairs"/>
            <ItemsShowcase category= "chairs" itemsToRender = {1} filtered/>
            </>
           
           
);

        
    }

}

export default Chairs;
