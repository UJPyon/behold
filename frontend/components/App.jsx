import React from 'react';
// import NavbarContainer from './navbar/navbar_container';
import { Route, Switch } from 'react-router-dom';
import SignUpFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import SplashPageContainer from './splash/splash_form_container';
import HomeContainer from './home/home_container';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';
// import Footer from './footer/footer';

const App = () => {
  return (
    // <div className="main">

      // {/* <nav className="main-navbar-active">
      //   <img src="https://behold-aa.s3.us-east-2.amazonaws.com/behold_logo_bold.png"/>
      //   <NavbarContainer />
      // </nav> */}
      // <div className="main-session">
      
      <div className="main-session-containers">
          <Switch>
            <Route exact path='/' component={SplashPageContainer} />
            <AuthRoute exact path='/signup' component={SignUpFormContainer} />
            <AuthRoute exact path='/login' component={LoginFormContainer} />
            <ProtectedRoute exact path='/home' component={HomeContainer} />
          </Switch>
        </div>
      // </div>

      // {/* <Footer /> */}
    // {/* </div> */}
  )
};

export default App;