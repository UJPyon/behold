import { getAllUsers, findUser } from '../utils/user_api_util';

export const FETCH_USER = "FETCH_USER";
export const FETCH_ALL_USERS = "FETCH_ALL_USERS";

export const fetchUser = (user) => {
  debugger
  return {
    type: FETCH_USER,
    user,
  };
};

export const fetchAllUsers = (users) => {
  debugger
  return {
    type: FETCH_ALL_USERS,
    users,
  };
};

export const receiveUser = id => dispatch => {
  debugger
  return findUser(id).then(user => dispatch(fetchUser(user)));
};

export const receiveAllUsers = () => dispatch => {
  debugger
  return getAllUsers().then(users => dispatch(fetchAllUsers(users)));
};