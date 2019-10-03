import React from 'react';
import NavbarContainer from './navbar/navbar_container';
import { Route } from 'react-router-dom';
import SignUpFormContainer from './session/signup_form_container'
import LoginFormContainer from './session/login_form_container'
import { AuthRoute } from '../utils/route_util';


const App = () => {
  return (
    <div className="main">
      <nav className="main-navbar-active">
        <img src="https://behold-aa.s3.us-east-2.amazonaws.com/behold_logo_bold.png"/>
        <NavbarContainer />
      </nav>
      <div className="main-session">

        <div className="main-session-containers">
          <AuthRoute path='/signup' component={SignUpFormContainer} />
          <AuthRoute path='/login' component={LoginFormContainer} />
        </div>
      </div>
    </div>
  )
};

export default App;