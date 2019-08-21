import actionTypes from '../actions/actionTypes'

const INITIAL_STATE = {
  currentUser: null
}

//every reducer must have a default statement, because every reducer gets every action that is dispatched
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      }
    default:
      return state;
  }
  
}

export default userReducer;