import React, {useEffect} from 'react';
import {useLocation} from "react-router-dom";
import ShopTile from '../../components/shop-title/shop-title.component'
import ItemsShowcase from '../../components/showcase/showcase.component'
import './shop.styles.scss';

const Chairs = () =>{
   
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
        return(   
            <>   
          <ShopTile category= "Chairs"/>
            <ItemsShowcase category= "chairs" itemsToRender = {1} filtered/>
            </>
           
           
);

        
    }



export default Chairs;
