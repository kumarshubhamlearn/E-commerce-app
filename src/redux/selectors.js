//*using selctors so that the component does not rerenders because of the state changes that are not related to this component

import {createSelector} from 'reselect';

//selecting cart state
const selectCart = state => state.cart;

export const selectCartItems = createSelector(
  //collection of input selectors
  [selectCart],
  //return value we want
  (cart) => cart.cartItems
);

export const selectShowCart = createSelector(
  [selectCart],
  cart => cart.showCart
)

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
  cartItems.reduce((totalQuantity, cartItem) => totalQuantity + cartItem.quantity,0)
)

const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  user => user.currentUser
)

export const selectCartTotal = createSelector(
  [selectCartItems],
  cartItems => 
    cartItems.reduce((totalQuantity,cartItem) => totalQuantity + cartItem.quantity , 0
)
)
