import ProductDetailActionTypes from "./product-details.types";

export const updateProduct = () => ({
  type: ProductDetailActionTypes.UPDATE_PRODUCT,
});
export const toggleCartHidden = () => ({
  type: ProductDetailActionTypes.TOGGLE_MODAL_HIDDEN,
});
