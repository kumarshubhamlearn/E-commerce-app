export const addItemsToCart = (cartItems, cartItemToAdd) => {
  //find returns the first item that is found based on the condition
  const existingCardItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );

  //checking if there is existingCardItem
  if (existingCardItem) {
    //maping to find the matching item
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? //returns items with increased quantity
          { ...cartItem, quantity: cartItem.quantity + 1 }
        : //returns original cart item
          cartItem
    );
  }

  //adding a quantity property to every item that is added to cart
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map(cartItem =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
