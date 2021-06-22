import React from "react";
import "./product-modal.styles.scss";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { selectProductForModal } from "../../redux/product-modal/product-modal.selector";
import { toggleModalHidden } from "../../redux/product-modal/product-modal.actions";
const ProductModal = ({ id, img, item, product, toggleModalHidden }) => {
  return (
    <div
      className="product-modal__container"
      onClick={() => toggleModalHidden()}
    >
      <div className="product-modal__modal">
        <button
          className="product-modal__close-btn"
          onClick={() => {
            toggleModalHidden();
          }}
        >
          ×
        </button>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          repellendus voluptate, autem doloremque fugiat, ad rerum est
          accusantium eveniet cum hic itaque esse delectus aperiam aspernatur
          quisquam ipsum molestias voluptatem rem! Mollitia, inventore ab sunt
          in maiores tempore obcaecati ipsum!
        </p>
      </div>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  product: selectProductForModal,
});

const mapDispatchToProps = (dispatch) => ({
  toggleModalHidden: () => dispatch(toggleModalHidden()),
});
export default connect(mapStateToProps, mapDispatchToProps)(ProductModal);
