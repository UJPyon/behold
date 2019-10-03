import { postUser, postSession, deleteSession, getUser } from '../utils/session_api_util'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER'
export const FIND_CURRENT_USER = 'FIND_CURRENT_USER'
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS'
export const REMOVE_ERRORS = 'REMOVE_ERRORS'


export const login = (formUser) => dispatch => {
  return (postSession(formUser)
    .then(user => dispatch(receiveCurrentUser(user)))
    .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
  );
};

export const signup = (formUser) => dispatch => {
  return (postUser(formUser)
    .then(user => dispatch(receiveCurrentUser(user)))
    .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
  );
};

export const logout = () => dispatch => {
  return (deleteSession()
    .then(() => dispatch(logoutCurrentUser()))
    .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
  );
};

export const userExists = (user) => dispatch => {
  return (getUser(user)
    .fail(error => dispatch(receiveErrors(error.responseJSON)))
  );
};

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors,
});

export const clearErrors = () => ({
  type: REMOVE_ERRORS,
});

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser,
});

export const findCurrentUser = (user) => ({
  type: FIND_CURRENT_USER,
  user,
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});