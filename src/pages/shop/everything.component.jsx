import React, {useEffect} from 'react';
import {useLocation} from "react-router-dom";
import ShopTile from '../../components/shop-title/shop-title.component'
import ItemsShowcase from '../../components/showcase/showcase.component'
import './shop.styles.scss';

const Everything = () =>{
   
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
        return(   
            <>   
          <ShopTile category= "Everything"/>
            <ItemsShowcase  itemsToRender = "all" />
            </>
           
           
);

        
    }



export default Everything;
