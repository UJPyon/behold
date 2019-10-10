import { RECEIVE_CURRENT_USER, FIND_CURRENT_USER } from '../actions/session_actions';
import { FETCH_USER, FETCH_ALL_USERS } from '../actions/user_actions';
import { REMOVE_APPRECIATION_FROM_USER, ADD_APPRECIATION_TO_USER } from '../actions/appreciation_actions';
import { merge } from 'lodash';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  let appreciationIdArray;

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
    case FIND_CURRENT_USER:
      return Object.assign({}, state, { email: action.user.email });
    case FETCH_USER:
      return Object.assign({}, state, { user: action.user });
    case FETCH_ALL_USERS:
      return action.users;
    case REMOVE_APPRECIATION_FROM_USER:
      newState = merge({}, state);
      appreciationIdArray = newState[action.userId].appreciatedProjectIds;
      appreciationIdArray.splice(appreciationIdArray.indexOf(action.projectId), 1);
      return newState;
    case ADD_APPRECIATION_TO_USER:
      newState = merge({}, state);
      appreciationIdArray = newState[action.userId].appreciatedProjectIds;
      appreciationIdArray.push(action.projectId);
      return newState;
    default:
      return state;
  }
};

export default usersReducer;