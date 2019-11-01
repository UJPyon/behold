import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignUpFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import SplashPageContainer from './splash/splash_form_container';
import HomeContainer from './home/home_container';
import ProfileContainer from './profile/profile_container';
import CategoryContainer from './category/category_container';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';
import Footer from './footer/footer';
import Navbar from './navbar/navbar_container';
import Modal from './modal/modal';

const App = () => {

  return (
  <>
  <Modal />
  <div className="main-home">
    <Switch>
      <AuthRoute exact path='/' component={SplashPageContainer} />
      <AuthRoute exact path='/signup' component={SignUpFormContainer} />
      <AuthRoute exact path='/login' component={LoginFormContainer} />
    </Switch>
    <ProtectedRoute path='/home' component={Navbar} /> 
    <ProtectedRoute exact path='/home' component={HomeContainer} />
    <ProtectedRoute exact path='/home/:userId' component={ProfileContainer} />
    <ProtectedRoute exact path='/home/category/:categoryId' component={CategoryContainer} />
    <ProtectedRoute path='/home' component={Footer} /> 
  </div>
  </>
  );
};

export default App;