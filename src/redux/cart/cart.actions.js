import CartActionTypes from "./cart.types";
import { saveUserCart, loadUserCart, clearUserCart } from "../../firebase/firebase.utils";

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});

export const removeItem = (item) => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item,
});

export const clearItemFromCart = (item) => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item,
});

export const loadCartFromFirebase = (cartItems) => ({
  type: CartActionTypes.LOAD_CART_FROM_FIREBASE,
  payload: cartItems,
});

export const clearCart = () => ({
  type: CartActionTypes.CLEAR_CART,
});

export const addItemAsync = (item, currentUser) => async (dispatch, getState) => {
  dispatch(addItem(item));
  
  if (currentUser && currentUser.currentUser && currentUser.currentUser.id) {
    const { cartItems } = getState().cart;
    await saveUserCart(currentUser.currentUser.id, cartItems);
  }
};

export const removeItemAsync = (item, currentUser) => async (dispatch, getState) => {
  dispatch(removeItem(item));
  
  if (currentUser && currentUser.currentUser && currentUser.currentUser.id) {
    const { cartItems } = getState().cart;
    await saveUserCart(currentUser.currentUser.id, cartItems);
  }
};

export const clearItemFromCartAsync = (item, currentUser) => async (dispatch, getState) => {
  dispatch(clearItemFromCart(item));
  
  if (currentUser && currentUser.currentUser && currentUser.currentUser.id) {
    const { cartItems } = getState().cart;
    await saveUserCart(currentUser.currentUser.id, cartItems);
  }
};

export const loadUserCartAsync = (currentUser) => async (dispatch) => {
  if (currentUser && currentUser.id) {
    const cartItems = await loadUserCart(currentUser.id);
    dispatch(loadCartFromFirebase(cartItems));
  }
};

export const clearCartAsync = (currentUser) => async (dispatch) => {
  dispatch(clearCart());
  
  if (currentUser && currentUser.currentUser && currentUser.currentUser.id) {
    await clearUserCart(currentUser.currentUser.id);
  }
};

