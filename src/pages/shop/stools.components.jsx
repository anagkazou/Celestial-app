import React from 'react';

import ShopTile from '../../components/shop-title/shop-title.component'
import ItemsShowcase from '../../components/showcase/showcase.component'

import './shop.styles.scss';



class Stools extends React.Component{
    // constructor(){
    //     super()
    // }

    render(){
        const {pathname} = this.props.location;
console.log(pathname)
        return(   
            <>   
         <ShopTile category= "Stools"/>
            <ItemsShowcase/>

            
            </>
           
           
);

        
    }

}

export default Stools;
