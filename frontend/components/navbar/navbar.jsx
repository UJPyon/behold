import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import AdobeIcon from './adobe_button_icon';
import ProfileAvatar from './profile_avatar';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    this.props.logout().then(() => this.props.history.push("/"));
  }

  render() {
    if (this.props.currentUser) {
      return (
        <div className="header-right">
          {/* <h3>Welcome back, {this.props.currentUser.fname}&nbsp;{this.props.currentUser.lname}</h3> */}

          {/* List of icons in header:  */}
          <i className="material-icons">search</i>
          <i className="fas fa-envelope"/>
          <i className="fas fa-bell"/>
          {/* <button onClick={this.handleLogout}>Logout</button> */}
          
          <div className="header-drop">
            <button className="header-drop-btn"><ProfileAvatar /></button>
            <div className="header-drop-content">
              <ul></ul>
              <div>
                <ProfileAvatar />
                <p>{this.props.currentUser.fname}</p>
                <p>demo@gmail.com</p>
                <Link to="/">Manage Adobe ID</Link>
              </div>
              <Link className="header-drop-content-link" to="/">Behold Profile</Link>
              <Link className="header-drop-content-link" to="/">Settings</Link>
              <button onClick={this.handleLogout}>Sign Out</button>
            </div>
          </div>
          <i className="material-icons">&#xe5c3;</i>

          <a href="https://www.adobe.com/creativecloud.html" className="header-adobe-logo">
            <div>
              <AdobeIcon />
            </div>
            <div className="header-adobe-logo-text">
              Adobe
            </div>
          </a>
        </div>
      );
    } else {

      return (
        <div>
          <Link to="/signup">Sign Up</Link>
          <Link to="/login">Login</Link>
        </div>
      );
    }
  }
}

export default withRouter(Navbar);