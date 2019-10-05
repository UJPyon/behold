import { findUser } from '../utils/user_api_util';

export const FETCH_USER = "FETCH_USER";

export const fetchUser = (user) => {
  return {
    type: FETCH_USER,
    user,
  };
};

export const receiveUser = id => dispatch => {
  return findUser(id).then(user => dispatch(fetchUser(user)));
};