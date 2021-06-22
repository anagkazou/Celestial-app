import ProductDetailActionTypes from "./product-modal.types";

export const updateProduct = (item) => ({
  type: ProductDetailActionTypes.UPDATE_PRODUCT,
  payload: item,
});
export const toggleModalHidden = (payload) => ({
  type: ProductDetailActionTypes.TOGGLE_MODAL_HIDDEN,
  payload: payload,
});
