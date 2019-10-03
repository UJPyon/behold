import { RECEIVE_CURRENT_USER, FIND_CURRENT_USER } from '../actions/session_actions'

export const usersReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      // debugger 
      return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
    case FIND_CURRENT_USER:
      return action.answer;
    default:
      return state;
  }
}