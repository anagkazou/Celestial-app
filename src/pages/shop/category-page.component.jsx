import React, { useEffect } from "react";
import ShopTile from "../../components/shop-title/shop-title.component";
import ItemsShowcase from "../../components/showcase/showcase.component";
import "./shop.styles.scss";
import { connect } from "react-redux";
import { toggleModalHidden } from "../../redux/product-modal/product-modal.actions";

const CategoryPage = ({ setModalHidden, category, itemsToRender, filtered = true }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    setModalHidden(true);
  }, []);

  return (
    <>
      <ShopTile category={category} />
      <ItemsShowcase 
        category={category} 
        itemsToRender={itemsToRender} 
        filtered={filtered} 
      />
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setModalHidden: (value) => dispatch(toggleModalHidden(value)),
});

export default connect(null, mapDispatchToProps)(CategoryPage);
