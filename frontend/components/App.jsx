import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignUpFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import SplashPageContainer from './splash/splash_form_container';
import HomeContainer from './home/home_container';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';

const App = () => {
  return (
  <div className="main-session-containers">
    <Switch>
      <Route exact path='/' component={SplashPageContainer} />
      <AuthRoute exact path='/signup' component={SignUpFormContainer} />
      <AuthRoute exact path='/login' component={LoginFormContainer} />
      <ProtectedRoute exact path='/home' component={HomeContainer} />
      <ProtectedRoute exact path='/home/:userId' component={HomeContainer} />
    </Switch>
  </div>
  )
};

export default App;