import { getAllUsers, findUser } from '../utils/user_api_util';

export const FETCH_USER = "FETCH_USER";
export const FETCH_ALL_USERS = "FETCH_ALL_USERS";

export const fetchUser = (user) => {
  return {
    type: FETCH_USER,
    user,
  };
};

export const fetchAllUsers = (users) => {
  return {
    type: FETCH_ALL_USERS,
    users,
  };
};

export const receiveUser = id => dispatch => {
  return findUser(id).then(user => dispatch(fetchUser(user)));
};

export const receiveAllUsers = () => dispatch => {
  return getAllUsers().then(users => dispatch(fetchAllUsers(users)));
};