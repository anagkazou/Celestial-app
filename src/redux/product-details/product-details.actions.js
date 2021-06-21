import ProductDetailActionTypes from "./product-details.types";

export const updateProduct = () => ({
  type: ProductDetailActionTypes.UPDATE_PRODUCT,
});
export const toggleModalHidden = () => ({
  type: ProductDetailActionTypes.TOGGLE_MODAL_HIDDEN,
});
