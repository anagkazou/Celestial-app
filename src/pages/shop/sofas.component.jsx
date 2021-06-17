import React, { useEffect } from "react";
import ShopTile from "../../components/shop-title/shop-title.component";
import ItemsShowcase from "../../components/showcase/showcase.component";
import "./shop.styles.scss";

const Sofas = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <ShopTile category="Sofas" />
      <ItemsShowcase category="Sofas" itemsToRender={3} filtered />
    </>
  );
};

export default Sofas;
