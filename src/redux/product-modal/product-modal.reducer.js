import ProductDetailActionTypes from "./product-modal.types";
const INITIAL_STATE = {
  hidden: true,
  product: {},
};

const productReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ProductDetailActionTypes.TOGGLE_MODAL_HIDDEN:
      if (action.payload) {
        return {
          ...state,
          hidden: action.payload,
        };
      }

      return {
        ...state,
        hidden: !state.hidden,
      };

    case ProductDetailActionTypes.UPDATE_PRODUCT:
      //  console.log(action.payload);
      return {
        ...state,
        product: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
