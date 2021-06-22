import React, { useEffect } from "react";
import ShopTile from "../../components/shop-title/shop-title.component";
import ItemsShowcase from "../../components/showcase/showcase.component";
import "./shop.styles.scss";
import { connect } from "react-redux";
import { toggleModalHidden } from "../../redux/product-modal/product-modal.actions";
const Sofas = ({ setModalHidden }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    setModalHidden(true);
  }, []);
  return (
    <>
      <ShopTile category="Sofas" />
      <ItemsShowcase category="Sofas" itemsToRender={3} filtered />
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setModalHidden: (value) => dispatch(toggleModalHidden(value)),
});
export default connect(null, mapDispatchToProps)(Sofas);
