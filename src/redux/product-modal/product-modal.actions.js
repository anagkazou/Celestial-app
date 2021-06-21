import ProductDetailActionTypes from "./product-modal.types";

export const updateProduct = () => ({
  type: ProductDetailActionTypes.UPDATE_PRODUCT,
});
export const toggleModalHidden = () => ({
  type: ProductDetailActionTypes.TOGGLE_MODAL_HIDDEN,
});
