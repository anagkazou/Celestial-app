import React, { useEffect } from "react";
 import ShopTile from "../../components/shop-title/shop-title.component";
import ItemsShowcase from "../../components/showcase/showcase.component";
import "./shop.styles.scss";

const Chairs = () => {
 
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [ ]);
  return (
    <>
      <ShopTile category="Chairs" />
      <ItemsShowcase category="chairs" itemsToRender={1} filtered />
    </>
  );
};

export default Chairs;
