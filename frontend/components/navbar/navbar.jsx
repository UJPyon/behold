import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import AdobeIcon from './adobe_button_icon';
import ProfileAvatar from './profile_avatar';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleAvatarClick = this.handleAvatarClick.bind(this);
  }

  handleLogout() {
    this.props.logout().then(() => this.props.history.push("/"));
  }

  handleClick(e) {
    e.preventDefault();
    this.props.history.push("/home");
  }

  handleAvatarClick() {
    const currentUserId = this.props.currentUser.id
    this.props.history.push(`/home/${currentUserId}`);
  }

  render() {
    let navbarItems;
    if (this.props.currentUser) {
    navbarItems = (
    <>
    {/* Dropdown menu on User Avatar icon */ }
    <div className="header-drop">
      <button onClick={this.handleAvatarClick} className="header-drop-btn">
        <ProfileAvatar class="home-navbar-avatar" />
      </button>
      <div className="header-drop-content">
        <div>
          <button onClick={this.handleAvatarClick}>
            <ProfileAvatar class="home-navbar-avatar" />
          </button>
          <p>{this.props.currentUser.fname}</p>
          <p>demo@gmail.com</p>
          <Link to="/">Manage Adobe ID</Link>
        </div>
        <Link className="header-drop-content-link" to={`/home/${this.props.currentUser.id}`}>Behold Profile</Link>
        <Link className="header-drop-content-link" to="/">Settings</Link>
        <button onClick={this.handleLogout}>Sign Out</button>
      </div>
    </div>
    <i className="material-icons">&#xe5c3;</i>
    </>
    );
    } else {
      navbarItems = (
      <section>
        <Link to="/login">Log in</Link>
        <Link to="/signup">Sign up</Link>
      </section>
      );
    }

    return (

    <nav className="home-navbar" fixed="top">

      {/* Clickable Behold logo leads back to /home page */}
      <img onClick={this.handleClick} src={window.beholdLogoBold} />

      <div className="header-right">

        {/* List of icons in header (FOR FUTURE FEATURES):  */}
        {/* <i className="material-icons">search</i>
        <i className="fas fa-envelope"/>
        <i className="fas fa-bell"/> */}
        
        {navbarItems}

        {/* Clickable Adobe logo & icon that leads to Adobe website */}
        <a href="https://www.adobe.com/creativecloud.html" className="header-adobe-logo">
          <div><AdobeIcon /></div>
          <div className="header-adobe-logo-text">Adobe</div>
        </a>
      </div>
    </nav>
    );
  }
}

export default withRouter(Navbar);