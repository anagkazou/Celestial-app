import React, { useEffect } from "react";
import ShopTile from "../../components/shop-title/shop-title.component";
import ItemsShowcase from "../../components/showcase/showcase.component";
import "./shop.styles.scss";

const Stools = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ShopTile category="Stools" />
      <ItemsShowcase category="stools" itemsToRender={4} filtered />
    </>
  );
};

export default Stools;
