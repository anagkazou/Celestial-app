import React, { useEffect } from "react";
import ShopTile from "../../components/shop-title/shop-title.component";
import ItemsShowcase from "../../components/showcase/showcase.component";
import "./shop.styles.scss";
import { connect } from "react-redux";
import { toggleModalHidden } from "../../redux/product-modal/product-modal.actions";
const Lights = ({ setModalHidden }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    setModalHidden(true);
  }, []);
  return (
    <>
      <ShopTile category="Lights" />
      <ItemsShowcase category="Lights" itemsToRender={2} filtered />
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setModalHidden: (value) => dispatch(toggleModalHidden(value)),
});
export default connect(null, mapDispatchToProps)(Lights);
