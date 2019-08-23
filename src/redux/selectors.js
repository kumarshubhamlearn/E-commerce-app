//*using selctors so that the component does not rerenders because of the state changes that are not related to this component

import { createSelector } from 'reselect';

//******cart selectors */

//selecting cart state
const selectCart = state => state.cart;

export const selectCartItems = createSelector(
  //collection of input selectors
  [selectCart],
  //return value we want
  cart => cart.cartItems
);

export const selectShowCart = createSelector(
  [selectCart],
  cart => cart.showCart
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (totalQuantity, cartItem) => totalQuantity + cartItem.quantity,
      0
    )
);

//*** shop selectors */

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectCollections],
    collections => collections[collectionUrlParam]
    //finding collection id matching the url param
  );

  export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(key => collections[key])
  );

//***  user selectors */

const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  user => user.currentUser
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (totalQuantity, cartItem) =>
        totalQuantity + cartItem.quantity * cartItem.price,
      0
    )
);
