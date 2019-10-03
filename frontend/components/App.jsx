import React from 'react';
import NavbarContainer from './navbar/navbar_container';
import { Route } from 'react-router-dom';
import SignUpFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import { SplashPage } from './splash/splash_form';
import { AuthRoute } from '../utils/route_util';


const App = () => {
  return (
    <div className="main">

      <nav className="main-navbar-active">
        <img src="https://behold-aa.s3.us-east-2.amazonaws.com/behold_logo_bold.png"/>
        <NavbarContainer />
      </nav>
      <div className="main-session">
          <Route exact path='/' component={SplashPage} />

        <div className="main-session-containers">
          <AuthRoute path='/signup' component={SignUpFormContainer} />
          <AuthRoute path='/login' component={LoginFormContainer} />
          {/* <AuthRoute path='/home' component={} /> */}
        </div>
      </div>

      <nav className="main-footer">
        Future Footer
      </nav>
      
    </div>
  )
};

export default App;