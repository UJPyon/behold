import { postUser, postSession, deleteSession } from '../utils/session_api_util'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS'
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER'


export const login = (formUser) => dispatch => {
  return (postSession(formUser)
    .then(user => dispatch(receiveCurrentUser(user)))
    .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
  )
};

export const signup = (formUser) => dispatch => {
  return (postUser(formUser)
    .then(user => dispatch(receiveCurrentUser(user)))
    .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
  )
};

export const logout = () => dispatch => {
  return (deleteSession()
    .then(() => dispatch(logoutCurrentUser()))
    .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
  )
};

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors,
});

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser,
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});