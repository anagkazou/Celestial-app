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

            {/* <Switch>
        <Route exact path= "/"component= {Homepage} />
        <Route  path= "/category/lights" component= {} />
        <Route  path= "/category/sofas" component= {} />
        <Route  path= "/category/stools" component= {} />
        <Route  path= "/category/ottomans" component= {} />
      </Switch> */}
            </>
           
           
);

        
    }

}

export default Chairs;
