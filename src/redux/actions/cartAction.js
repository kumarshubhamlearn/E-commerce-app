import actionTypes from './actionTypes';

export const toggleCart = state => ({
  type: actionTypes.SHOW_CART
})

export const addItem = item => ({
  type: actionTypes.ADD_ITEM,
  payload: item
})
