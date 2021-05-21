import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ShopTile from "../../components/shop-title/shop-title.component";
import ItemsShowcase from "../../components/showcase/showcase.component";
import "./shop.styles.scss";

const Sofas = () => {
  const { pathname } = useLocation();

  useEffect(() => {
 
  }, [pathname]);

  return (
    <>
      <ShopTile category="Sofas" />
      <ItemsShowcase category="sofas" itemsToRender={3} filtered />
    </>
  );
};

export default Sofas;
