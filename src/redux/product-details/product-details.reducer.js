import ProductDetailActionTypes from "./product-details.actions";
const INITIAL_STATE = {
  hidden: true,
  product: {},
};

const productReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ProductDetailActionTypes.TOGGLE_MODAL_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };

    case ProductDetailActionTypes.UPDATE_PRODUCT:
      return {
        ...state,
        cartItems: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
