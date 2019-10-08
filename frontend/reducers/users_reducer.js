import { RECEIVE_CURRENT_USER, FIND_CURRENT_USER } from '../actions/session_actions';
import { FETCH_USER, FETCH_ALL_USERS } from '../actions/user_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
    case FIND_CURRENT_USER:
      return Object.assign({}, state, { email: action.user.email });
    case FETCH_USER:
      return Object.assign({}, state, { user: action.user });
    case FETCH_ALL_USERS:
      return action.users;
    default:
      return state;
  }
};

export default usersReducer;