import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { postUser, postSession, deleteSession } from './utils/session_api_util';
import { login, logout, signup } from './actions/session_actions';

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.current_user) {
    const preloadedState = {
    entities: {
      users: { [window.currentUser.id]: window.currentUser }
    },
      session: { id: window.currentUser.id }
  };
  store = configureStore(preloadedState);
  delete window.currentUser;
    } else {
      store = configureStore();
  }

  // ----------------------------------------
  // vvvvvvvvvvvvv BEGIN TESTS vvvvvvvvvvvvvv
  // ----------------------------------------

  window.postUser = postUser;
  window.deleteSession = deleteSession;
  window.postSession = postSession;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.login = login;
  window.logout = logout;
  window.signup = signup;

  // ----------------------------------------
  // ^^^^^^^^^^^^^ END TESTS ^^^^^^^^^^^^^^^^
  // ----------------------------------------


  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store}/>, root)
});