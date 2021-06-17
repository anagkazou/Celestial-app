import React, { useEffect } from "react";
import ShopTile from "../../components/shop-title/shop-title.component";
import ItemsShowcase from "../../components/showcase/showcase.component";
import "./shop.styles.scss";

const Lights = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <ShopTile category="Lights" />
      <ItemsShowcase category="Lights" itemsToRender={2} filtered />
    </>
  );
};

export default Lights;
