import React from 'react';
import NavbarContainer from './navbar/navbar_container';
import { Route } from 'react-router-dom';
import SignUpFormContainer from './session/signup_form_container'
import LoginFormContainer from './session/login_form_container'
import { AuthRoute } from '../utils/route_util';

const App = () => {
  return (
    <div>
      <nav>
        <h1>Behold</h1>
        <NavbarContainer />
      </nav>

      <AuthRoute path='/signup' component={SignUpFormContainer} />
      <AuthRoute path='/login' component={LoginFormContainer} />
    </div>
  )
};

export default App;