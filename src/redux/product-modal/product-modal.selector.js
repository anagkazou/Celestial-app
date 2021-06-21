import { createSelector } from "reselect";

const selectProduct = (state) => state.product;

export const selectCartHidden = createSelector(
  [selectProduct],
  (product) => product.hidden
);
export const selectProductItems = createSelector(
  [selectProduct],
  (product) => product.cartItems
);
