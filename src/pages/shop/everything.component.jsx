import React from 'react';

import ShopTile from '../../components/shop-title/shop-title.component'
import ItemsShowcase from '../../components/showcase/showcase.component'

import './shop.styles.scss';



class Everything extends React.Component{
    // constructor(){
    //     super()
    // }

    render(){
        return(   
            <>   
         <ShopTile category= "Everything"/>
            <ItemsShowcase itemsToRender= "all" filtered= {false}/>

            
            </>
           
           
);

        
    }

}

export default Everything;
