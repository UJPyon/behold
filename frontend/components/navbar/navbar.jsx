import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    this.props.logout();
    this.props.history.push("/login");
  }

  render() {
    if (this.props.currentUser) {
      return (
        <div>
          <h3>Salutations, {this.props.currentUser.email}!</h3>
          <button onClick={this.handleLogout}>Logout</button>
        </div>
      );
    } else {
      // --TESTING! Trying to not show the signup & login links on splash page, it's redundant: -- 
      // return <div></div>

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