import { createSelector } from "reselect";

const selectProduct = (state) => state.productForModal;

export const selectModalHidden = createSelector(
  [selectProduct],
  (product) => product.hidden
);
export const selectProductForModal = createSelector(
  [selectProduct],
  (product) => product.product
);
