import React from 'react';

import ShopTile from '../../components/shop-title/shop-title.component'
import Showcase from '../../components/showcase/showcase.component'
import './shop.styles.scss';

class Collection extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(   
            <>   
          <ShopTile/>
            <Showcase/>
            </>
);

        
    }

}

export default Collection;
