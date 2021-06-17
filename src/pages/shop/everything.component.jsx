import React, { useEffect } from "react";
import ShopTile from "../../components/shop-title/shop-title.component";
import ItemsShowcase from "../../components/showcase/showcase.component";
import "./shop.styles.scss";

const Everything = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ShopTile category="Everything" />
      <ItemsShowcase itemsToRender="all" />
    </>
  );
};

export default Everything;
