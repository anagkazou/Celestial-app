import React, { useEffect } from "react";
 import ShopTile from "../../components/shop-title/shop-title.component";
import ItemsShowcase from "../../components/showcase/showcase.component";
import "./shop.styles.scss";

const Ottomans = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [ ]);
  return (
    <>
      <ShopTile category="Ottomans" />
      <ItemsShowcase category="ottomans" itemsToRender={5} filtered />
    </>
  );
};

export default Ottomans;
