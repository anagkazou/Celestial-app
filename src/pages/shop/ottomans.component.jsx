import React, {useEffect} from 'react';
import {useLocation} from "react-router-dom";
import ShopTile from '../../components/shop-title/shop-title.component'
import ItemsShowcase from '../../components/showcase/showcase.component'
import './shop.styles.scss';

const Ottomans = () =>{
   
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
        return(   
            <>   
          <ShopTile category= "Ottomans"/>
            <ItemsShowcase category= "ottomans" itemsToRender = {5} filtered/>
            </>
           
           
);

        
    }



export default Ottomans;
