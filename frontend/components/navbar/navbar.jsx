import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import AdobeIcon from './adobe_button_icon';
import ProfileAvatar from './profile_avatar';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      avatarDropdown: "hide",
      categoryDropdown: "hide",
    };
    this.handleLogout = this.handleLogout.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleAvatarClick = this.handleAvatarClick.bind(this);
    this.hideDropdown = this.hideDropdown.bind(this);
    this.showDropdown = this.showDropdown.bind(this);
  }

  handleLogout() {
    this.props.logout().then(() => this.props.history.push("/"));
  }

  handleClick(e) {
    e.preventDefault();
    this.props.history.push("/home");
  }

  handleAvatarClick() {
    const currentUserId = this.props.currentUser.id;
    this.props.history.push(`/home/${currentUserId}`);
  }

  hideDropdown(type) {
    let ele = document.getElementById(type);
    debugger
    if (ele) {
      ele.style.visibility = "hidden";
      ele.style.transition = ".2s";
      ele.style.opacity = "0";
    }
  }

  showDropdown(type) {
    let ele = document.getElementById(type);
    debugger
    if (ele) {
      ele.style.visibility = "visible";
      ele.style.transition = ".2s";
      ele.style.opacity = "1";
    }
  }
  
  render() {

    let navbarItems;
    if (this.props.currentUser) {
    navbarItems = (
    <>
    {/* Dropdown menu on User Avatar icon */ }
    <div className="header-drop" id="drop">
      <section onClick={this.handleAvatarClick} className="header-drop-btn">
        <ProfileAvatar size={{ width: "34px", height: "34px" }} avatarUrl={this.props.currentUser.avatarUrl} />
      </section>
      <div className="header-drop-content">
        <span className="header-drop-content-triangle"></span>
        <div>
          <section className="header-drop-content-section">
            <button onClick={this.handleAvatarClick}>
              <ProfileAvatar size={{width: "70px", height: "70px"}} avatarUrl={this.props.currentUser.avatarUrl} />
            </button>
            <div>
              <h3>{this.props.currentUser.fname}</h3>
              <p>{this.props.currentUser.email}</p>
            </div>
          </section>
        </div>
        <section className="header-drop-content-links">
          <Link to="/home">Back to Home Page</Link>
          <Link to={`/home/${this.props.currentUser.id}`}>Behold Profile</Link>
          <button onClick={this.handleLogout}>Sign Out</button>
        </section>
      </div>
    </div>

    {/* Category dropdown menu */}
      <div className="menu-drop" onMouseOver={() => this.showDropdown("menu")} onMouseLeave={() => this.hideDropdown("menu")}>
      <i className="material-icons">&#xe5c3;</i>
        <div className="menu-drop-content" id="menu" onMouseLeave={() => this.hideDropdown("menu")}>
        <span className="menu-drop-content-triangle"></span>
        <div>
          <section className="menu-drop-content-section">
              <h3>View by Category</h3>
          </section>
        </div>
        <section className="menu-drop-content-links">
          <Link onClick={() => this.hideDropdown("menu")} to="/home/category/1">Illustration</Link>
          <Link onClick={() => this.hideDropdown("menu")} to="/home/category/2">Architecture</Link>
          <Link onClick={() => this.hideDropdown("menu")} to="/home/category/3">Industrial Design</Link>
        </section>
      </div>
    </div>
    </>
    );
    } else {
      navbarItems = (
      <section className="header-login">
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
        <a href="https://www.adobe.com/creativecloud.html" target="_blank" className="header-adobe-logo">
          <div><AdobeIcon /></div>
          <div className="header-adobe-logo-text">Adobe</div>
        </a>
      </div>
    </nav>
    );
  }
}

export default withRouter(Navbar);