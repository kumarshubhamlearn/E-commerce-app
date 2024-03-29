import actionTypes from '../actions/actionTypes';
import {addItemsToCart, removeItemFromCart} from '../utils';

const INITIAL_STATE = {
  showCart: false ,
  cartItems: []
}

const cartReducer = (state=INITIAL_STATE,action) => {
  switch (action.type) {
    case actionTypes.SHOW_CART:
      return {
        ...state,
        showCart: !state.showCart
      };
    case actionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemsToCart(state.cartItems, action.payload)
      };
    case actionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload)
      }
    case actionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
      }
    default:
      return state;
  }
}

export default cartReducer;