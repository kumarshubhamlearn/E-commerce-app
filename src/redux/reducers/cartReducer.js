import actionTypes from '../actions/actionTypes';
import {addItemsToCart} from '../utils';

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
    default:
      return state;
  }
}

export default cartReducer;